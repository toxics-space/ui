ARG TARGETPLATFORM=amd64
ARG BUILDPLATFORM=amd64

FROM --platform=$TARGETPLATFORM nginx:1.23.1 as base

FROM --platform=$BUILDPLATFORM node:18 AS build

ARG TARGETPLATFORM
ARG BUILDPLATFORM
RUN echo "I am running on $BUILDPLATFORM, building for $TARGETPLATFORM" > /log

WORKDIR /app
COPY ./public ./public
COPY ./src ./src
COPY package.json .
COPY config-overrides.js .
COPY package-lock.json .
COPY tsconfig.json .
COPY nginx.conf.template .
COPY nginx-entrypoint.sh .
RUN npm ci
RUN npm run build

FROM base AS final

COPY --from=build /app/build/ /usr/share/nginx/html
COPY --from=build /app/nginx.conf.template /etc/nginx/templates/default.conf.template
COPY --from=build /app/nginx-entrypoint.sh /usr/local/bin/nginx-entrypoint.sh

ENV SERVER_NAME "localhost"
EXPOSE 80

ENTRYPOINT ["nginx-entrypoint.sh"]
