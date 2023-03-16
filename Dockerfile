FROM node:16-alpine 
WORKDIR /app
COPY . .
RUN npm ci 
RUN npm run build:full
#RUN cp -r /app/build/cdn /app/public/cdn
#RUN cp -r /app/build/static /app/public/static
# RUN npm install -g serve
ENV NODE_ENV production
EXPOSE 3000
#CMD ["npm", "run", "start" ]
CMD [ "serve", "-s", "build" ]
