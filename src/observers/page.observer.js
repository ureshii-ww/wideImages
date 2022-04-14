import { findFeedContainer } from '../heplers/find-feed-container';
import { modifyInitialChunk } from '../modifiers/modify-initial-chunk';
import { observeFeed } from './feed.observer';

export function observePage (pageWrapper) {
  const pageWrapperObserver = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.addedNodes.length > 0) {
        const feedContainer = findFeedContainer(mutation.addedNodes);
        if (feedContainer) {
          modifyInitialChunk(feedContainer);
          observeFeed(feedContainer);
        }
      }
    }
  });
  pageWrapperObserver.observe(pageWrapper, {childList: true});
}