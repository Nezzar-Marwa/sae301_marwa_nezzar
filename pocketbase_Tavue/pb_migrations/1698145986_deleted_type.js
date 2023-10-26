/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("4rgvdjwx2ekfi1f");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "4rgvdjwx2ekfi1f",
    "created": "2023-10-24 11:04:14.749Z",
    "updated": "2023-10-24 11:12:38.865Z",
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
      },
      {
        "system": false,
        "id": "3jpl4x85",
        "name": "forme_lunette",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "r4nokc79t71b7eh",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
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
})
