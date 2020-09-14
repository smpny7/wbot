FROM node

WORKDIR /usr/src/wbot

COPY . .
RUN npm install
RUN npm run build

CMD [ "node", "index.js" ]
