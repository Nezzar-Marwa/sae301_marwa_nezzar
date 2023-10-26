/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "o7okpg5hrjn2wk2",
    "created": "2023-10-25 19:30:40.598Z",
    "updated": "2023-10-25 19:30:40.598Z",
    "name": "type",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ytgg1uuh",
        "name": "forme",
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
  const collection = dao.findCollectionByNameOrId("o7okpg5hrjn2wk2");

  return dao.deleteCollection(collection);
})
