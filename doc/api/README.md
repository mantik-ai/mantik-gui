# Render API specification for development

The API specification can be rendered for development. Execute:

```commandline
docker run -p 80:8080 -e SWAGGER_JSON=/tmp/mantik-api-spec.yaml -v $PWD:/tmp swaggerapi/swagger-ui
```

and open `localhost:80` in a browser.


# Automatically generate fastapi code from OpenApi spec

Code for running a (mockup) server can be generated automatically. The [openapi-generator](https://github.com/OpenAPITools/openapi-generator) creates (among other possibilities) fastapi code alsongside a Dockerfile and docker-compose.yaml for running a development server.

## Usage

 - `mkdir fastapi`
 - Run
```commandline
docker run --rm -v "${PWD}:/local" openapitools/openapi-generator-cli generate \
    -i local/mantik-api-spec.yaml \
    -g python-fastapi \
    -o /fastapi/
```

Code is generated into the `fastapi` directory.

## Running the server

 - `cd fastapi`
 - Edit Dockerfile (see 'Known problems' section below)
 - `docker-compose build`
 - docker-compose up
 - Open `http://0.0.0.0:8080/docs` in a browser to see the docs

## Known problems

 - Building the docker image in /api won't work since pytest throws an error (the created library is not importable at this point).
   - Remove pytest usage from Dockerfile
   - docker-compose build && docker-compose up
