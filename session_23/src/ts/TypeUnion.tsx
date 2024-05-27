interface Image {
  src: string;
}

function logOutput(value: string | number | string[] | Image) {
  if (typeof value === 'string') {
    value.toUpperCase();
  }
  if (typeof value === 'number') {
    Math.round(value);
  }
  if (Array.isArray(value)) {
    value.join('');
  }
  if (typeof value === 'object' && !Array.isArray(value)) {
    value.src;
  }
  console.log(value.toString());
}

logOutput('hi there');
logOutput(123);
logOutput(['hi', 'there']);
logOutput({src: 'img.jpg'});