import { modifyInitialChunk } from './modifiers/modify-initial-chunk';
import { observeFeed } from './observers/feed.observer';
import { observePage } from './observers/page.observer';

export function mainFunc () {
  const feedContainer = document.getElementsByClassName('feed__container')[0];
  if (feedContainer) {
    modifyInitialChunk(feedContainer);
    observeFeed(feedContainer);
  }
  
  const pageWrapper = document.getElementById('page_wrapper');
  observePage(pageWrapper);
}