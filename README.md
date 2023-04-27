# TodoNx

A collection of todo list applications built by me, [Tom Roberts](https://www.tom-roberts.dev), to showcase my full-stack web development skills

There are multiple projects in this [Nx](https://nx.dev) monorepo, all written in typescript

## Projects
### [todo-redux-saga](https://todo-redux-saga.tom-roberts.dev)
React UI using react-router, redux/redux-saga and MUI components <br/>

### sso-ui
React UI for authentication

### todo-api
NestJS backend using TypeORM/mySQL to persist all todo related data

### sso-api
NestJS backend for authentication - provides JWTs that other APIs can validate



## Development
### Running API projects locally
add a .env file in the project root with your mySQL connection details, e.g.
```
DB_HOST: mysqlhost.com
DB_PORT: 3306
DB_USER: root
DB_PASS: password
DB_NAME: todo
```
install dependencies
```
npm install
```
then just run this command to start the server
```
npm run start:api
```

### Running UIs locally
No setup required, just run these commands
```
npm install
npm run start:redux-saga
```

## Deployment
### UIs
This command will put a production build inside `dist/apps`
```
npm run build:redux-saga
```

### APIs
```
npm run build:api
```
API build will be in `dist/apps` and contain `package.json` and `main.js` files

Run them like this
```
npm install
node main.js
```
