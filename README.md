# README

## La movida de la Card
Ahora mismo lo que voy a hacer va a ser lo mismo que con Dedication. La diferencia es que este tendrá que tener otra URL para pedir la card poblada o no.

Movida. Cuanda haga post a card querre crear una card. 

Si le hago post con un id ( ` card/:id ` ) entonces querre crear un ` dedication ` dentro de dicha ` card ` supongo. 

Sino como lo podemos hacer? Haciendo post a ` /dedication ` y pasandole el id? Eso rompe lo del anidamiento

A si, al borrar una dedicacion habra que actualizar la lista de la card correspondiente.

## URLS

Las URLS de la API, se ha decidido que se harán de la siguiente manera:
```
GET /recurso -> Obtiene todos los recursos
GET /recurso?deleted=false -> Obtiene los recursos no borrados
GET /recurso?deleted=true -> Obtiene los recursos borrados
```
```
GET /recurso/:id -> Obtiene el recurso especifico que no esté borrado
GET /recurso/:id?deleted=false -> Obtiene el recurso si no esta borrado
```

## Morgan (JS)
Morgan JS es un middleware que sirve para interceptar las `responses` de la aplicación y las loguea por pantalla. No es que sirva de mucho ahora mismo pero en un futuro cuando este en el servidor servirá para logear las peticiones y ver si ha habido algun fallo de tipo 500.

Le faltaria redirigir tambien hacia un fichero (pero eso lo dejamos para mas adelante)

## Enlaces de interes
Tutorial seguido para hacer la base: 
https://itnext.io/building-restful-web-apis-with-node-js-express-mongodb-and-typescript-part-2-98c34e3513a2


Tutorial seguido para Mongoose & Typescript
https://medium.com/@tomanagle/strongly-typed-models-with-mongoose-and-typescript-7bc2f7197722

De interes:
https://medium.com/@agentwhs/complete-guide-for-typescript-for-mongoose-for-node-js-8cc0a7e470c1

Patron seguido para borrar:
https://medium.com/biodati/rest-api-deletion-pattern-4eb8b0dafbce

Como obtener los elementos borrados
https://laravel-json-api.readthedocs.io/en/latest/features/soft-deletes/



Para otra vez va? Es demasiado para lo que quieres hacer

HAL
https://en.wikipedia.org/wiki/Hypertext_Application_Language
https://programar.cloud/post/como-implementar-hateoas-en-tus-apis/