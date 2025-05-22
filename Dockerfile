# Use Cypress official base image with Chrome and Firefox installed
FROM cypress/browsers:node-18.12.0-chrome-107.0.5304.62-1-ff-106.0

# Set working directory inside container
WORKDIR /e2e

# Copy your local test files and package.json
COPY package.json package-lock.json ./
COPY cypress ./cypress
COPY cypress.config.js .  # or cypress.json if you're using the older config style

# Install dependencies (including Cypress)
RUN npm ci

# Optional: set environment variables, e.g., base URL for testing
ENV CYPRESS_baseUrl=http://localhost:3000

# Run Cypress tests headlessly in Chrome
CMD ["npx", "cypress", "run", "--browser", "chrome"]
