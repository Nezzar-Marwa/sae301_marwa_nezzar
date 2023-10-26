/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("r4nokc79t71b7eh")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jdawhqqf",
    "name": "nom_lunette",
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
  const collection = dao.findCollectionByNameOrId("r4nokc79t71b7eh")

  // remove
  collection.schema.removeField("jdawhqqf")

  return dao.saveCollection(collection)
})
