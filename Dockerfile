#https://store.docker.com/images/node
FROM node:lts as node-stage

COPY . /var/build-node


WORKDIR /var/build-node

RUN yarn
RUN yarn build



FROM nginx:stable

COPY --from=node-stage /var/build-node/dist /var/www/app/public


ENV FRONTEND_ENV_FILE=/var/www/app/public/index.html


COPY config/nginx/nginx.conf /etc/nginx/nginx.conf
COPY config/nginx/app.conf   /etc/nginx/conf.d/default.conf


COPY ./fill-env-vars.sh /docker-entrypoint.d/fill-env-vars.sh
RUN chmod +x /docker-entrypoint.d/fill-env-vars.sh

WORKDIR /var/www/app

