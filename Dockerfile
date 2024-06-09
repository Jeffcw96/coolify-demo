FROM node:16-alpine as base

WORKDIR /app

COPY package.json ./

COPY tsconfig.json ./

COPY src ./src

RUN ls -a

RUN npm install

RUN npm install -g typescript

RUN npm run build

EXPOSE 4000

CMD [ "npm", "start" ]

