# Run yarn to generate lates lockfiles
# Run yarn build

# ./deploy-docker.sh client | server

export APP=${1}
export DOCKER_NAME=ghcr.io/petr-nazarov/liga-lessons-monorepo
export TAG=latest
export DOPPLER_TOKEN=dp.pt.ZR8sZzu0lR24urMWhBt2EbMwR2W59f7WHx7odvCnGz4

# build
docker build --platform linux/amd64 -t $DOCKER_NAME  -f ./apps/${APP}/Dockerfile .

# docker run -p 8000:8000 -e DOPPLER_TOKEN=$DOPPLER_TOKEN_AFU -e APP_ENV=prod $DOCKER_NAME
docker push $DOCKER_NAME:$TAG


