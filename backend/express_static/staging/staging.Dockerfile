FROM node:10-alpine
WORKDIR /usr/src/app

COPY . .
RUN cd frontend && npm i && npm run build:staging
WORKDIR backend/express_static
RUN  npm i
EXPOSE 80
CMD npm run start