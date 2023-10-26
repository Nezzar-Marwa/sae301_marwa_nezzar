/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4rgvdjwx2ekfi1f")

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4rgvdjwx2ekfi1f")

  // remove
  collection.schema.removeField("3jpl4x85")

  return dao.saveCollection(collection)
})
