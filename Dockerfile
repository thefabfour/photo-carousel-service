FROM node:14-alpine

RUN mkdir -p /src/app

WORKDIR /app

COPY . /app

RUN yarn install

EXPOSE 3003

CMD ["yarn", "start"]
