declare module jsonschema {
  /**
   * http://json-schema.org/draft-04/schema#
   */
  interface Schema {
    $ref?:                  string;

    id?:                    string;   // uri
    $schema?:               string;   // uri
    title?:                 string;
    description?:           string;
    default?:               any;
    multipleOf?:            number;   // < 0
    maxinum?:               number;
    exclusiveMaximum?:      boolean;  // default false
    minimum?:               number;
    exclusiveMinimum?:      boolean;  // default false
    maxLength?:             number;   // <= 0
    minLength?:             number;   // <= 0, default 0
    pattern?:               string;   // regex
    additionalItems?:       boolean | Schema;    // default {}
    items?:                 Schema | Schema[];   // default {}
    maxItems?:              number;   // <= 0
    minItems?:              number;   // <= 0, default 0
    uniqueItems?:           boolean;  // default false
    maxProperties?:         number;   // <= 0
    minProperties?:         number;   // <= 0, default 0
    required?:              string[];
    additionalProperties?:  boolean | Schema;
    definitions?:           { [name: string]: Schema; };
    properties?:            { [name: string]: Schema; };
    paternProperties?:      { [name: string]: Schema; };
    dependencies?:          { [name: string]: Schema; } | string[];
    enum?:                  string[];
    type?:                  SimpleType | SimpleType[];
    allOf?:                 Schema[];
    anyOf?:                 Schema[];
    oneOf?:                 Schema[];
    not?:                   Schema;
  }

  /**
   * http://json-schema.org/draft-04/hyper-schema#
   */
  interface HyperSchema extends Schema {
    links?:                 LinkDescription[];
    fragmentResolution?:    string;
    media?:                 { type: string; binaryEncoding: string; };
    pathStart?:             string;   // uri
  }

  interface LinkDescription {
    href:                   string;   // defined by RFC 6570
    rel:                    string;
    title?:                 string;
    targetSchema?:          Schema;
    mediaType?:             string;   // defined by RFC 2046
    method?:                string;
    encType?:               string;   // default "applicatoin/json"
    schema?:                Schema;
  }

  enum SimpleType {
    array,
    boolean,
    integer,
    null,
    number,
    object,
    string
  }
}
