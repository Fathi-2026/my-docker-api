# Use a lightweight version of Node.js
FROM node:18-alpine

# Create and set the working directory inside the container
WORKDIR /app

# Copy package files and install dependencies
# We copy these first to leverage Docker's caching mechanism
COPY package*.json ./
RUN npm install

# Copy the rest of your application code
COPY . .

# Inform Docker that the container listens on port 3000 at runtime
EXPOSE 3000

# The command to start your API
CMD ["node", "server.js"]
