/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("02u09nh1qojjjlk")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pz32i19o",
    "name": "couleur_verre",
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
  const collection = dao.findCollectionByNameOrId("02u09nh1qojjjlk")

  // remove
  collection.schema.removeField("pz32i19o")

  return dao.saveCollection(collection)
})
