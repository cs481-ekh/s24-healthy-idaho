FROM node:21-alpine3.18

WORKDIR /app/react

COPY package.json ./
# COPY ../../frontend/package.json ./

RUN npm cache clean --force
RUN npm install
RUN npm install react-scripts --save

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
