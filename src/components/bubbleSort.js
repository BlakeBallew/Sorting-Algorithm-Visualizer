import sleep from "./sleep";

const bubbleSort = async (array, updateIndices) => {
  let len = array.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      await sleep(2);
      updateIndices([j]);
      if (array[j] > array[j + 1]) {
        let tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
      }
    }
  }
  updateIndices([]);
};

export default bubbleSort;
