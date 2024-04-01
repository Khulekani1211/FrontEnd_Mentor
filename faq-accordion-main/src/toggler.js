const accordionIcons = document.querySelectorAll('.accordion-icon');

accordionIcons.forEach(icon => {
  const button = icon.parentElement;
  const collapsedImage = '../assets/images/icon-plus.svg'; // Replace with your plus sign SVG path
  const expandedImage = '../assets/images/icon-minus.svg'; // Replace with your minus sign SVG path

  //icon.style.backgroundImage = `url(${collapsedImage})`; // Set initial image
  // Set initial image based on Bootstrap's "collapsed" class
  icon.style.backgroundImage = button.classList.contains('collapsed') ? `url(${collapsedImage})` : `url(${expandedImage})`;

  button.addEventListener('click', () => {
    // const isNotExpanded = button.classList.contains('collapsed'); // Check if collapsed
    // const newImage = isNotExpanded ? expandedImage : collapsedImage;
    // icon.style.backgroundImage = `url(${newImage})`;

    icon.style.backgroundImage = button.classList.contains('collapsed') ? `url(${collapsedImage})` : `url(${expandedImage})`;
  });
});

