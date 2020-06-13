import getPathSection from './getPathSection.mjs';
// TODO: add support for | and > before new line characters

/*
---
title: The Mature American
description: Jack's thoughts on the life and writings/works of Ralph Waldo Emerson
document_locations:
- location:
  - folder_name: featured

---
## The Mature American (test)
*/

export default function makeDestinationFromFrontMatter(
  frontMatter,
  names = {
    parent: 'document_locations',
    path: 'location',
    pathSection: 'folder_name',
  }
) {
  try {
    const destinations = [];
    let destinationsIndex = 0;
    let i =
      frontMatter.indexOf(`- ${names.parent}: \n`) + names.parent.length - 1;

    while (i < frontMatter.length) {
      const { pathSection, nextIndex } = getPathSection(frontMatter, i, names);
      i = nextIndex;
      destinations[destinationsIndex] += `/${pathSection}`;
      destinationsIndex++;
    }

    return destinations;
  } catch (e) {
    throw new Error(
      `Unable to get a destination path from the front matter ${frontMatter}
       Check example front matter and make sure it matches the properties on the names pbject you passed in. If you use the default names object, the front matter would need to be formatted like this:
       
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
