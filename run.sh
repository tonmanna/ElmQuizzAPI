#!/bin/bash
docker rm -f exam
docker run -p 4000:4000 -it --name exam itopplus/exam