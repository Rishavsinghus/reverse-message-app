FROM node:14-alpine AS builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
FROM node:14-alpine
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app .
EXPOSE 3001
CMD ["node", "index.js"]

