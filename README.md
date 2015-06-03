# JsonSchemaParser
Parse JSON Schema and resolve `$ref` fields.

[![Build Status](https://travis-ci.org/izumin5210/json-schema-parser.svg)](https://travis-ci.org/izumin5210/json-schema-parser)

## Installation

```
$ npm install json-schema-parser
```

## Usage

```javascript
var schema = require("./spec/fixtures/schema.json");
var Parser = require("json-schema-parser");

var parser = new Parser(schema);
parser.parse();

console.log(parser.schema);   // print the schema that is resolved $ref fields
```

JsonSchemaParser includes `jsonschema.d.ts` and `parser.d.ts`.

## LICENSE

JsonSchemaParser is licensed under [MIT-license](http://izumin.mit-license.org/2015).
