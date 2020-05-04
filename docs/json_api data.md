# JSON:API object specification


http://jsonapiplayground.reyesoft.com/

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

Dentro del apartado de `relationships` de un objeto iran las diferentes relaciones con otros objetos.

Estas relaciones pueden ser de tipo to-one o to-many.

### to-one
Las relaciones to-one podrán tener un objeto recurso asociado o `null`.

La estructura de este objeto asociado podrá ser como la siguiente:
``` json
{
  "meta": null,
  "data": {
    "type": "book",
    "id": "5ea35623",
    "attributes": {
      "title": "Biografia de Fernando Simón" 
    },
    "relationships": {
      "authors": {
        "data": {
          "type": "authors",
          "id": "5ea8uiwh9378"
        }
      }
    }
  }
}
```

### to-many
Las relaciones to-many podrán tener una lista asociada o el array vacío (`[]`).

La estructura de este objeto asociado puede ser como la siguiente.
``` json
{
  "meta": null,
  "data": {
    "type": "books",
    "id": "5aedih768s",
    "attributes": {
      "title": "Biografia de Fernando Simon",
    },
    "relationships": {
      "chapters": {
        "data": [
          { "type": "chapters", "id": "5ae276872uh"},
          { "type": "chapters", "id": "5aey7sadhik" }
        ]
      }
    }
  }
}
```

