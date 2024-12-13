# Development Dockerfile
# Dockerfile.dev
FROM node:18-alpine

WORKDIR /app

# Install dependencies first (caching)
COPY package*.json ./
RUN npm install --force
# Copy the rest of the code
COPY . .

RUN npm run build 

# Expose port 3000
EXPOSE 3000

# Start development server
CMD ["npm", "run", "start"]

# Production Dockerfile
# Dockerfile
# FROM node:18-alpine AS base

# # Install dependencies only when needed
# FROM base AS deps
# WORKDIR /app
# COPY package*.json ./
# RUN npm i -f

# # Rebuild the source code only when needed
# FROM base AS builder
# WORKDIR /app
# COPY --from=deps /app/node_modules ./node_modules
# COPY . .

# # Environment variables must be present at build time
# # https://github.com/vercel/next.js/discussions/14030
# ENV NEXT_TELEMETRY_DISABLED 1

# RUN npm run build

# # Production image, copy all files and run next
# FROM base AS runner
# WORKDIR /app

# ENV NODE_ENV production
# ENV NEXT_TELEMETRY_DISABLED 1

# RUN addgroup --system --gid 1001 nodejs
# RUN adduser --system --uid 1001 nextjs

# # Copy built files
# COPY --from=builder /app/public ./public
# COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
# COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# USER nextjs

# EXPOSE 3000

# ENV PORT 3000

# CMD ["node", "server.js"]