FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm list -g vite || echo "Vite is not globally installed"

COPY . .

EXPOSE 5173

CMD [ "npm", "run", "dev" ]
