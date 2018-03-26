{
    "$id": "http://example.com/example.json",
    "type": "object",
    "definitions": {},
    "$schema": "http://json-schema.org/draft-07/schema#",
    "properties": {
    "name": {
        "$id": "/properties/name",
            "type": "string"
    },
    "categories": {
        "$id": "/properties/categories",
            "type": "array",
            "items": {
            "$id": "/properties/categories/items",
                "type": "object",
                "properties": {
                "name": {
                    "$id": "/properties/categories/items/properties/name",
                        "type": "string"
                },
                "priority": {
                    "$id": "/properties/categories/items/properties/priority",
                        "type": "string",
                        "enum": [ "High", "Medium", "Low" ]
                },
                "entries": {
                    "$id": "/properties/categories/items/properties/entries",
                        "type": "array",
                        "items": {
                        "$id": "/properties/categories/items/properties/entries/items",
                            "type": "object",
                            "properties": {
                            "id": {
                                "$id": "/properties/categories/items/properties/entries/items/properties/name",
                                    "type": "string"
                            },
                            "name": {
                                "$id": "/properties/categories/items/properties/entries/items/properties/name",
                                    "type": "string"
                            },
                            "priority": {
                                "$id": "/properties/categories/items/properties/entries/items/properties/priority",
                                    "type": "string",
                                    "enum": [ "High", "Medium", "Low" ]
                            },
                            "fields": {
                                "$id": "/properties/categories/items/properties/entries/items/properties/fields",
                                    "type": "array",
                                    "items": {
                                    "$id": "/properties/categories/items/properties/entries/items/properties/fields/items",
                                        "type": "object",
                                        "properties": {
                                        "name": {
                                            "$id": "/properties/categories/items/properties/entries/items/properties/fields/items/properties/name",
                                                "type": "string"
                                        },
                                        "type": {
                                            "$id": "/properties/categories/items/properties/entries/items/properties/fields/items/properties/type",
                                                "type": "string",
                                                "enum": [ "text", "angle", "speed", "location", "distance", "octas", "wind-state", "integer", "day-night", "frequency" ]
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
}