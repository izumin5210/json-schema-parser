import assert from "power-assert";

import parser from "../lib/parser";
import fixture from "./fixtures/schema";

describe("Parser", () => {
  let schema, comment;

  describe("#parse()", () => {
    beforeEach(() => {
      schema = parser.parse(fixture);
      comment = schema.properties.comment
    });

    it("resolves the first $ref", () => {
      assert(comment.$ref === undefined)
    });

    it("resolves the second $ref", () => {
      assert(comment.properties.user.$ref === undefined)
    });

    it("resolves the third $ref", () => {
      assert(comment.properties.user.properties.name.$ref === undefined)
    });
  });
});
