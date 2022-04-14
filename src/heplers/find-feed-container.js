export function findFeedContainer (nodes) {
  let feedContainer = null;
  for (const node of nodes) {
    if (node.tagName === 'DIV') {
      feedContainer = node.getElementsByClassName('feed__container')[0];
    }
  }
  return feedContainer;
}