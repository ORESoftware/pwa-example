#!/usr/bin/env bash

set -e;

cd "$(dirname "$BASH_SOURCE")";

http-server -c-1 'dist/pwa-example'
