# JsonSchemaParser
[![Build Status](https://travis-ci.org/izumin5210/json-schema-parser.svg)](https://travis-ci.org/izumin5210/json-schema-parser)
[![npm version](https://badge.fury.io/js/json-schema-parser.svg)](http://badge.fury.io/js/json-schema-parser)

Parse JSON Schema and resolve `$ref` fields.

## Installation

```
$ npm install json-schema-parser
```

## Usage

```javascript
var json = require("./spec/fixtures/schema.json");
var parser = require("json-schema-parser");

var schema = parser.parse(json);

console.log(schema);   // print the schema that is resolved $ref fields
```

JsonSchemaParser includes `jsonschema.d.ts` and `parser.d.ts`.

## LICENSE

JsonSchemaParser is licensed under [MIT-license](http://izumin.mit-license.org/2015).
