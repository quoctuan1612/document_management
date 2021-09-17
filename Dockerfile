FROM node:16.3.0-alpine

WORKDIR /app/
ADD package.json .
RUN yarn install --production=true
ADD api ./api
ADD controllers ./controllers
ADD middlewares ./middlewares
ADD public ./public
ADD routes ./routes
ADD views ./views
ADD db.js .
ADD db.json .
ADD server.js .

CMD ["yarn", "start"]
EXPOSE 3001