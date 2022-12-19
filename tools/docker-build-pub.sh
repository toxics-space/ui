#!/bin/sh

# Dont forget to login
docker build --build-arg TARGETPLATFORM=amd64 -t ui:latest . 
docker tag ui:latest reg.toxics.space/ui:latest
docker image push reg.toxics.space/ui:latest
