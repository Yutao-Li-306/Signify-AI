FROM node:20-alpine

WORKDIR /app
COPY package*.json ./
# Use npm install if lock file is out of sync, otherwise use npm ci for faster installs
RUN npm ci --only=production 2>/dev/null || npm install --only=production

COPY . .

HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3001/health', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})" || exit 1

CMD ["node", "index.js"]
  
