FROM node:16-alpine 
WORKDIR /app
COPY . .
RUN npm ci 
RUN npm install -g serve
RUN npm run build:full
ENV NODE_ENV production
EXPOSE 3000
#CMD ["npm", "run", "start" ]
CMD [ "serve", "-s", "build" ]
