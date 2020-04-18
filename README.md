# README

# La movida de la Card
Ahora mismo lo que voy a hacer va a ser lo mismo que con Dedication. La diferencia es que este tendrá que tener otra URL para pedir la card poblada o no.

Movida. Cuanda haga post a card querre crear una card. 

Si le hago post con un id ( ` card/:id ` ) entonces querre crear un ` dedication ` dentro de dicha ` card ` supongo. 

Sino como lo podemos hacer? Haciendo post a ` /dedication ` y pasandole el id? Eso rompe lo del anidamiento

A si, al borrar una dedicacion habra que actualizar la lista de la card correspondiente.

## Enlaces de interes
Tutorial seguido para hacer la base: 
https://itnext.io/building-restful-web-apis-with-node-js-express-mongodb-and-typescript-part-2-98c34e3513a2


Tutorial seguido para Mongoose & Typescript
https://medium.com/@tomanagle/strongly-typed-models-with-mongoose-and-typescript-7bc2f7197722

De interes:
https://medium.com/@agentwhs/complete-guide-for-typescript-for-mongoose-for-node-js-8cc0a7e470c1

Patron seguido para borrar:
https://medium.com/biodati/rest-api-deletion-pattern-4eb8b0dafbce