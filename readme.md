# ichibot node command creator

repository to create commands in javascript which allow for more dynamic creation of commands (for example commands/openPosition.ts)

I found it a bit hard to create commands on 1 line without having overview of what I had written, this allows for more overview and the register will strip newlines and whitespaces to a normal ichibot command.

## installation
`git clone git@github.com:4nche/ichibot-node-cmd.git && cd ./ichibot-node-cmd && yarn install`

see `commands` folder for my own commands


## build
`yarn build` creates a .txt file inside `./dist`
replace that file with the current ichibot alias file.

**make sure to exit ichibot before you do this**
