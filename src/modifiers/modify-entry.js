import { observeImage } from '../observers/image.observer';
import { modifyImageInnerContainerStyle } from './modify-image-inner-container-style';
import { modifyImageOuterContainerStyle } from './modify-image-outer-container-style';

export function modifyEntry(feedItem) {
  const imagesOuterContainers = feedItem.getElementsByClassName('content-image');
  for (const imageOuterContainer of imagesOuterContainers) {
    const imageInnerContainer = imageOuterContainer.getElementsByClassName('andropov_image')[0];
    if (imageInnerContainer && +imageInnerContainer.getAttribute('data-image-width') >= 640) {
      modifyImageOuterContainerStyle(imageOuterContainer);
      modifyImageInnerContainerStyle(imageInnerContainer);
      observeImage(imageOuterContainer);
    }
  }
}