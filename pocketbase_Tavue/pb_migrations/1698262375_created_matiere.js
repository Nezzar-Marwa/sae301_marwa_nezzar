/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "b7n97glw0jl9tve",
    "created": "2023-10-25 19:32:55.271Z",
    "updated": "2023-10-25 19:32:55.271Z",
    "name": "matiere",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "luaocxou",
        "name": "nom_matiere",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("b7n97glw0jl9tve");

  return dao.deleteCollection(collection);
})
