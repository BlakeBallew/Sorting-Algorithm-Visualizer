import sleep from "./sleep";

const quickSort = async (arr, updateIndices) => {
  //Stack for storing start and end index
  let stack = [];

  //Get the start and end index
  let start = 0;
  let end = arr.length - 1;

  //Push start and end index in the stack
  stack.push({ x: start, y: end });

  //Iterate the stack
  while (stack.length) {
    //Get the start and end from the stack
    const { x, y } = stack.shift();

    //Partition the array along the pivot
    const PI = await partitionHigh(arr, x, y, updateIndices);

    //Push sub array with less elements than pivot into the stack
    if (PI - 1 > x) {
      stack.push({ x: x, y: PI - 1 });
    }

    //Push sub array with greater elements than pivot into the stack
    if (PI + 1 < y) {
      stack.push({ x: PI + 1, y: y });
    }
  }
  updateIndices([]);
};

const partitionHigh = async (arr, low, high, updateIndices) => {
  //Pick the first element as pivot
  let pivot = arr[high];
  let i = low;

  //Partition the array into two parts using the pivot
  for (let j = low; j < high; j++) {
    if (arr[j] <= pivot) {
      await swap(arr, i, j, updateIndices);
      i++;
    }
  }

  await swap(arr, i, high, updateIndices);

  //Return the pivot index
  return i;
};

const swap = async (arr, left, right, updateIndices) => {
  await sleep(30);
  updateIndices([left, right]);
  const temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
};

export default quickSort;
