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
    let startIndex =
      frontMatter.indexOf(`- ${names.parent}: \n`) + names.parent.length + 7;
    const locationYaml = frontMatter.slice(startIndex)
    const yamlSplitOnNewLine = locationYaml.split('\n')
    let isFirstPathSection = true

    for (const line of yamlSplitOnNewLine) {

      if (line.trimStart() === `- ${names.path}:`) {
        destinations.push('')
        isFirstPathSection = true
      } else if (line.trimStart().startsWith(`- ${names.pathSection}: `)) {
        const pathSection = line.trimStart().slice(names.pathSection.length + 4)
        const indexToAddTo = destinations.length - 1
        const pathSectionToAdd = isFirstPathSection ? pathSection : '/' + pathSection
        isFirstPathSection = false
        destinations[indexToAddTo] += pathSectionToAdd

      } else if (line === '\n') {
        // continue to next line
      } else break
    }

    console.log('destinations', destinations)
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
