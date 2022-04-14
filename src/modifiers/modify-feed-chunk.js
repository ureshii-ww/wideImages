import { modifyEntry } from './modify-entry';

export function modifyFeedChunk(feedContainer) {
  for (const feedChunk of feedContainer.children) {
    for (const feedItem of feedChunk.children) {
      modifyEntry(feedItem);
    }
  }
}