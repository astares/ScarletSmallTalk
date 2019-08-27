#! /bin/sh
echo '// SK version '`git rev-parse --abbrev-ref HEAD` `git rev-list --count HEAD` `date -u`  > 'build-version.txt'

node ./scripts/launchTask.js $1
