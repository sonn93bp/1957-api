# Use the official Node.js image as the base  
FROM node:20-alpine

# Set the working directory inside the container  
WORKDIR /app  

# Copy package.json and package-lock.json to the container  
COPY package*.json ./  

# Install dependencies  
RUN npm install --force

# Copy the app source code to the container  
COPY . .  

# Expose the port the app will run on  
EXPOSE 8000  

# Start the app  
CMD ["npm", "run", "dev"]  