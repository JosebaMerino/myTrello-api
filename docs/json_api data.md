Vale, para implementar JSON:API vamos a necesitar primero saber como van a ser las peticiones y las respuestas.

Quizás (al estar usando TypeScript) podamos crear una clase para que coincida con los campos. 

Parece que va a ser la solución correcta.

Estructura básica de una respuesta JSON:

``` json
"data": {
  "type": "Tipo del objeto",
  "id": "id del objeto",
  "atributes": {
    // ... Atributos del objeto
  },
  "relationships": {
    // ... Relaciones del objeto
  }
}
```

Un documento JSON más avanzado:
``` json
"data": {
  "type": "Tipo del objeto",
  "id": "id del objeto",
  "atributes": {
    // ... Atributos del objeto
  },
  "relationships": {
    // ... Relaciones del objeto
  },
  "links": {
    // ...  Links del objeto
  },
  "meta": {
    // ... Metadatos del objeto
  }
```
## Relationships



