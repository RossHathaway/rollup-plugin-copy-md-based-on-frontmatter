import { strict as assert } from "assert";
import makeDestinationFromFrontMatter from "../src/makeDestinationFromFrontMatter.mjs";

describe('makeDestinationFromFrontMatter', function () {
  it('should parse `document_locations` property and return array of strings of paths from `document_locations`', function () {
    assert.strictEqual(
      makeDestinationFromFrontMatter(`---
      document_locations:
      - location:
        - folder_name: Categories
        - folder_name: Architecture
      - location:
        - folder_name: Featured
        - folder_name: Frank Lloyd Wright
        ---`),
      makeDestinationFromFrontMatter,
      [('categories/architecture', 'featured/frank-lloyd-wright')]
    );
  });
});
