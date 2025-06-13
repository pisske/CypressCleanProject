# Use Cypress official base image with Chrome and Firefox installed
FROM cypress/browsers:node18.12.1-chrome115-ff114





# Set working directory inside container
WORKDIR /e2e

# Copy your local test files and package.json
COPY package.json package-lock.json ./
COPY cypress ./cypress
COPY cypress.config.js .  

# Install dependencies (including Cypress)
RUN npm ci

# Optional: set environment variables, e.g., base URL for testing
ENV CYPRESS_baseUrl=http://host.docker.internal:3000


# Run Cypress tests headlessly in Chrome
CMD ["npx", "cypress", "run", "--browser", "chrome", "--spec", "cypress/e2e/UI/Login.js"]

