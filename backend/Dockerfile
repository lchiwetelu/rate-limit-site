# ---- Base image ----------------------------------------------------------
FROM node:20-alpine AS base
WORKDIR /app

# Install production dependencies only (will be re‑installed later)
COPY package*.json ./
RUN npm ci --production --silent

# ---- Development / build stage -------------------------------------------
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./

# install dev deps (ts-node, typescript, etc.)
RUN npm ci --silent            

COPY tsconfig.json ./
COPY src ./src

# compile to ./dist
RUN npx tsc                    

# ---- Production image ----------------------------------------------------
FROM node:20-alpine
WORKDIR /app

# Pull in only the compiled output + runtime deps
COPY --from=builder /app/dist ./dist
COPY --from=base /app/node_modules ./node_modules
COPY package*.json ./

# Environment variables (override with docker‑compose env_file or .env)
ENV NODE_ENV=production
ENV PORT=3000

# Fastify will listen on this port

EXPOSE 3000
CMD ["node", "dist/server.js"]