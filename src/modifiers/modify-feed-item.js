import { observeImage } from '../observers/image.observer';
import { changeImageOuterContainerStyle } from './change-image-outer-container-style';

export function modifyFeedItem(feedItem) {
  const imagesOuterContainers = feedItem.getElementsByClassName('content-image');
  for (const imagesOuterContainer of imagesOuterContainers) {
    if (imagesOuterContainer.getElementsByClassName('andropov_video').length === 0) {
      changeImageOuterContainerStyle(imagesOuterContainer);
      observeImage(imagesOuterContainer);
    }
  }
}