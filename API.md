# API Documentation

## Recipe Endpoints

### GET /api/recipies/

List all recipes.

Returns an array of recipes and a 200 status code if successful.

```bash
curl http://localhost:3000/api/recipies/
```

```json
[
    {
        "id": 425,
        "info": {
            "name": "Ice Cream 2",
            "photo": "/photos/c0210b48aa6cc8d6c632f1846264e95c.jpg",
            "yield": 4,
            "yieldUnit": "pt",
            "description": "If ice cream is so good why haven't they made an ice cream 2?"
        },
        "ingredients": [],
        "recursiveIngredients": [{ "id": 424, "quantity": 2 }],
        "steps": [],
        "createdAt": "2024-06-29T02:13:13.728Z",
        "updatedAt": "2024-06-29T02:14:41.012Z",
        "deletedAt": null
    },
    {
        "id": 424,
        "info": {
            "name": "Vanilla Ice Cream",
            "photo": "/photos/d30cef4d2ba686fc1b5ca0223a87e593.jpg",
            "yield": 2,
            "yieldUnit": "pt",
            "description": "A very simple vanilla ice cream recipe. Based on the recipe from the amazing David Lebovitz."
        },
        "ingredients": [
            { "name": "heavy cream", "unit": "c", "quantity": 2 },
            { "name": "whole milk", "unit": "c", "quantity": 1 },
            { "name": "sugar", "unit": "c", "quantity": 0.75 },
            { "name": "salt", "unit": "tsp", "quantity": 0.125 },
            { "name": "vanilla extract", "unit": "tsp", "quantity": 1 }
        ],
        "recursiveIngredients": [],
        "steps": [
            {
                "time": 300,
                "timeType": "Cooking",
                "direction": "In a medium saucepan, warm 1 cup of the cream with the sugar, and salt till simmering."
            },
            {
                "time": 3600,
                "timeType": "Waiting",
                "direction": "Turn off the heat and let steep for 1 hour."
            },
            {
                "time": 10,
                "timeType": "Preparation",
                "direction": "In a medium bowl, pour the remaining 1 cup of cream and set a mesh strainer on top."
            }
        ],
        "createdAt": "2024-06-29T02:13:13.728Z",
        "updatedAt": "2024-06-29T02:13:32.962Z",
        "deletedAt": null
    }
]
```

### GET /api/recipies/:id

Get a single recipe with the given id.

Returns a single recipe and a 200 status code if successful.

Returns a 404 status code if the recipe does not exist.

```bash
curl http://localhost:3000/api/recipies/425
```

```json
{
    "id": 425,
    "info": {
        "name": "Ice Cream 2",
        "photo": "/photos/c0210b48aa6cc8d6c632f1846264e95c.jpg",
        "yield": 4,
        "yieldUnit": "pt",
        "description": "If ice cream is so good why haven't they made an ice cream 2?"
    },
    "ingredients": [],
    "recursiveIngredients": [{ "id": 424, "quantity": 2 }],
    "steps": [],
    "createdAt": "2024-06-29T02:13:13.728Z",
    "updatedAt": "2024-06-29T02:14:41.012Z",
    "deletedAt": null
}
```

### POST /api/recipies/

Create a new recipe and return the new recipe.

Returns the new recipe and a 200 status code if successful.

```bash
curl -X POST -H "Content-Type: application/json" -d '{
    "info": {
        "name": "Ice Cream 2",
        "photo": "/photos/c0210b48aa6cc8d6c632f1846264e95c.jpg",
        "yield": 4,
        "yieldUnit": "pt",
        "description": "If ice cream is so good why haven't they made an ice cream 2?"
    },
    "recursiveIngredients": [{ "id": 424, "quantity": 2 }]
}' http://localhost:3000/api/recipies/
```

```json
{
    "id": 425,
    "info": {
        "name": "Ice Cream 2",
        "photo": "/photos/c0210b48aa6cc8d6c632f1846264e95c.jpg",
        "yield": 4,
        "yieldUnit": "pt",
        "description": "If ice cream is so good why haven't they made an ice cream 2?"
    },
    "ingredients": [],
    "recursiveIngredients": [{ "id": 424, "quantity": 2 }],
    "steps": [],
    "createdAt": "2024-06-29T02:13:13.728Z",
    "updatedAt": "2024-06-29T02:14:41.012Z",
    "deletedAt": null
}
```

### PUT /api/recipies/:id

Update a recipe with the given id and return the updated recipe.

Returns the updated recipe and a 200 status code if successful.

Returns a 404 status code if the recipe does not exist.

```bash
curl -X PUT -H "Content-Type: application/json" -d '{
    "info": {
        "name": "Ice Cream 3",
        "photo": "/photos/c0210b48aa6cc8d6c632f1846264e95c.jpg",
        "yield": 4,
        "yieldUnit": "pt",
        "description": "If ice cream is so good why haven't they made an ice cream 2?"
    },
    "recursiveIngredients": [{ "id": 424, "quantity": 2 }]
}' http://localhost:3000/api/recipies/425
```

```json
{
    "id": 425,
    "info": {
        "name": "Ice Cream 3",
        "photo": "/photos/c0210b48aa6cc8d6c632f1846264e95c.jpg",
        "yield": 4,
        "yieldUnit": "pt",
        "description": "If ice cream is so good why haven't they made an ice cream 2?"
    },
    "ingredients": [],
    "recursiveIngredients": [{ "id": 424, "quantity": 2 }],
    "steps": [],
    "createdAt": "2024-06-29T02:13:13.728Z",
    "updatedAt": "2024-06-29T02:14:41.012Z",
    "deletedAt": null
}
```

### DELETE /api/recipies/:id

Delete a recipe with the given id.

Returns a 200 status code if successful.

Returns a 404 status code if the recipe does not exist.

```bash
curl -X DELETE http://localhost:3000/api/recipies/425
```

## Photo Endpoints

### POST /api/photo/

Upload a photo and return the photo path using a multipart form with the photo field.

Returns the upload details and a 200 status code if successful.

```bash
curl -X POST -F 'photo=@/path/to/photo.jpg' http://localhost:3000/api/photo/
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
