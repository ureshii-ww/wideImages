import { modifyFeedItem } from './modify-feed-item';

export function modifyInitialChunk(feedContainer) {
  for (const feedChunk of feedContainer.children) {
    for (const feedItem of feedChunk.children) {
      modifyFeedItem(feedItem);
    }
  }
}