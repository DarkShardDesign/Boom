# Boom
HTML5 game engine

Core modules:
#### - Demo
    - Basic demo app to illustrate using the Boom engine
#### - Engine
    - manages the interfaces between the different modules, synchronising initialisation etc

#### - Core
    - contains helper objects and interface definitions used by all modules
#### - GraphicsPIXI
    - PIXI based graphics renderer, complies with IGraphics Interface
#### - SoundPIXI
    - PIXISound based sound manager, complies with the ISoundManager Interface
#### - NetworkAxios
    - Axios based network manager, complies with the INetworkManager Interfaces

## GameTypes
These modules will be developed later to add support for specific types of games
#### - Slots
    - Support for slots based games
    - eventual features include
        - configurable reel count
        - configurable reel length
        - configurable visible reel symbols
        - expanding wilds
        - wild symbols
        - bonus rounds ( via interface objects )
        - big wins
        - animated symbols
        - scatter symbols

#### - Blackjack
    - Support blackjack based games

#### - Poker
    - Support Poker based games

#### - Roulette
    - support roulette based games

## Running
## NOTE PLEASE ENSURE ALL COMMITS ARE PUSHED USING THE PROVIDED SCRIPT
#### NPM
`npm install` install mono repo dependencies (lerna, webpack, typescript etc)

`npm run build` to compile and bundle all the packages, including installing dependencies and linking packages - needed by heroku

`npm run start` to run the demo app (mac or linux) - needed by heroku
`npm run start-win` to run the demo app (windows only)

`npm run test` run all tests (unit and e2e)
`npm run test-unit` run all unit tests
`npm run test-e2e` run all e2e tests

`npm run clean` removes all build files, this will break any running servers and will need a new build ran before servers can run again

`npm run push` push your recent commits (all of them) to the origin repository, ensuring tests and build pass first

#### YARN
`yarn install` install mono repo dependencies (lerna, webpack, typescript etc)

`yarn build` to compile and bundle all the packages, including installing dependencies and linking packages

## NOTE: at least 1 build needs to have been ran before these will work
`yarn start` runs bootstrap, build in watch mode and runs the demo app in watch mode -- needed by heroku
# WINDOWS
`yarn start-win` runs bootstrap, then runs build in watch mode in one console and the demo app in watch mode in another console

`yarn dev` `yarn dev-win` run the build script and the start script for mac/linus or windows respectively

`yarn test` run all tests (unit and e2e)
`yarn test-unit` run all unit tests
`yarn test-e2e` run all e2e tests

`yarn clean` removes all build files, this will break any running servers and will need a build again before the servers can run again 'yarn start'

`yarn push` push your recent commits (all of them) to the origin repository, ensuring tests and build pass first

#### Terminal
## NOTE dependencies will still need installed by a package manager
`npx lerna bootstrap` install all dependencies and link mono repo packages

`npx lerna run build` build and compile bundles