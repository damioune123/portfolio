FROM node:10-alpine
WORKDIR /usr/src/app

COPY . .
RUN cd frontend # && npm i && npm run build:production
RUN cd backend/express_static && npm i
CMD npm run start
