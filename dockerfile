FROM node:12

COPY ./apps/demo/package.json ./

RUN npm install

COPY ./apps/demo/dist ./dist
COPY ./apps/Engine/dist ./dist
COPY ./packages/GraphicsPIXI/dist ./dist
COPY ./packages/SoundPIXI/dist ./dist
COPY ./packages/NetworkAxios/dist ./dist

COPY ./apps/demo/server.js ./

CMD ["node", "server.js"]