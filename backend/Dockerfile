# FROM node:16

# WORKDIR /app

# COPY package*.json ./
# RUN npm install

# COPY . .

# CMD ["npm", "start"]
# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port
EXPOSE 5000

# Start the backend server
CMD ["npm", "start"]
