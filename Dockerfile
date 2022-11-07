FROM node:16-alpine
ENV INSTALL_PROJECT_PATH /project
WORKDIR $INSTALL_PROJECT_PATH
ADD ./src .
ADD ./package.json .
ADD ./package-lock.json .
RUN npm install
CMD ["npm","start"]
