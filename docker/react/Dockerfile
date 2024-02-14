FROM node:16.17.0-alpine3.16

WORKDIR /app/react

COPY frontend /app/react

RUN ls -la

RUN npm cache clean --force
RUN npm install react-scripts
RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
