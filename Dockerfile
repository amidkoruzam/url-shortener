FROM node:18-alpine
WORKDIR /app
COPY yarn.lock .
COPY package.json .
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build
CMD ["node", "dist/index.js"]