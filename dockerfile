# Dockerfile - Build for full-stack fitness habit app
FROM node:18-alpine AS build

WORKDIR /app

# Copy backend dependencies first
COPY backend/package*.json ./backend/
RUN cd backend && npm install

# Copy frontend dependencies
COPY frontend/package*.json ./frontend/
RUN cd frontend && npm install

# Copy all source code
COPY . .

# Build frontend
RUN cd frontend && npx expo export --platform web

# Production container
FROM node:18-alpine
WORKDIR /app

# Copy backend build
COPY --from=build /app/backend ./backend
COPY --from=build /app/frontend/dist ./frontend/dist

WORKDIR /app/backend

ENV NODE_ENV=production

# Install only production dependencies
RUN npm install --omit=dev

EXPOSE 5000
CMD ["node", "server.js"]
