/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h64xtxbp3tb1i0e")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vjxsyk64",
    "name": "couleur_cadre",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "xfl1bvgxfqwmywb",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h64xtxbp3tb1i0e")

  // remove
  collection.schema.removeField("vjxsyk64")

  return dao.saveCollection(collection)
})
