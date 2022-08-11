import sleep from "./sleep";

const insertionSort = async (array, updateIndices) => {
  for (let i = 1; i < array.length; i++) {
    let key = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > key) {
      await sleep(5);
      updateIndices([i, j]);
      array[j + 1] = array[j];
      j = j - 1;
    }
    array[j + 1] = key;
  }
  updateIndices([]);
};

export default insertionSort;
