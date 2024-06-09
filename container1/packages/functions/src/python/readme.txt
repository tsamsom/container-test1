docker build --platform linux/amd64 -t docker-image:test .
docker run  --platform linux/amd64 -p 9000:8080 docker-image:test mylambda.handler1
curl "http://localhost:9000/2015-03-31/functions/function/invocations" -d '{}'