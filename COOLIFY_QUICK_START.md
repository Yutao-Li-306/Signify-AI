# Coolify Quick Start Guide

## 🚀 Fastest Way to Deploy

### 1. Push Your Code
```bash
git add .
git commit -m "Ready for Coolify deployment"
git push origin main  # or your branch name
```

### 2. In Coolify Dashboard

1. **Create Project** → Name it "Signify AI"
2. **Add Resource** → Choose "Docker Compose"
3. **Connect Repository** → Link your Git repo
4. **Configure**:
   - Branch: `main` (or your branch)
   - Docker Compose File: `docker-compose.yml`
   - Base Directory: `/`
5. **Add Domain** → Your domain (e.g., `app.yourdomain.com`)
6. **Deploy** → Click deploy and wait!

### 3. That's It! 🎉

Your app will be live at your domain with automatic SSL.

---

## 📋 Configuration Summary

| Setting | Value |
|---------|-------|
| **Docker Compose File** | `docker-compose.yml` |
| **Frontend Port** | `80` |
| **Backend Port** | `80` (internal), `8080` (external) |
| **Build Context** | Root directory |
| **Environment** | Production |

---

## 🔧 Environment Variables

Add these in Coolify's environment variables section:

**Frontend:**
- `NODE_ENV=production`
- `NEXT_TELEMETRY_DISABLED=1`
- `PORT=80`

**Backend:**
- `NODE_ENV=production`
- `PORT=80`

---

## 🌐 Domain Setup

1. Add your domain in Coolify (e.g., `app.yourdomain.com`)
2. Point DNS A record to your Coolify server IP
3. Coolify automatically provisions SSL certificate

---

## 📞 Need Help?

- Check deployment logs in Coolify dashboard
- See full guide: `README.COOLIFY.md`
- Coolify docs: https://coolify.io/docs

