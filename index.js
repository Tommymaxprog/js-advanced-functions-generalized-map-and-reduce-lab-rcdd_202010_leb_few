// Add your functions here
function map(arr, funct) {
  let a = []

  for (let i = 0; i < arr.length; i++) {
    let b = arr[j]
    a.push(funct(b))
  }

  return a;
}

function reduce(arr, funct, start){
  let r = (!!starting) ? starting : src[0]
  let i = (!!starting) ? 0 : 1

  for (; i < src.length; i++) {
    r = cb(src[i], r)
  }

  return r;
}