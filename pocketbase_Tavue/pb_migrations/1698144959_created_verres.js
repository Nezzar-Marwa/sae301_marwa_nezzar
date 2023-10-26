/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "02u09nh1qojjjlk",
    "created": "2023-10-24 10:55:59.051Z",
    "updated": "2023-10-24 10:55:59.051Z",
    "name": "verres",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "rgxhwfed",
        "name": "libelle_verre",
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
  const collection = dao.findCollectionByNameOrId("02u09nh1qojjjlk");

  return dao.deleteCollection(collection);
})
