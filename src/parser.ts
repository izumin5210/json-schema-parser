/// <reference path="./lib.d.ts" />
/// <reference path="../typings/core-js/core-js.d.ts" />
/// <reference path="../typings/node/node.d.ts" />
/// <reference path="../typings/json-pointer/json-pointer.d.ts" />
/// <reference path="./jsonschema.ts" />

import fs = require("fs");
import pointer = require("json-pointer");

export function parse(schema: jsonschema.Schema, path: string = "") {
  if (pointer.has(schema, `${path}/$ref`)) {
    resolveReference(schema, path);
    return schema;
  }

  let subschema = pointer.get(schema, path);
  Object.keys(subschema).forEach((k: string) => {
    let v = (<any> subschema)[k];
    switch (typeof v) {
      case "object":
        parse(schema, `${path}/${k}`);
        break;
      case "array":
        v.forEach((_: jsonschema.Schema, i: number) => parse(schema, `${path}/${i}`));
    }
  });

  return schema;
}

function resolveReference(schema: jsonschema.Schema, path: string) {
  let ref = pointer.get(schema, `${path}/$ref`).split('#')[1];
  parse(schema, ref);
  let def = pointer.get(schema, ref);
  pointer.set(schema, path, def);
}

