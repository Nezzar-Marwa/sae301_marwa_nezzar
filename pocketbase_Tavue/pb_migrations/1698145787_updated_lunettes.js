/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("r4nokc79t71b7eh")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1pvywiqu",
    "name": "materiel",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "métal",
        "plastique solide",
        "cuir",
        "aluminium"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("r4nokc79t71b7eh")

  // remove
  collection.schema.removeField("1pvywiqu")

  return dao.saveCollection(collection)
})
