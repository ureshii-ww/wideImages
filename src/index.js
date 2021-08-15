function mainFunc () {
  const feedContainer = document.getElementsByClassName('feed__container')[0];
  if (feedContainer) {
    modifyInitialChunk(feedContainer);
    observeFeed(feedContainer);
  }
  
  const pageWrapper = document.getElementById('page_wrapper');
  observePage(pageWrapper);
}

function observePage (pageWrapper) {
  const pageWrapperObserver = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.addedNodes.length > 0) {
        const feedContainer = findFeedContainer(mutation.addedNodes);
        if (feedContainer) {
          modifyInitialChunk(feedContainer);
          observeFeed(feedContainer);
        }
      }
    }
  });
  pageWrapperObserver.observe(pageWrapper, {childList: true});
}

function observeFeed (feedContainer) {
  const feedObserver = new MutationObserver((mutationList) => {
    for (const mutation of mutationList) {
      if (mutation.addedNodes.length > 0) {
        const newChunk = mutation.addedNodes[0];
        for (const feedItem of newChunk.children) {
          modifyFeedItem(feedItem);
        }
      }
    }
  });
  feedObserver.observe(feedContainer, {childList: true});
}

function findFeedContainer (nodes) {
  let feedContainer = null;
  for (const node of nodes) {
    if (node.tagName === 'DIV') {
       feedContainer = node.getElementsByClassName('feed__container')[0];
    }
  }
  return feedContainer;
}

function modifyInitialChunk(feedContainer) {
  for (const feedChunk of feedContainer.children) {
    for (const feedItem of feedChunk.children) {
      modifyFeedItem(feedItem);
    }
  }
}

function modifyFeedItem (feedItem) {
  const imagesOuterContainers = feedItem.getElementsByClassName('content-image');
  for (const image of imagesOuterContainers) {
    if (image.classList.contains('content-image--thin_feed') &&
      image.getElementsByClassName('andropov_video').length === 0) {
      changeStyles(image);
      changeSource(image);
    }
  }
}

function changeStyles (image) {
  image.classList.remove('content-image--thin_feed');
  const imageInnerContainer = image.getElementsByClassName('andropov_image')[0];
  imageInnerContainer.setAttribute('style', '');
}

function changeSource (image) {
  const imgWrapper = image.getElementsByClassName('andropov_image__inner')[0];
  
  const imageObserver = new MutationObserver((mutations, observer) => {
    for (const mutation of mutations) {
      if (mutation.addedNodes.length > 0) {
        for (const node of mutation.addedNodes) {
          if (node.tagName === 'IMG') {
            const reg = /\/preview\/\d{1,3}\//
            node.setAttribute('src', node.src.replace(reg, '/preview/800/'));
            observer.disconnect();
          }
        }
      }
    }
  });
  
  imageObserver.observe(imgWrapper, {childList: true});
}

(function () {
  mainFunc();
}());
