# Development
Pasos para levantar la app en desarrollo

1. levantar la base de datos
```
docker compose up -d
```
2. Copiar y renombrar el .env.template a .env
3. Remplazar las variables de entorno
4. Ejecutar el comando ``` npm install ```
5. Ejecutar el comando ```pnpm run dev```
6. Ejecutar estos comandos de prisma
```
npx prisma migrate dev
npx prisma generate
```
7. Ejecuta el SEED para [crear la base de datos local](localhost:3000/api/seed)

#Prisma commands
```
npx prisma init
npm install prisma tsx @types/pg --save-dev
npm install @prisma/client @prisma/adapter-pg dotenv pg
npx prisma migrate dev o npx prisma db pull para no borrar lo que hay en la base de datos.
npx prisma generate     
```
Other commands
```
* npx prisma db pull (empata lo que hay adicional en la base de datos con lo que se tiene en prisma) (aplica 'npx prisma' generate despues de este comando)
* npx prisma migrate reset (borra lo que ya habia en la base de datos para arreglar el historico de base de datos, se aplico cuando hice un cambio que tuve que reflejar en una tabla ya creada)
* npx prisma push (hace la sincronizacion de la base de datos sin pasar por migraciones)# admin-todos
