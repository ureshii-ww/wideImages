import { findFeedContainer } from '../heplers/find-feed-container';
import { modifyFeedChunk } from '../modifiers/modify-feed-chunk';
import { observeFeed } from './feed.observer';
import { findPostContainer } from '../heplers/find-post-container';
import { modifyEntry } from '../modifiers/modify-entry';

export function observePage (pageWrapper) {
  const pageWrapperObserver = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.addedNodes.length > 0) {
        const feedContainer = findFeedContainer(mutation.addedNodes);
        if (feedContainer) {
          modifyFeedChunk(feedContainer);
          observeFeed(feedContainer);
        }
        
        const postContainer = findPostContainer(mutation.addedNodes);
        if (postContainer) {
          modifyEntry(postContainer);
        }
      }
    }
  });
  pageWrapperObserver.observe(pageWrapper, {childList: true});
}