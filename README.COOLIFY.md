# Coolify Deployment Guide

This guide will help you deploy Signify AI to Coolify. You have two deployment options:

## Option 1: Deploy as Docker Compose Application (Recommended)

Coolify supports Docker Compose deployments, which allows you to deploy both frontend and backend together.

### Step 1: Push to Git Repository

1. Ensure all your code is committed and pushed to your Git repository (GitHub, GitLab, etc.)
2. Make sure your repository is accessible to Coolify (public or connected via GitHub App)

### Step 2: Create New Project in Coolify

1. Log into your Coolify dashboard
2. Click on **"Projects"** → **"Add"** to create a new project
3. Name it "Signify AI" or similar

### Step 3: Add Docker Compose Resource

1. Within your project, select **"Production"** environment
2. Click **"Add a new resource"**
3. Choose **"Docker Compose"** as the resource type
4. Connect your Git repository:
   - If private: Select **"Private Repository (with GitHub App)"** and connect
   - If public: Select **"Public Repository"** and enter the URL

### Step 4: Configure Docker Compose

1. **Repository**: Select your repository
2. **Branch**: Select the branch to deploy (e.g., `main`, `justin-develop`)
3. **Docker Compose File**: Set to `docker-compose.yml`
4. **Base Directory**: Leave as `/` (root of repository)
5. **Ports**: Coolify will automatically handle port mapping
   - Frontend will be accessible on port 80
   - Backend will be accessible on port 8080 (or configure a custom port)

### Step 5: Set Environment Variables

In the **"Environment Variables"** section, add:

**For Frontend:**
```
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1
PORT=80
```

**For Backend:**
```
NODE_ENV=production
PORT=80
```

### Step 6: Configure Domains

1. In the **"Domains"** section, add your custom domain(s):
   - Frontend: `app.yourdomain.com` or `yourdomain.com`
   - Backend: `api.yourdomain.com` (if needed)
2. Coolify will automatically provision SSL certificates via Let's Encrypt

### Step 7: Deploy

1. Click **"Save"** to save the configuration
2. Click **"Deploy"** to start the deployment
3. Monitor the deployment in the **"Deployments"** tab
4. Once complete, your application will be accessible at your configured domain

---

## Option 2: Deploy Frontend and Backend Separately

If you prefer to deploy frontend and backend as separate applications in Coolify:

### Deploy Frontend

1. Create a new resource in your project
2. Choose **"Dockerfile"** as the build pack
3. Configure:
   - **Repository**: Your Git repository
   - **Branch**: Your deployment branch
   - **Dockerfile Path**: `frontend/Dockerfile`
   - **Base Directory**: `frontend/`
   - **Port**: `80`
4. Set environment variables:
   ```
   NODE_ENV=production
   NEXT_TELEMETRY_DISABLED=1
   PORT=80
   ```
5. Add domain and deploy

### Deploy Backend

1. Create another resource in the same project
2. Choose **"Dockerfile"** as the build pack
3. Configure:
   - **Repository**: Your Git repository
   - **Branch**: Your deployment branch
   - **Dockerfile Path**: `backend/Dockerfile`
   - **Base Directory**: `backend/`
   - **Port**: `80`
4. Set environment variables:
   ```
   NODE_ENV=production
   PORT=80
   ```
5. Add domain and deploy

---

## Important Configuration Notes

### Port Configuration

- Both services run on port **80** inside their containers (standard HTTP)
- Coolify will handle external port mapping automatically
- Frontend is typically exposed on port 80/443 (HTTP/HTTPS)
- Backend can be exposed on a different port or subdomain

### Environment Variables

If you need to pass environment variables between services:

1. Use Coolify's **"Shared Environment Variables"** feature
2. Or configure them in the Docker Compose environment section
3. For Next.js public variables, prefix with `NEXT_PUBLIC_`

### Build Optimization

The Dockerfiles are already optimized for production:
- Multi-stage builds for smaller images
- Only production dependencies in final images
- Next.js standalone output for optimal performance

### Database/Storage

If you need persistent storage:
1. Configure **"Persistent Storage"** in Coolify
2. Add volume mounts in `docker-compose.yml` if needed
3. For databases, consider using Coolify's database resources

---

## Troubleshooting

### Build Fails

- Check the build logs in Coolify's deployment tab
- Ensure all required files are in the repository
- Verify Dockerfile paths are correct

### Port Conflicts

- Ensure ports 80 and 8080 are available
- Coolify will automatically assign ports if conflicts occur

### Environment Variables Not Working

- Make sure variables are set in the correct service
- For Next.js, `NEXT_PUBLIC_*` variables must be set before build
- Use "Force deploy without cache" if variables changed

### Domain Not Working

- Verify DNS records point to your Coolify server
- Check SSL certificate provisioning status
- Ensure domain is added in Coolify's domain configuration

---

## Quick Start Checklist

- [ ] Code pushed to Git repository
- [ ] Repository accessible to Coolify
- [ ] Project created in Coolify
- [ ] Docker Compose resource added (or separate resources)
- [ ] Environment variables configured
- [ ] Domains configured
- [ ] DNS records updated
- [ ] Deployment initiated
- [ ] Application accessible

---

## Additional Resources

- [Coolify Documentation](https://coolify.io/docs)
- [Docker Compose Documentation](https://docs.docker.com/compose/)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)

