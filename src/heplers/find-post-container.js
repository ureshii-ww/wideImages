export function findPostContainer (nodes) {
  let postContainer = null;
  for (const node of nodes) {
    if (node.tagName === 'DIV' && node.classList.contains('page--entry')) {
      postContainer = node;
    }
  }
  return postContainer;
}