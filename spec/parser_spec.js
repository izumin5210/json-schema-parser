import assert from "power-assert";

import Parser from "../lib/parser";
import fixture from "./fixtures/schema";

describe("Parser", () => {
  let parser, comment;

  describe("#parse()", () => {
    beforeEach(() => {
      parser = new Parser(fixture);
    });

    context("when it has not been called yet", () => {
      it("does not resolve the first $ref", () => {
        assert(typeof parser.schema.properties.comment.$ref === "string")
      });
    });

    context("when it has been called", () => {
      beforeEach(() => {
        parser.parse();
        comment = parser.schema.properties.comment
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
});
