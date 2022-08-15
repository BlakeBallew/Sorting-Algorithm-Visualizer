import sleep from "./sleep";

const mergeSort = async (arr, updateIndices) => {
  const n = arr.length;

  var curr_size;

  var left_start;

  for (curr_size = 1; curr_size <= n - 1; curr_size = 2 * curr_size) {
    for (left_start = 0; left_start < n - 1; left_start += 2 * curr_size) {
      var mid = Math.min(left_start + curr_size - 1, n - 1);
      var right_end = Math.min(left_start + 2 * curr_size - 1, n - 1);

      await merge(arr, left_start, mid, right_end, updateIndices);
    }
  }
  updateIndices([]);
};

const merge = async (arr, l, m, r, updateIndices) => {
  var i, j, k;
  var n1 = m - l + 1;
  var n2 = r - m;

  /* create temp arrays */
  var L = Array(n1).fill(0);
  var R = Array(n2).fill(0);

  /*
   * Copy data to temp arrays L and R
   */
  for (i = 0; i < n1; i++) L[i] = arr[l + i];
  for (j = 0; j < n2; j++) R[j] = arr[m + 1 + j];

  /*
   * Merge the temp arrays back into arr[l..r]
   */
  i = 0;
  j = 0;
  k = l;
  while (i < n1 && j < n2) {
    await sleep(15);
    updateIndices([l + i, m + 1 + j, k]);
    if (L[i] <= R[j]) {
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = R[j];
      j++;
    }
    k++;
  }

  /*
   * Copy the remaining elements of L, if there are any
   */
  while (i < n1) {
    await sleep(15);
    updateIndices([l + i, m + 1 + j, k]);
    arr[k] = L[i];
    i++;
    k++;
  }

  /*
   * Copy the remaining elements of R, if there are any
   */
  while (j < n2) {
    await sleep(10);
    updateIndices([l + i, m + 1 + j, k]);
    arr[k] = R[j];
    j++;
    k++;
  }
};

export default mergeSort;
