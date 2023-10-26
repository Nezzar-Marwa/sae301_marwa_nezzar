/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "4rgvdjwx2ekfi1f",
    "created": "2023-10-24 11:04:14.749Z",
    "updated": "2023-10-24 11:04:14.749Z",
    "name": "type",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "4hzty7na",
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
  const collection = dao.findCollectionByNameOrId("4rgvdjwx2ekfi1f");

  return dao.deleteCollection(collection);
})
