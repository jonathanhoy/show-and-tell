const paths = [...document.querySelectorAll('.svg-path path')];
paths.forEach((path) => {
  const length = path.getTotalLength();
  path.style.strokeDashoffset = length;
  path.style.strokeDasharray = length;
  const myFunction = () => {
    const scrollPercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    const draw = length * scrollPercent;
    path.style.strokeDashoffset = length - draw;
    if (scrollPercent >= 0.99) {
      path.style.strokeDasharray = "none";
    } else {
      path.style.strokeDasharray = length + ' ' + length;
    }
  }
  window.addEventListener('scroll', myFunction);
});