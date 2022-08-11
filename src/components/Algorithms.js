import React, { useEffect, useState } from "react";
import dumbSort from "./dumbSort";
import insertionSort from "./insertionSort";
import bubbleSort from "./bubbleSort";
import mergeSort from "./mergeSort";
import quickSort from "./quickSort";
import Footer from "./Footer";
import "./Algorithms.css";

const Algorithms = () => {
  const [array, setArray] = useState([]);
  const [indices, setIndices] = useState([]);

  useEffect(() => {
    createArray(120);
  }, []);

  const createArray = (length) => {
    const tempArray = [];

    for (let i = 0; i < length; i++) {
      const randomNumber = Math.floor(Math.random() * (75 - 3 + 1)) + 2;
      tempArray.push(randomNumber);
    }

    setArray([...tempArray]);
  };

  const updateIndices = (newIndices) => {
    setIndices([...newIndices]);
  };

  return (
    <div>
      <div className="header-container">
        <div className="buttons-container">
          <button
            disabled={indices.length !== 0}
            onClick={() => {
              createArray(120);
            }}
          >
            Reset Array
          </button>
          <button
            disabled={indices.length !== 0}
            onClick={() => dumbSort(array, updateIndices)}
          >
            Selection Sort
          </button>
          <button
            disabled={indices.length !== 0}
            onClick={() => {
              bubbleSort(array, updateIndices);
            }}
          >
            Bubble Sort
          </button>
          <button
            disabled={indices.length !== 0}
            onClick={() => insertionSort(array, updateIndices)}
          >
            Insertion Sort
          </button>
          <button
            disabled={indices.length !== 0}
            onClick={() => mergeSort(array, updateIndices)}
          >
            Merge Sort
          </button>
          <button
            disabled={indices.length !== 0}
            onClick={() => {
              quickSort(array, updateIndices);
            }}
          >
            Quick Sort
          </button>
        </div>
      </div>
      <div className="container">
        <div className="bars-container">
          {array.map((item, idx) => {
            return (
              <div
                className="vertical-bar"
                key={idx}
                style={{
                  height: `${item}vh`,
                  backgroundColor: indices.includes(idx)
                    ? "#ff5722"
                    : "dimgrey",
                }}
              ></div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Algorithms;
