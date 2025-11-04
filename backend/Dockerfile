#FROM node:20-alpine AS builder

#WORKDIR /app

#COPY package*.json ./
#RUN npm i

#COPY tsconfig.json ./
#COPY src ./src

#RUN npx tsc                  # respects tsconfig.json




#FROM node:20-alpine AS runtime
#WORKDIR /app
# Copy only the built files from the builder stage
#COPY --from=builder /app/dist ./dist

#COPY --from=builder /app/node_modules ./node_modules
#RUN npm prune --production 

#COPY package*.json ./

# Environment defaults – can be overridden via docker‑compose or .env
#ENV NODE_ENV=production
#ENV PORT=3000

# Expose the HTTP port (adjust if your app uses a different one)
#EXPOSE 3000

# Start the server
#CMD ["node", "dist/server.js"]