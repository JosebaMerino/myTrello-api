# README

## La movida de la Card
Ahora mismo lo que voy a hacer va a ser lo mismo que con Dedication. La diferencia es que este tendrá que tener otra URL para pedir la card poblada o no.

Movida. Cuanda haga post a card querre crear una card. 

Si le hago post con un id ( ` card/:id ` ) entonces querre crear un ` dedication ` dentro de dicha ` card ` supongo. 

Sino como lo podemos hacer? Haciendo post a ` /dedication ` y pasandole el id? Eso rompe lo del anidamiento

A si, al borrar una dedicacion habra que actualizar la lista de la card correspondiente.

## PUT vs PATCH
PUT   - Actualización total del recurso (lo machaca completamente)
PATCH - Actualización parcial del recurso (se actualiza parcialmente)
## URLS




Las URLS de la API, se ha decidido que se harán de la siguiente manera:
```
GET /recurso -> Obtiene los recursos no borrados
GET /recurso?onlyDeleted=true -> Obtiene todos los recursos borrados
GET /recurso?all=true -> Obtiene los recursos (borrados y no borrados)

POST /recurso -> Crea un nuevo recurso
```
```
GET /recurso/:id -> Obtiene el recurso especifico (no borrado)
GET /recurso/:id?all=true -> Obtiene el recurso esté o no borrado


PUT /recurso/:id -> Actualiza el recurso (que no esté borrado)
PUT /recurso/:id?all=true -> Actualiza el recurso esté o no borrado

PATCH /recurso/:id -> Actualiza parcialmente el recurso (que no esté borrado)
PATCH /recurso/:id?all=true -> Actualiza parcialmente el recurso esté o no borrado

DELETE /recurso/:id -> Realiza un borrado logico del recurso 
DELETE /recurso/:id?fisical=true -> Realiza el borrado fisico del recurso (siempre que ya este marcado como borrado)
```

Recursos anidados
```
GET /recurso/:id/recursoAnidado -> Devuelve el recurso anidado o lista de recursos anidados poblada.
POST /recurso/:id/recursoAnidado -> Crea el recurso y lo añade
DELETE /recurso/:id/recursoAnidado/:id -> Borra de forma logica el recurso anidado (se guarda la relación)
DELETE /recurso/:id/recursoAnidado/:id?sure=true -> Realiza un borrado fisico del recurso anidado (borrando tambien la relación) .
```

## Morgan (JS)
Morgan JS es un middleware que sirve para interceptar las `responses` de la aplicación y las loguea por pantalla. No es que sirva de mucho ahora mismo pero en un futuro cuando este en el servidor servirá para logear las peticiones y ver si ha habido algun fallo de tipo 500.

Le faltaria redirigir tambien hacia un fichero (pero eso lo dejamos para mas adelante)

## Enlaces de interes
Tutorial seguido para hacer la base: 
https://itnext.io/building-restful-web-apis-with-node-js-express-mongodb-and-typescript-part-2-98c34e3513a2


Tutorial seguido para Mongoose & Typescript
https://medium.com/@tomanagle/strongly-typed-models-with-mongoose-and-typescript-7bc2f7197722

Typescript & Mongoose:
https://medium.com/@agentwhs/complete-guide-for-typescript-for-mongoose-for-node-js-8cc0a7e470c1

Patron seguido para borrar:
https://medium.com/biodati/rest-api-deletion-pattern-4eb8b0dafbce

Como obtener los elementos borrados
https://laravel-json-api.readthedocs.io/en/latest/features/soft-deletes/

Cuales son los operadores de queries de MongoDB (Tambien de mongoose):
https://docs.mongodb.com/manual/reference/operator/query-logical/



Para otra vez va? Es demasiado para lo que quieres hacer

HAL
https://en.wikipedia.org/wiki/Hypertext_Application_Language
https://programar.cloud/post/como-implementar-hateoas-en-tus-apis/