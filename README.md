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
`npm run build` to compile and bundle all the packages, including installing dependencies and linking packages
`npm run demo` to run the demo app
`npm run push` push your recent commits (all of them) to the origin repository, ensuring tests pass first

#### YARN
`yarn install` install mono repo dependencies (lerna, webpack, typescript etc)
`yarn build` to compile and bundle all the packages, including installing dependencies and linking packages
`yarn demo` to run the demo app
`yarn push` push your recent commits (all of them) to the origin repository, ensuring tests pass first

#### Terminal
# NOTE dependencies will still need installed by a package manager
`npx lerna bootstrap` install all dependencies and link mono repo packages
`npx lerna run build` build and compile bundles