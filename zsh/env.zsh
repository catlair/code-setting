
HISTSIZE=10000
SAVEHIST=10000
HISTFILE=~/.zsh_history

export PATH=$PATH:$LOCALBIN
export PATH=$PATH:/usr/local/bin
export PATH=$PATH:$HOME/.local/bin

# Nodejs
VERSION=v14.17.0
DISTRO=linux-x64
export PATH=/usr/local/lib/nodejs/node-$VERSION-$DISTRO/bin:$PATH

# golang
export GO111MODULE=on
export GOPROXY=https://goproxy.io,direct
export PATH=$PATH:/usr/local/go/bin


