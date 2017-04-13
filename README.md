# Real Time Web

## Introduction

This project is about setting up a chat app.

For the demo I disabled the class hide. With this class the page only shows the username input. After that you wouldn't be able to change your username. In the demo case you can see the username, users online and chat with these users.

### Features
- Send a message to other online users

### To do:
- Deploy the app
- Add a style to the users in the chat
- Clearify the naming of elements
- Think about new features

Using:
[xo](https://github.com/sindresorhus/xo)
[Express](https://expressjs.com/en/4x/api.html)
[Socket.io](https://socket.io)

### Sources
- [Socket.io Chat App Using Websockets](https://www.youtube.com/watch?v=tHbCkikFfDE);
- [Socket.io](https://socket.io/get-started/chat/)
----

## Install
First clone the repo:
```git
git clone https://github.com/GiuliaM/rtw.git
```

After that:
```git
npm init
```

To install and run [xo](https://github.com/sindresorhus/xo):
```git
npm install --global xo
```
```git
xo --init
```

To prevent xo from forcing to use ES2015+ rules:
```git
xo --no-esnext
```

You can run xo with:
```git
npm test
```

Install [Express](https://expressjs.com/en/4x/api.html):
```git
npm install express --save
```

Install [Socket.io](https://socket.io):
```git
npm install --save socket.io
```

```git
npm install --save socket.io
```


Install and  Nodemon:
```git
npm install nodemon --S
```

```git
nodemon app.js
```
