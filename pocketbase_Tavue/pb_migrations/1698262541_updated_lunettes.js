/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("r4nokc79t71b7eh")

  // remove
  collection.schema.removeField("1pvywiqu")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kfbnhlmi",
    "name": "matiere",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "b7n97glw0jl9tve",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
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

  // remove
  collection.schema.removeField("kfbnhlmi")

  return dao.saveCollection(collection)
})
