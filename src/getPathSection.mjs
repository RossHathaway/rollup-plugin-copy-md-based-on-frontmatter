export default function getPathSection(
  frontMatter,
  startIndex = 0,
  names = {
    parent: 'document_locations',
    path: 'location',
    pathSection: 'folder_name',
  }
) {
  console.log('nextIndex', frontMatter.indexOf(`- ${names.path}:\n`, startIndex))
  const pathIndex =
    frontMatter.indexOf(`- ${names.path}:\n`, startIndex) + names.path.length;
  console.log('pathIndex', pathIndex)
  const pathSectionIndex =
    frontMatter.indexOf(`- ${names.pathSection}: `, pathIndex) +
    names.pathSection.length +
    4;
  const pathSectionEnd = frontMatter.indexOf('\n', pathSectionIndex);
  const pathSection = frontMatter.substring(pathSectionIndex, pathSectionEnd);

  return { pathSection, nextIndex: pathSectionEnd };
}
