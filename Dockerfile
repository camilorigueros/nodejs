FROM node:10

# Create app directory
WORKDIR /usr/auditoria/app

# Bundle app source
COPY . .

RUN npm install

EXPOSE 8080

CMD [ "npm", "start" ]