import { modifyFeedChunk } from './modifiers/modify-feed-chunk';
import { observeFeed } from './observers/feed.observer';
import { observePage } from './observers/page.observer';
import { modifyEntry } from './modifiers/modify-entry';

export function mainFunc () {
  const feedContainer = document.getElementsByClassName('feed__container')[0];
  if (feedContainer) {
    modifyFeedChunk(feedContainer);
    observeFeed(feedContainer);
  }
  
  const postContainer = document.getElementsByClassName('page--entry')[0];
  if (postContainer) {
    modifyEntry(postContainer);
  }
  
  const pageWrapper = document.getElementById('page_wrapper');
  observePage(pageWrapper);
}