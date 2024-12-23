# Use official MongoDB image from Docker Hub
FROM mongo:latest

# Add a custom MongoDB initialization script
COPY init-mongo.js /docker-entrypoint-initdb.d/

# Expose port for MongoDB
EXPOSE 27017
