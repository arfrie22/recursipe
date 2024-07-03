# API Documentation

## Recipe Endpoints

### GET /api/recipes/

List all recipes.

Returns an array of recipes and a 200 status code if successful.

```bash
curl http://localhost:4000/api/recipes/
```

```json
[
  {
    "id": 458,
    "info": {
      "name": "Test",
      "description": "",
      "photo": "",
      "yield": 0,
      "yieldUnit": ""
    },
    "ingredients": [],
    "recursiveIngredients": [
      {
        "id": 455,
        "quantity": 1
      },
      {
        "id": 454,
        "quantity": 1
      }
    ],
    "steps": []
  },
  {
    "id": 455,
    "info": {
      "name": "Tres Leches Ice Cream with a Dulce de Leche Swirl",
      "description": "An ice cream that is flavored to be like the tres leches \"sauce\" with a dulce de leche swirl.",
      "photo": "/photos/4dd483d9bd71bbced265bd440dece5db.jpg",
      "yield": 3,
      "yieldUnit": "pt"
    },
    "ingredients": [
      {
        "name": "heavy cream",
        "unit": "c",
        "quantity": 2
      },
      {
        "name": "whole milk",
        "unit": "c",
        "quantity": 1
      },
      {
        "name": "sugar",
        "unit": "c",
        "quantity": 0.75
      },
      {
        "name": "salt",
        "unit": "tsp",
        "quantity": 0.125
      },
      {
        "name": "vanilla extract",
        "unit": "tsp",
        "quantity": 1
      },
      {
        "name": "egg yolks",
        "unit": "",
        "quantity": 6
      },
      {
        "name": "vanilla bean",
        "unit": "",
        "quantity": 1
      },
      {
        "name": "evaporated milk",
        "unit": "oz",
        "quantity": 4
      },
      {
        "name": "sweetened condensed milk",
        "unit": "oz",
        "quantity": 4
      }
    ],
    "recursiveIngredients": [
      {
        "id": 454,
        "quantity": 1
      }
    ],
    "steps": [
      {
        "time": 5,
        "timeType": "Cooking",
        "direction": "In a medium saucepan, warm 1 cup of the cream with the sugar, and salt till simmering."
      },
      {
        "time": 60,
        "timeType": "Waiting",
        "direction": "Turn off the heat and let steep for 1 hour."
      },
      {
        "time": 10,
        "timeType": "Preparation",
        "direction": "In a medium bowl, pour the remaining 1 cup of cream and set a mesh strainer on top."
      },
      {
        "time": 10,
        "timeType": "Preparation",
        "direction": "Separate the yolks of 6 large eggs into a heat resistant bowl."
      },
      {
        "time": 10,
        "timeType": "Cooking",
        "direction": "Bring the milk mixture back up to simmering, then slowly pour the mixture into the egg yolks while whisking."
      },
      {
        "time": 10,
        "timeType": "Cooking",
        "direction": "Put the mixture back on the stove over medium heat until the mixture coats the back a spoon."
      },
      {
        "time": 5,
        "timeType": "Cooking",
        "direction": "Pour the mixture into the bowl with cream with a strainer on top over an ice bath. while wisking to combine."
      },
      {
        "time": 2,
        "timeType": "Cooking",
        "direction": "Add the evaporated milk and sweetened condensed milk to the mixture."
      },
      {
        "time": 60,
        "timeType": "Waiting",
        "direction": "Put the mixture into the refridgerator until cooled down."
      },
      {
        "time": 0,
        "timeType": "Cooking",
        "direction": "Make ice cream in whatever method you want."
      },
      {
        "time": 5,
        "timeType": "Cooking",
        "direction": "After the ice cream is solid, swirl the dulce de leche into the resulting ice cream and then freeze it."
      }
    ]
  },
  {
    "id": 449,
    "info": {
      "name": "Vanilla Ice Cream",
      "description": "A very simple vanilla ice cream recipe. Based on the recipe from the amazing David Lebovitz.",
      "photo": "/photos/06829264798afc8bac58d83167c441d8.jpg",
      "yield": 2,
      "yieldUnit": "pt"
    },
    "ingredients": [
      {
        "name": "heavy cream",
        "unit": "c",
        "quantity": 2
      },
      {
        "name": "whole milk",
        "unit": "c",
        "quantity": 1
      },
      {
        "name": "sugar",
        "unit": "c",
        "quantity": 0.75
      },
      {
        "name": "salt",
        "unit": "tsp",
        "quantity": 0.125
      },
      {
        "name": "vanilla extract",
        "unit": "tsp",
        "quantity": 1
      },
      {
        "name": "egg yolks",
        "unit": "",
        "quantity": 6
      },
      {
        "name": "vanilla bean",
        "unit": "",
        "quantity": 1
      }
    ],
    "recursiveIngredients": [],
    "steps": [
      {
        "time": 5,
        "timeType": "Cooking",
        "direction": "In a medium saucepan, warm 1 cup of the cream with the sugar, and salt till simmering."
      },
      {
        "time": 60,
        "timeType": "Waiting",
        "direction": "Turn off the heat and let steep for 1 hour."
      },
      {
        "time": 10,
        "timeType": "Preparation",
        "direction": "In a medium bowl, pour the remaining 1 cup of cream and set a mesh strainer on top."
      },
      {
        "time": 10,
        "timeType": "Preparation",
        "direction": "Separate the yolks of 6 large eggs into a heat resistant bowl."
      },
      {
        "time": 10,
        "timeType": "Cooking",
        "direction": "Bring the milk mixture back up to simmering, then slowly pour the mixture into the egg yolks while whisking."
      },
      {
        "time": 10,
        "timeType": "Cooking",
        "direction": "Put the mixture back on the stove over medium heat until the mixture coats the back a spoon."
      },
      {
        "time": 5,
        "timeType": "Cooking",
        "direction": "Pour the mixture into the bowl with cream with a strainer on top over an ice bath. while wisking to combine."
      },
      {
        "time": 60,
        "timeType": "Waiting",
        "direction": "Put the mixture into the refridgerator until cooled down."
      },
      {
        "time": 0,
        "timeType": "Cooking",
        "direction": "Make ice cream in whatever method you want."
      }
    ]
  },
  {
    "id": 454,
    "info": {
      "name": "Dulce de Leche",
      "description": "A simple dulce de leche recipe from the wonderful David Lebovitz",
      "photo": "/photos/d2a6c21d6d216702fc218d5d2d2c334b.jpg",
      "yield": 14,
      "yieldUnit": "oz"
    },
    "ingredients": [
      {
        "name": "sweetened condensed milk",
        "unit": "can",
        "quantity": 1
      }
    ],
    "recursiveIngredients": [],
    "steps": [
      {
        "time": 30,
        "timeType": "Waiting",
        "direction": "Preheat oven to 425ºF."
      },
      {
        "time": 5,
        "timeType": "Preparation",
        "direction": "Pour the can of sweetened condensed milk into an oven safe glass bowl and wrap tightly with aluminum foil."
      },
      {
        "time": 2,
        "timeType": "Preparation",
        "direction": "Put the glass bowl into a larger pan and fill it with warm to hot water until the level is about halfway up the glass bowl."
      },
      {
        "time": 75,
        "timeType": "Waiting",
        "direction": "Bake in the oven for 1-1.25 hours, or until a deep caramel color. Check every so often to refill the water in the surrounding pan."
      }
    ]
  }
]
```

### GET /api/recipes/:id

Get a single recipe with the given id.

Returns a single recipe and a 200 status code if successful.

Returns a 404 status code if the recipe does not exist.

```bash
curl http://localhost:4000/api/recipes/449
```

```json
{
  "id": 449,
  "info": {
    "name": "Vanilla Ice Cream",
    "description": "A very simple vanilla ice cream recipe. Based on the recipe from the amazing David Lebovitz.",
    "photo": "/photos/06829264798afc8bac58d83167c441d8.jpg",
    "yield": 2,
    "yieldUnit": "pt"
  },
  "ingredients": [
    {
      "name": "heavy cream",
      "unit": "c",
      "quantity": 2
    },
    {
      "name": "whole milk",
      "unit": "c",
      "quantity": 1
    },
    {
      "name": "sugar",
      "unit": "c",
      "quantity": 0.75
    },
    {
      "name": "salt",
      "unit": "tsp",
      "quantity": 0.125
    },
    {
      "name": "vanilla extract",
      "unit": "tsp",
      "quantity": 1
    },
    {
      "name": "egg yolks",
      "unit": "",
      "quantity": 6
    },
    {
      "name": "vanilla bean",
      "unit": "",
      "quantity": 1
    }
  ],
  "recursiveIngredients": [],
  "steps": [
    {
      "time": 5,
      "timeType": "Cooking",
      "direction": "In a medium saucepan, warm 1 cup of the cream with the sugar, and salt till simmering."
    },
    {
      "time": 60,
      "timeType": "Waiting",
      "direction": "Turn off the heat and let steep for 1 hour."
    },
    {
      "time": 10,
      "timeType": "Preparation",
      "direction": "In a medium bowl, pour the remaining 1 cup of cream and set a mesh strainer on top."
    },
    {
      "time": 10,
      "timeType": "Preparation",
      "direction": "Separate the yolks of 6 large eggs into a heat resistant bowl."
    },
    {
      "time": 10,
      "timeType": "Cooking",
      "direction": "Bring the milk mixture back up to simmering, then slowly pour the mixture into the egg yolks while whisking."
    },
    {
      "time": 10,
      "timeType": "Cooking",
      "direction": "Put the mixture back on the stove over medium heat until the mixture coats the back a spoon."
    },
    {
      "time": 5,
      "timeType": "Cooking",
      "direction": "Pour the mixture into the bowl with cream with a strainer on top over an ice bath. while wisking to combine."
    },
    {
      "time": 60,
      "timeType": "Waiting",
      "direction": "Put the mixture into the refridgerator until cooled down."
    },
    {
      "time": 0,
      "timeType": "Cooking",
      "direction": "Make ice cream in whatever method you want."
    }
  ]
}
```

### POST /api/recipes/

Create a new recipe and return the new recipe.

Returns the new recipe and a 200 status code if successful.

```bash
curl -X POST -H "Content-Type: application/json" -d '{
    "id": 0,
    "name": "Testing",
    "description": "This is a test",
    "photo": "",
    "yield": 0,
    "yieldUnit": "",
    "ingredients": [],
    "recursiveIngredients": [],
    "steps": [],
    "createdAt": "2024-07-03T16:14:24.407Z",
    "updatedAt": "2024-07-03T16:14:24.407Z",
    "deletedAt": null
}' http://localhost:4000/api/recipes/
```

```json
{
    "id": 459,
    "info": {
        "name": "Testing",
        "description": "This is a test",
        "photo": "",
        "yield": 0,
        "yieldUnit": ""
    },
    "ingredients": [],
    "recursiveIngredients": [],
    "steps": []
}
```

### PUT /api/recipes/:id

Update a recipe with the given id and return the updated recipe.

Returns the updated recipe and a 200 status code if successful.

Returns a 404 status code if the recipe does not exist.

```bash
curl -X PUT -H "Content-Type: application/json" -d '{
    "id": 459,
    "name": "Testing",
    "description": "This is a test",
    "photo": "",
    "yield": 0,
    "yieldUnit": "",
    "ingredients": [{ "name": "Milk", "quantity": 2, "unit": "oz" }],
    "recursiveIngredients": [],
    "steps": [],
    "createdAt": "2024-07-03T16:14:38.396Z",
    "updatedAt": "2024-07-03T16:14:38.396Z",
    "deletedAt": null
}' http://localhost:4000/api/recipes/425
```

```json
{
    "id": 459,
    "info": {
        "name": "Testing",
        "description": "This is a test",
        "photo": "",
        "yield": 0,
        "yieldUnit": ""
    },
    "ingredients": [{ "name": "Milk", "quantity": 2, "unit": "oz" }],
    "recursiveIngredients": [],
    "steps": []
}
```

### DELETE /api/recipes/:id

Delete a recipe with the given id.

Returns a 200 status code if successful.

Returns a 404 status code if the recipe does not exist.

```bash
curl -X DELETE http://localhost:4000/api/recipes/459
```

## Photo Endpoints

### POST /api/photo/

Upload a photo and return the photo path using a multipart form with the photo field.

Returns the upload details and a 200 status code if successful.

```bash
curl -X POST -F 'photo=@/path/to/photo.jpg' http://localhost:4000/api/photo/
```

```json
{
    "filename": "e0312c18ec4a6fd11b6ad1cea2a33b83.jpg",
    "mimetype": "image/jpeg",
    "originalname": "photo.jpg",
    "size": 2133175,
    "fieldname": "image",
    "path": "/photos/e0312c18ec4a6fd11b6ad1cea2a33b83.jpg"
}
```
