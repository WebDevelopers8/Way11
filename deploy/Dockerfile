FROM node:18-alpine3.18 as builder

# Set the working directory to /app inside the container
WORKDIR /app
# Copy app files
COPY package.json .
# Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
RUN yarn

COPY . .
# Build the app
RUN yarn build

# Bundle static assets with nginx
FROM nginx:1.23-alpine as production
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
# Copy built assets from `builder` image
COPY --from=builder /app/dist .
# Add your nginx.conf
COPY ./deploy/nginx.conf /etc/nginx/conf.d/default.conf
# Expose port
EXPOSE 80
# Start nginx
CMD ["nginx", "-g", "daemon off;"]