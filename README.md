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
`npm run build` to build all the packages, including installing dependencies
`npm run demo` to run the demo app