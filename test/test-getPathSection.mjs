// import { strict as assert } from "assert";
// import getPathSection from '../src/getPathSection.mjs';

// describe('getPathSection', function () {
//   it('should return first path as pathSection property on object', function () {
//     assert.equal(
//       getPathSection(`---
//       document_locations:
//       - location:
//         - folder_name: Categories
//         - folder_name: Architecture
//       - location:
//         - folder_name: Featured
//         - folder_name: Frank Lloyd Wright
//         ---`).pathSection,

//       'Categories'
//     );
//   });

//   it('should return next path section after startIndex as property on object ', function () {
//     assert.equal(
//       getPathSection(
//         `---\ndocument_locations:\n  - location:\n    - folder_name: Categories\n    - folder_name: Architecture\n  - location:\n    - folder_name: Featured\n    - folder_name: Frank Lloyd Wright\n---`,
//         58
//       ).pathSection,
//       'Architecture'
//     );
//   });
// });
