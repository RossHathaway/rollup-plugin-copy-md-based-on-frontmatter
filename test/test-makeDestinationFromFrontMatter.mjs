import { strict as assert } from "assert";
import makeDestinationFromFrontMatter from "../src/makeDestinationFromFrontMatter.mjs";

describe('makeDestinationFromFrontMatter', function () {
    it('should parse `document_locations` property and return array of strings of paths from `document_locations`', function () {
        assert.equal(
            makeDestinationFromFrontMatter(`---\ndocument_locations:\n  - location:\n    - folder_name: Categories\n    - folder_name: Architecture\n  - location:\n    - folder_name: Featured\n    - folder_name: Frank Lloyd Wright\n---`),
            makeDestinationFromFrontMatter,
            [('Categories/Architecture', 'Frank Lloyd Wright')]
        );
    });
});
