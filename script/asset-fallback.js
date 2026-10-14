document.addEventListener("error", function (event) {
  var image = event.target;

  if (image instanceof HTMLImageElement && !image.dataset.fallbackApplied) {
    image.dataset.fallbackApplied = "true";
    image.src = "image-placeholder.svg";
  }
}, true);
