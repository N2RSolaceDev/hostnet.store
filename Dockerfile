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

# Install core utilities if needed (for sed, etc.)
RUN apk add --no-cache bash coreutils

# Copy all static files from current directory
COPY . .

# Install http-server globally
RUN npm install -g http-server

# Optional: Inject environment and footer text into index.html
RUN if [ -f index.html ]; then \
      sed -i "s|<!-- ENV_INFO -->|<p class=\"env-info\">Environment: ${ENVIRONMENT}</p>|g" index.html && \
      sed -i "s|<!-- FOOTER_TEXT -->|<p class=\"footer-text\">${FOOTER_TEXT}</p>|g" index.html; \
    fi

# Expose configurable port
EXPOSE ${SERVER_PORT}

# Start the http-server with the specified port
CMD ["sh", "-c", "http-server -p $SERVER_PORT"]
