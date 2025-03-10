# ui/Dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 1234

CMD ["npx", "parcel", "src/index.html"]
