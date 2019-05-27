FROM node:12.3.1

ENV SECURE_PORT=443 INSECURE_PORT=80 TZ=UTC

WORKDIR /app

COPY package.json yarn.lock ./
COPY src src
COPY dist dist
COPY node_modules node_modules

EXPOSE 80 443

HEALTHCHECK CMD curl --fail http://localhost/healthcheck

CMD ["yarn", "serve"]
