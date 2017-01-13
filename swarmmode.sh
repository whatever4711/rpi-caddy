#!/bin/bash

docker service create \
	--name rpi_caddy --label "rpi_caddy" \
       	--publish 8080:80 \
	--mount src=caddy-logs,dst=/root/logs \
       	--mount type=bind,src=$PWD/config,dst=/root/.caddy \
       	--mount type=bind,src=$PWD/site,dst=/srv \
       	whatever4711/rpi-caddy 
