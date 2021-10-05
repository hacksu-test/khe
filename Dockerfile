FROM node:latest

WORKDIR /web

RUN npm install express

COPY index.js .

EXPOSE 3000

CMD [ "node", "." ]
