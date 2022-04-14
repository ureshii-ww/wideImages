export function modifyImageInnerContainerStyle (imageOuterContainer) {
  const imageInnerContainer = imageOuterContainer.getElementsByClassName('andropov_image')[0];
  imageInnerContainer.setAttribute('style', '');
}