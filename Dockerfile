# Build stage
FROM node:18-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund
COPY . .
RUN npm run build

# Production stage
FROM nginx:1.27-alpine
# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*
# Copy compiled app
COPY --from=build /app/build /usr/share/nginx/html
# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Expose port
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]