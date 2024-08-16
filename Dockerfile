# Build stage
FROM node:20.9-alpine AS build
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci

# Copy necessary files for the build
COPY src ./src
COPY public ./public
COPY next.config.mjs ./
COPY jsconfig.json ./
COPY tailwind.config.js ./
COPY postcss.config.mjs ./

RUN npm run build

# Production stage
FROM node:20.9-alpine

# Install necessary production dependencies
RUN apk add --no-cache libc6-compat

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

# Copy built files and necessary runtime files from build stage
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY next.config.mjs ./

# Create a non-root user and switch to it
RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -u 1001
RUN chown -R nextjs:nodejs /app
USER nextjs


EXPOSE 3000
CMD ["npm", "start"]