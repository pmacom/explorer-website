FROM node:16-alpine 
WORKDIR /app
COPY . .
RUN npm ci 
RUN npm install -g serve
RUN npm run build:full
# COPY ../local/feature-flags/explorer.json /app/build/explorer.json

      # - "./explorer-website/build:/app/build"
      # - "./local/feature-flags/explorer.json:/app/feature-flags"
#RUN cp -r /app/build/cdn /app/public/cdn
#RUN cp -r /app/build/static /app/public/static
ENV NODE_ENV production
EXPOSE 3000
#CMD ["npm", "run", "start" ]
CMD [ "serve", "-s", "build" ]
