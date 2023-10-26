/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("jnql03a89x8wa59");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "jnql03a89x8wa59",
    "created": "2023-10-24 08:54:02.631Z",
    "updated": "2023-10-24 08:54:02.631Z",
    "name": "materiel",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "3bsvknhx",
        "name": "libelle_materiel",
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
})
