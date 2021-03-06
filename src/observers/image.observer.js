import { modifyImageSource } from '../modifiers/modify-image-source';

export function observeImage(image) {
  const imgWrapper = image.getElementsByClassName('andropov_image__inner')[0];
  
  const imageObserver = new MutationObserver((mutations, observer) => {
    for (const mutation of mutations) {
      if (mutation.addedNodes.length > 0) {
        for (const node of mutation.addedNodes) {
          if (node.tagName === 'IMG') {
            modifyImageSource(node);
            observer.disconnect();
          }
        }
      }
    }
  });
  
  imageObserver.observe(imgWrapper, { childList: true });
}