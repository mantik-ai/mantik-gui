# Documentation of data models

We document data models (schemata) and their relations in order to give an insight on the intended collaboration workflow of the platform.

Schemata are grouped semantically. However, as use cases are manifold, this clustering is not definitive.

## Projects

Projects are the main data structure of the mantik platform. A project collects information on code, data, experiments, runs, models and collaboration (permission management). A project is the entry point to all work related to answering one research question.

 - Project: Represents a mantik project. Contains references to code, data, experiments and users / user groups. Description and labels can be added for quick information and search.
 - CodeRepository: Reference to a VCS code repository, usually github or gitlab. Description and labels can be added for quick information and search.
 - DataRepository: Reference to a dataset, together with some token to access the data. Description and labels can be added for quick information and search.
 - ExperimentRepository: Represents an mlflow experiment. Labels can be added for search purposes.

## Runs and Models

A run represents the execution of some code. Usually, a model is trained in a run.

 - EntryPoint: Represents the entry point of an mlflow project.
 - ModelRepository: Represents an untrained model. Contains references to code and commit to be used in training. Description and labels can be added for quick information and search.
 - Resources: Specification of resources to use for a run on some compute backend, e.g. HPC.
 - Run: Represents the execution of some code. Contains references to experiment, code, data and hardware configuration (resources) used in the execution. Related to mlflow runs and UNICORE jobs.
 - SavedModelRepository: Represents a trained and saved model.

## Inference and Deployment

Saved models can be used for inference. In order to do so, the model must be deployed on some infrastructure.

 - PackagedDeployment: Represents a container image in which the model can be run.
 - DeploymentInformation: Information on a deployed model, including connection, resources and scheduling information.
 - DeploymentMode: Information on the mode of the deployment. Usually contains information on the compute backend and its configuration. 
 - PredictionRequest: Represents the request to use a deployed model for a prediction.
 - PredictionResponse: Represents the response to a PredictionRequest.

![](project_dependencies.drawio.png)

## Search

For evaluation of ML experiments runs can be sorted and searched.

 - RunsByCodeRepository: Runs grouped by the code used in training.
 - RunsByDataRepository: Runs grouped by the data used in training.
 - RunsByExperiment: Runs grouped by the experiment they are mapped to.
 - RunsByModel: Runs grouped by the untrained model definition used in training.

## Collaboration (People and Institutions)

The mantik platform enables multiple users to collaborate in projects.

 - User: Represents a single user.
 - Organization: Represents an organization, i.e. a collection of groups and users.
 - UserGroup: Represents a collection of users. Permissions can also be managed on group level.

![](user_management.drawio.png)

## Settings

 - UserSettings: Global user settings, such as username, email, password, but also payment information and connections.
 - Connection: Represents a connection to a third-party platform, usually either HPC or cloud platform credentials.
 - PaymentInfo: Payment information, e.g. bank details. 
 - Label: Represents a label or a (MLFlow-)Tag depending on the presence of the value parameter. 

## Purely technical schemata

 - AddRun: Request to add a run to the database.
 - PaginationResponse: Schema used for pagination.
 - ErrorMessage: Error message.

# Render API specification for development

The API specification can be rendered for development. Execute:

```commandline
docker run -p 80:8080 -e SWAGGER_JSON=/tmp/mantik-api-spec.yaml -v $PWD:/tmp swaggerapi/swagger-ui
```

and open `localhost:80` in a browser.

# Automatically generate fastapi code from OpenApi spec

Code for running a (mockup) server can be generated automatically. The [openapi-generator](https://github.com/OpenAPITools/openapi-generator) creates (among other possibilities) fastapi code alsongside a Dockerfile and docker-compose.yaml for running a development server.

## Usage

-   `mkdir fastapi`
-   Run

```commandline
docker run --rm -v "${PWD}:/local" openapitools/openapi-generator-cli generate \
    -i local/mantik-api-spec.yaml \
    -g python-fastapi \
    -o /local/fastapi/
```

Code is generated into the `fastapi` directory.

## Running the server

-   `cd fastapi`
-   Edit Dockerfile (see 'Known problems' section below)
-   `docker-compose build`
-   `docker-compose up`
-   Open `http://0.0.0.0:8080/docs` in a browser to see the docs

## Known problems

-   Building the docker image in /api won't work since pytest throws an error (the created library is not importable at this point).
    -   Remove pytest usage from Dockerfile
    -   docker-compose build && docker-compose up
