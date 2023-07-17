FROM node:lts-alpine AS builder

ENV NODE_ENV=development
COPY . .
RUN npm install
RUN npm run build

FROM caddy:2.3.0-alpine

COPY Caddyfile /etc/caddy/Caddyfile
COPY --from=builder /dist /srv