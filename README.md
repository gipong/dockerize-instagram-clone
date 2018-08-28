# Usage

## Dockerfile
```sh
docker build -t dockerize-instagram-clone .

docker run -it \
-v ${PWD}:/usr/src/app \
-v /usr/src/app/node_modules \
-p 3000:3000 \
--rm \
dockerize-instagram-clone
```

## docker-compose
```sh
docker-compose up -d --build

docker-compose stop
```