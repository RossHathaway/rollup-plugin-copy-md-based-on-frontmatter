export default function makeDestinationFromFrontMatter(
  frontMatter,
  names = {
    parent: 'document_locations',
    path: 'location',
    pathSection: 'folder_name',
  }
) {
  const destinations = [];
  let destinationsIndex = 0;
  const parentIndex =
    frontMatter.indexOf(`- ${names.parent}: \n`) + names.parent.length - 1;

  destinations[destinationsIndex] += `/${pathSection}`;
  destinationsIndex++;

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
