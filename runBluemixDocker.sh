#!/bin/sh

. ./VARS.sh

cf ic run --name $CONTAINER --link $MONGO_CONTAINER:$MONGO_CONTAINER_ALIAS -m $BX_CONTAINER_MEMORY $BX_IMG

sleep 12
cf ic logs $CONTAINER