FROM alpine:latest

WORKDIR /projects

RUN apk update && \
    apk add  --update npm  && \
    npm install -g @vue/cli

CMD  ["/bin/sh"]
