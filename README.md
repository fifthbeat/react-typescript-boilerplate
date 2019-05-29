# 🌋 – Brace - React typescript boilerplate

[![Build Status](https://travis-ci.org/fifthbeat/react-typescript-boilerplate.svg?branch=master)](https://travis-ci.org/fifthbeat/react-typescript-boilerplate)
[![Maintainability](https://api.codeclimate.com/v1/badges/31a6d0abf11533eae4ca/maintainability)](https://codeclimate.com/github/fifthbeat/react-typescript-boilerplate/maintainability)
[![Dependencies](https://david-dm.org/fifthbeat/react-typescript-boilerplate.svg)](https://david-dm.org/fifthbeat/react-typescript-boilerplate)

## Intro

This project is meant to handle fast production and easy maintenance, this is not an overall solution is a way for us for fasten our work and grant quality during all the development project.

_Contributions_ and _feedbacks_ are welcome. You can

## How to run the engine

### Install

Just `cd` into the folder and

```bash
yarn
```

or if you have time to spare

```bas
npm i
```

### Start

```bash
yarn start
```

or if you have time to spare

```bash
npm start
```

### Generate stuff

```bash
yarn generate
```

or if you have time to spare

```bash
npm run generate
```

## Deployment

You can deploy on Google Cloud applications via Bitbucket Pipelines, we handle most of that for you – 🤓– you need just few steps.

### Set up Google Cloud

1. Create a **new project** in you gcloud account from [here](https://console.cloud.google.com/projectcreate)
2. Create a **new app** from [here](https://console.cloud.google.com/appengine/start). Choose `Node.js` as language
3. Create a **service account** from [here](https://console.cloud.google.com/iam-admin/serviceaccounts/create)
4. Now **create a key** and choose `json`
5. We need to convert it in base64 so either you go [here](https://www.browserling.com/tools/json-to-base64) or you run

```bash
$ base64 [file name].json
```

6. Keep it there ok?

### Set up Bitbucket

1.  Create a **new repo** and bla bla bla...
2.  Go under **Setting** – the gear icon on the 👈👇
3.  Go under **\*Repository Variable** and create two vars
    1. `GCLOUD_PROJECT` with the **name of the project** you find [here](https://console.cloud.google.com/home/dashboard)
    2. `GCLOUD_API_KEYFILE` with the json file converted in base64 from the google setup above 👆 and you might wanna hide it with the lock 😉.

### What now?

1. Go under `Pipelines` on your bitbucket repo
2. Watch the last pipeline on `master` branch
3. Press `Deploy` 🚀

## Structure

```text
.
├── internals                     # Internal scripts
|   ├── generators                # Generators' config
|   └── webpack                   # Webpack scripts
├── src
│   ├── app                       # App folder
│   |   ├── components            # Components folder
│   |   |   └── componentName     # Single component
│   |   |       ├── index.js
│   |   |       └── styles.js
│   |   ├── views                 # Views folder
│   |   |   └── viewName          # Single view
│   |   |       ├── index.js
│   |   |       └── styles.js
│   |   └── stores                # Stores folder
│   |       └── storeName         # Single store
│   |           ├── index.js
│   |           └── selectors.js
│   ├── assets                    # Images original html and stuff like that
│   ├── beans                     # Internal type definitions
│   ├── constants                 # Global constants
│   ├── utils                     # Useful functions
│   └── global-styles.js          # CSS appliable to all project
└── types                         # Libraries type definitoins
```

## Requirements

- Node >= 10.1
- React create app >= 1.5.2

## Author

- Nicola Bertelloni – [https://github.com/wanbinkimoon](https://github.com/wanbinkimoon)
