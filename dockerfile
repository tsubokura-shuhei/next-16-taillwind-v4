FROM node:20.11.0

# Create app directory
WORKDIR /usr/src/app/next-app

# Copy package.json package-lock.json
COPY ./next-app/package*.json .

RUN ["npm", "install"]