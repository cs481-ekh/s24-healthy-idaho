FROM node:21-alpine3.18

WORKDIR /app/react

COPY . .

RUN npm cache clean --force
RUN npm install
RUN npm install react-scripts --save
RUN npm install -g serve
RUN npm run build

EXPOSE 3000

CMD ["serve", "-s", "build", "-l", "3000"]
