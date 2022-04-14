export function changeImageSource (node) {
  const reg = /\/preview\/\d{1,3}\//
  node.setAttribute('src', node.src.replace(reg, '/preview/800/'));
}