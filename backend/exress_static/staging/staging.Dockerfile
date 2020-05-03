FROM node:10-alpine
WORKDIR /usr/src/app

COPY ./backend/express_static $HOME/express_static
COPY ./frontend $HOME/FRONTEND
RUN cd frontend && npm i && npm run build:staging
RUN cd express_static && npm i
CMD npm run start
