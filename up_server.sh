# stop server
docker compose -f docker-compose.yml down web
# pull new server image
docker compose -f docker-compose.yml pull web 
# start server
docker compose -f docker-compose.yml up -d --force-recreate web