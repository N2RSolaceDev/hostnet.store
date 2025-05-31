# Use official lightweight Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Define build-time arguments
ARG SERVER_PORT=8080
ARG ENVIRONMENT=production
ARG FOOTER_TEXT="Powered by Hostnet.Store"

# Pass ARG values to environment variables
ENV SERVER_PORT=${SERVER_PORT} \
    ENVIRONMENT=${ENVIRONMENT} \
    FOOTER_TEXT=${FOOTER_TEXT}

# Install core utilities
RUN apk add --no-cache bash coreutils

# Copy project files
COPY . .

# Install dependencies
RUN npm install

# Expose configurable port
EXPOSE ${SERVER_PORT}

# Start the server
CMD ["node", "app/server.js"]
