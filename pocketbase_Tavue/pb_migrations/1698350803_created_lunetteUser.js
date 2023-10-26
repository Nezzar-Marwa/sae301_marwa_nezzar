/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "lkm7fft9s80zmn2",
    "created": "2023-10-26 20:06:43.893Z",
    "updated": "2023-10-26 20:06:43.893Z",
    "name": "lunetteUser",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "3qojvbfu",
        "name": "prenom",
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
        "id": "gpd5zawb",
        "name": "utilisateur",
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
        "id": "jr9j5qxc",
        "name": "nom",
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
    "options": {
      "query": "SELECT (ROW_NUMBER() OVER()) as id, users.prenom_user as prenom, users.username as utilisateur, lunettes.nom as nom FROM lunettes, users\nWHERE users.creer = lunettes.id"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("lkm7fft9s80zmn2");

  return dao.deleteCollection(collection);
})
