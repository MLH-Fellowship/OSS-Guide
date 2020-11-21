FROM node:13.12.0-alpine
COPY . /app
WORKDIR /app
RUN npm install
ENV PORT=3000
CMD npm start --port $PORT