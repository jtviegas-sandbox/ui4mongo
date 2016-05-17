FROM node:0.12.14-wheezy


RUN apt-get -y --fix-missing update
# RUN DEBIAN_FRONTEND=noninteractive apt-get -y install git sed bc vim ssh

WORKDIR /
RUN mkdir -p /app/server
RUN mkdir -p /app/public

ADD server /app/server
ADD public /app/public

ADD package.json /app
WORKDIR /app
RUN npm install -d --production 
EXPOSE 8080
CMD ["node", "server/app.js"]
