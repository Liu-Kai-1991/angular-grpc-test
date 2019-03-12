#!/usr/bin/env bash
protoc -I=../../ ../../src/main/proto/helloworld.proto --grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:./proto
