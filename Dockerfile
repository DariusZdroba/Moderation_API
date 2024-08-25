# Dockerfile for Node.js application

FROM node:18

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and yarn.lock into the working directory
COPY package.json ./

# Install app dependencies using yarn
RUN npm install --production

# Copy the rest of the application code to the working directory
COPY . .

# Expose the application port
EXPOSE 8080

# Run the application
CMD [ "node", "dist/index.js" ]
