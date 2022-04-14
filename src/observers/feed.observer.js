import { modifyFeedItem } from '../modifiers/modify-feed-item';

export function observeFeed (feedContainer) {
  const feedObserver = new MutationObserver((mutationList) => {
    for (const mutation of mutationList) {
      if (mutation.addedNodes.length > 0) {
        const newChunk = mutation.addedNodes[0];
        for (const feedItem of newChunk.children) {
          modifyFeedItem(feedItem);
        }
      }
    }
  });
  feedObserver.observe(feedContainer, {childList: true});
}
