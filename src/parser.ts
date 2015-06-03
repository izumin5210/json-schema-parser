/// <reference path="./lib.d.ts" />
/// <reference path="../typings/core-js/core-js.d.ts" />
/// <reference path="../typings/node/node.d.ts" />
/// <reference path="../typings/json-pointer/json-pointer.d.ts" />
/// <reference path="./jsonschema.ts" />

import fs = require("fs");
import pointer = require("json-pointer");

class JsonSchemaParser {
  constructor(private schema: jsonschema.Schema) {
  }

  parse(path: string = "") {
    if (pointer.has(this.schema, `${path}/$ref`)) {
      this.resolveReference(path);
      return;
    }

    let subschema = pointer.get(this.schema, path);
    Object.keys(subschema).forEach((k: string) => {
      let v = (<any> subschema)[k];
      switch (typeof v) {
        case "object":
          this.parse(`${path}/${k}`);
          break;
        case "array":
          v.forEach((_: jsonschema.Schema, i: number) => this.parse(`${path}/${i}`));
      }
    });
  }

  private resolveReference(path: string) {
    let ref = pointer.get(this.schema, `${path}/$ref`).split('#')[1];
    this.parse(ref);
    let def = pointer.get(this.schema, ref);
    pointer.set(this.schema, path, def);
  }
}

export = JsonSchemaParser;
