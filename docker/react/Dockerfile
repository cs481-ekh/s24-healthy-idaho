FROM node:16.17.0-alpine3.16

WORKDIR /app/react

COPY frontend /app/react
RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
