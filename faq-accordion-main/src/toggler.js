//const accordionIcons = document.querySelectorAll('.accordion-icon');

// accordionIcons.forEach(icon => {
//   const button = icon.parentElement;
//   const plusImage = '../assets/images/icon-plus.svg'; // Replace with your plus sign image path
//   const minusImage = '../assets/images/icon-minus.svg'; // Replace with your minus sign image path

//   icon.style.backgroundImage = `url(${plusImage})`; // Set initial image

//   button.addEventListener('click', () => {
//     const currentImage = icon.style.backgroundImage;
//     if (currentImage.includes(plusImage)) {
//       icon.style.backgroundImage = `url(${minusImage})`;
//     } else {
//       icon.style.backgroundImage = `url(${plusImage})`;
//     }
//   });
// });

const accordionIcons = document.querySelectorAll('.accordion-icon');

accordionIcons.forEach(icon => {
  const button = icon.parentElement;
  const collapsedImage = '../assets/images/icon-plus.svg'; // Replace with your plus sign SVG path
  const expandedImage = '../assets/images/icon-minus.svg'; // Replace with your minus sign SVG path

  icon.style.backgroundImage = `url(${collapsedImage})`; // Set initial image

  button.addEventListener('click', () => {
    const isExpanded = button.classList.contains('collapsed'); // Check if collapsed
    const newImage = isExpanded ? expandedImage : collapsedImage;
    icon.style.backgroundImage = `url(${newImage})`;
  });
});

