import { observeImage } from '../observers/image.observer';
import { modifyImageInnerContainerStyle } from './modify-image-inner-container-style';
import { modifyImageOuterContainerStyle } from './modify-image-outer-container-style';

export function modifyEntry(feedItem) {
  const imagesOuterContainers = feedItem.getElementsByClassName('content-image');
  for (const imageOuterContainer of imagesOuterContainers) {
    if (imageOuterContainer.getElementsByClassName('andropov_video').length === 0) {
      modifyImageOuterContainerStyle(imageOuterContainer);
      modifyImageInnerContainerStyle(imageOuterContainer);
      observeImage(imageOuterContainer);
    }
  }
}