# Run yarn to generate lates lockfiles
# Run yarn build

# ./deploy-docker.sh client | server

export APP=${1}
export DOCKER_NAME=ghcr.io/petr-nazarov/liga-lessons-monorepo
export TAG=latest
export DOPPLER_TOKEN=dp.pt.PcTdUDg2aqIQwT7sDVYR2jpHBJi3WO0zvyFhaRoqzQz

# build
#docker build --platform linux/amd64 -t $DOCKER_NAME  -f ./apps/${APP}/Dockerfile .

 docker run -p 8000:80 -e DOPPLER_TOKEN=$DOPPLER_TOKEN -e APP_ENV=prod -e PORT=80 $DOCKER_NAME:$TAG
#docker push $DOCKER_NAME:$TAG


