#!/bin/bash
echo "BUILD_VERSION=$BUILD_VERSION"
echo "BUILD_NUMBER=$BUILD_NUMBER"
echo "PROJECT_NAME=$PROJECT_NAME"
echo "pnpm version is: $(pnpm -v 2>&1)"
WKDIR=$(dirname "$0") \
  && cd "$WKDIR" \
  && WKDIR=$(pwd) \
  && pnpm install \
  && rm -fr ./build/  \
  && pnpm build \
  && cd build \
  && zip -r9 ../"${PROJECT_NAME}-${BUILD_VERSION}.${BUILD_NUMBER}.zip" *
