/*
document_locations:
- location:
  - folder_name: Categories
  - folder_name: Architecture
- location:
  - folder_name: Featured
  - folder_name: Frank Lloyd Wright
*/

export default function makeDestinationFromFrontMatter(frontMatter) {
  const destinations = [];
  let i = 0;
  // find where document_locations ends
  // for each "- location: "

  // for each " - folder_name: " take chars to end of the line and add to destinations[i] + "/"

  // increment i

  if (!document_locations) {
    throw new Error(
      'use property `document_locations` in front matter for array containing all paths to copy document to'
    );
  }

  try {
  } catch (e) {
    throw new Error(
      `Unable to get a destination path from the front matter ${frontMatter}
       Check example front matter for what is expected:
       
      document_locations:
      - location:
        - folder_name: parent-folder
        - folder_name: child-folder
      - location:
        - folder_name: parent-folder
        - folder_name: child-folder
        - folder_name: grandchild-folder`
    );
  }
}
