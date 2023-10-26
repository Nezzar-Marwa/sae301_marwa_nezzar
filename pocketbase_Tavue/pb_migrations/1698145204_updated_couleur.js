/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xfl1bvgxfqwmywb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hmz6j7z5",
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
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xfl1bvgxfqwmywb")

  // remove
  collection.schema.removeField("hmz6j7z5")

  return dao.saveCollection(collection)
})
