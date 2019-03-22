FROM node:10

RUN npm config set unsafe-perm true

EXPOSE 3000

WORKDIR /app

ADD ./package.json /app/package.json

RUN npm install

ADD . /app

CMD npm start