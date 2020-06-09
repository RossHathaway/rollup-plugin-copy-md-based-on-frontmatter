const assert = require('assert');
const getPathSection = require('../src/getPathSection');

describe('getPathSection', function () {
  it('should return first path as pathSection property on object', function () {
    assert.strictEqual(
      getPathSection(`---
      document_locations:
      - location:
        - folder_name: Categories
        - folder_name: Architecture
      - location:
        - folder_name: Featured
        - folder_name: Frank Lloyd Wright
        ---`).pathSection,

      'Categories'
    );
  });

  it('should return next path section after startIndex as property on object ', function () {
    assert.strictEqual(
      getPathSection(
        `---
      document_locations:
      - location:
        - folder_name: Categories
        - folder_name: Architecture
      - location:
        - folder_name: Featured
        - folder_name: Frank Lloyd Wright
        ---`,
        58
      ),
      'Categories/Architecture'
    );
  });
});
