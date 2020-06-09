export default function getPathSection(frontMatter, startIndex = 0, names) {
  const pathIndex =
    frontMatter.indexOf(`- ${names.path}: \n`, startIndex) + names.path.length;
  const pathSectionIndex =
    frontMatter.indexOf(`- ${names.pathSection}: `, pathIndex) +
    names.pathSection.length +
    2;
  const pathSectionEnd = frontMatter.indexOf('\n', pathSectionIndex);
  const pathSection = frontMatter.substring(pathSectionIndex, pathSectionEnd);

  return { pathSection, nextIndex: patSectionEnd };
}
