/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ktr73jy11gan542",
    "created": "2023-10-26 20:15:34.715Z",
    "updated": "2023-10-26 20:15:34.715Z",
    "name": "lunetteCouleur",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "jvmvlxwy",
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
      },
      {
        "system": false,
        "id": "qj9r5cdf",
        "name": "couleurnom",
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
      "query": "SELECT (ROW_NUMBER() OVER()) as id, lunettes.nom as nom, couleur.nom as couleurnom FROM lunettes, couleur\nWHERE lunettes.cadre = couleur.id"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ktr73jy11gan542");

  return dao.deleteCollection(collection);
})
