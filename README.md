# Sample NodeJS Application for `piku`

> Contributed by @chr15m

This is a simple Nodejs app for piku that demonstrates:

* Simple multi-user websocket chat application.
* A nodejs web worker which handles incoming requests.
* A release worker which fires at deploy time (hello.js).

To publish this app to `piku`, clone this repository and run the following commands:

```bash
git remote add piku piku@your_server:sample_nodejs_app
git push piku master
```

Then you can set up an SSL cert and connect a domain by setting config variables like this:

```bash
ssh piku@your_server config:set nodechat NGINX_SERVER_NAME=your_server NGINX_HTTPS_ONLY=1
```

Then visit the site `your_server` and you will see a simple websocket chat application.
