#!/bin/bash
rm -rf ./build
tsc -d --project ./tsconfig.prod.json  || exit 1
