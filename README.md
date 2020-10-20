# Apliacación REST API con typescript y mongoDB

Hay un documento en drive
Herramientas y primeros pasos:

Herramientas:

nodejs
typescript
mongodb

luego, en la carpeta del proyecto:
npm init
npm install -g typescript
tsc --init
git init

Ya tenemos los parámetros de configuración.

Cambiamos 
"target": "es6",  
"outDir": "./build",	

en tsconfig.ts

npm i express mongoose morgan helmet cors compression

helmet de seguridad los otros no son muy importantes

Creamos la carpeta src con server.ts

npm install @types/node @types/mongoose @types/express nodemon typescript -D
