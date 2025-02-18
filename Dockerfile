FROM node:23.8.0-slim

WORKDIR /app

COPY . .

RUN npm i

RUN npm run build

EXPOSE 4321

CMD ["npm", "run", "dev", "--", "--host"]



