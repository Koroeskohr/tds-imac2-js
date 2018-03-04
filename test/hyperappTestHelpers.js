export const findChildrenByTag = tag => component => {
  if (component.children == null || component.children.length === 0) {
    return []
  }

  return component.children.filter(node => node.nodeName === tag)
}

export const hasChildrenWithTag = tag => component =>
  findChildrenByTag(tag)(component).length > 0

export const toStructure = (tag) => {
  if (tag == null) throw new Error('tag is not defined')
  const name = typeof (tag) === 'string' ? '$' : tag.nodeName
  if (tag.children && tag.children.length > 0) {
    return name + '(' + tag.children.map(toStructure).join(',') + ')'
  } else {
    return name
  }
}
