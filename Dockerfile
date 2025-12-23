# 1. Start with a pre-built Linux that has Node installed
FROM node:20-alpine

# 2. Create a folder inside the container
WORKDIR /app

# 3. Copy only the package files first (for caching)
COPY package.json package-lock.json ./

# 4. Install dependencies inside the container
RUN npm install

# 5. Copy the rest of your code
COPY . .

# 6. Expose the port the app runs on
EXPOSE 3000

# 7. The command to start the app
CMD ["npm", "start"]