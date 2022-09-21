#!/bin/bash
rm -rf ./build
tsc -d --declarationMap --project ./tsconfig.prod.json
