function normalFn(x) {
  return x * 2;
}

const anonymousFn = function(x) {
  return x * 2;
};

const arrowFn = x => x * 2;

console.log(normalFn(5), anonymousFn(5), arrowFn(5));
