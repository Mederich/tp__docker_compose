FROM node:alpine
WORKDIR /app
EXPOSE 3000
CMD ["node", "-e", "require('http').createServer((req, res) => res.end('Hello World!')).listen(3000, () => console.log('Server running on port 3000'))"]
