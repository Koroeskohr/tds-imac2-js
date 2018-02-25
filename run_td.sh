#!/bin/bash

TD=$1

mocha -b --require babel-register --colors -w ./test/$TD.test.js