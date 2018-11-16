// Use the spread operator to convert the nodelist into an array
const paths = document.querySelectorAll('path');
console.log(paths);

// For each path, do the following:
paths.forEach((path) => {

  // Create a variable for each path's length
  const length = path.getTotalLength();
  console.log(length);

  // The stroke-dashoffset property defines the location along an SVG path where the dash of a stroke will begin. The higher the number, the further along the path the dashes will begin.
  path.style.strokeDashoffset = length;

  // The stroke-dasharray property is for creating dashes in the stroke of SVG shapes. The higher the number, the more space in between dashes in the stroke.
  path.style.strokeDasharray = length;

  // The following function draws the dash
  const drawPath = () => {

    // Variable to calculate the scroll percentage of the page
    const scrollPercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

    // Variable to determine how far along the SVG should be drawn
    const draw = length * scrollPercent;
    path.style.strokeDashoffset = length - draw;

    // Final check to round out rough edges at the bottom of the page
    if (scrollPercent >= 0.99) {
      path.style.strokeDasharray = "none";
    } else {
      path.style.strokeDasharray = length + ' ' + length;
    }
  }

  // Event listener to draw
  window.addEventListener('scroll', drawPath);
});