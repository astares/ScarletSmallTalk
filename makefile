.DEFAULT_GOAL:=help

help:  ## Display this help
	@awk 'BEGIN {FS = ":.*##"; printf "\nUsage:\n  make \033[36m<target>\033[0m\n\nTargets:\n"} /^[a-zA-Z_-]+:.*?##/ { printf "  \033[36m%-10s\033[0m %s\n", $$1, $$2 }' $(MAKEFILE_LIST)

all: ## make everything
	make clean
	make compiler
	make install-compiler
	make clean
	make kernel
	make clean
	make prod
	make test

clean: ## clean all artifacts
#	rm -f artifacts/*
	rm -f src/*/*.st.*
	rm -f tests/resources/*/*.st.*
	rm -f tests/src/*/*.st.*

compiler: ## build the compiler
#	perl -pi -e 's/\r/\n/g' src/compiler/*.st
	./scripts/runTask.sh buildcompiler

install-compiler: ## set the new compiler image as the new compiler
	cp ./artifacts/sk.compiler.js ./bootstrap

kernel: ## build the kernel
	./scripts/runTask.sh buildkernel

prod: ## build the kernel without source
	./scripts/runTask.sh buildprod

mobile: ## build the kernel suited for mobile
	./scripts/runTask.sh buildmobile

sunit: ## build the S8 based SUnit
	./scripts/runTask.sh build

test: artifacts/sk.kernel.js ## build and run the tests
	rm -f tests/resources/*/*.st.*
	./scripts/runTask.sh runtests

hudson: artifacts/sk.kernel.js ## build and run the tests for hudson/jenkins
	./scripts/runTask.sh runhudson
