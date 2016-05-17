#!/bin/sh

. ./VARS.sh

docker build -t $IMG .

docker run -d --name $CONTAINER -p 8080:8080 --add-host mongo:$MONGO_HOST $IMG 
