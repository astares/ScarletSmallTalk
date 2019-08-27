# Scarlet-SmallTalk

Scarlet SmallTalk is a Smalltalk to JavaScript cross-compiler and runtime.

The Scarlet Compiler is a modified version of the current Squeak compiler and generates code that is strongly influenced by Amber.

## Build Scarlet Compiler

Creates an image with the Scarlet Compiler. 

Build
```
  make compiler
```

Produces artifacts/sk.compiler.js

## Build Kernel with Scarlet Compiler

Translates all .st files into JS using the Scarlet Compiler and assembles the sk.kernel.js Scarlet kernel image

Build
```
make kernel
```

Produces artifacts/sk.kernel.js


## Run tests on the Scarlet Kernel

```
make test
```

