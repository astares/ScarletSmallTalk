#! /bin/bash

for var in "$@"
do
	tr -d '\r' < $var > test.st
	mv test.st $var
done
