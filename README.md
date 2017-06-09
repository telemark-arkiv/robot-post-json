[![Build Status](https://travis-ci.org/telemark/robot-post-json.svg?branch=master)](https://travis-ci.org/telemark/robot-post-json)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![Greenkeeper badge](https://badges.greenkeeper.io/telemark/robot-post-json.svg)](https://greenkeeper.io/)

# robot-post-json

Posts content of json-file to given url

## Setup

Update docker.env with correct settings

```bash
DONE_DIRECTORY_PATH=test/directories/done
ERRORS_DIRECTORY_PATH=test/directories/errors
QUEUE_DIRECTORY_PATH=test/directories/queue
RETRY_DIRECTORY_PATH=test/directories/retries
JWT_SECRET=Louie Louie, oh no, I got to go Louie Louie, oh no, I got to go
SERVICE_URL=https://echo.mikrotjeneste.win
PAPERTRAIL_HOSTNAME=robot-post
PAPERTRAIL_HOST=logs.papertrailapp.com
PAPERTRAIL_PORT=12345
```

## Build

```bash
$ docker build -t robot-post-json .
```

## Usage

```
$ docker run --env-file=docker.env --volume=/test/data/directories/queue:/src/test/directories/queue --rm robot-post-json
```

This will start a container. Do the job. Stop the container and remove it.

## License

[MIT](LICENSE)

![Robohash image of robot-post-json](https://robots.kebabstudios.party/robot-post-json.png "Robohash image of robot-post-json")
