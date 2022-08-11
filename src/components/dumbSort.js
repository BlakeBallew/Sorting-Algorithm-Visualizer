import sleep from "./sleep";

const dumbSort = async (array, updateIndices) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      await sleep(5);
      updateIndices([i, j]);
      if (array[j] <= array[i]) {
        let temp = array[j];
        array[j] = array[i];
        array[i] = temp;
      }
    }
  }
  updateIndices([]);
};

export default dumbSort;
