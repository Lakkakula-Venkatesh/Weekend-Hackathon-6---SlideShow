import React from "react";
import Detailpage from "./Detailpage";

export default function Slidespage({ array }) {
  const [currIndex, setCurrIndex] = React.useState(0);
  
  const goToPrev = () => {
    setCurrIndex(currIndex - 1);
  };
  const goToNext = () => {
    setCurrIndex(currIndex + 1);
  };
  const restartSlides = () => {
    setCurrIndex(0);
  };
  return (
    <>
      <Detailpage currSlide={array[currIndex]} />
      <button data-testid="button-prev" onClick={goToPrev} disabled={currIndex === 0}>
        Prev
      </button>
      <button data-testid="button-restart" onClick={restartSlides} disabled={currIndex === 0}>
        Restart
      </button>
      <button data-testid="button-next" onClick={goToNext} disabled={currIndex === array.length - 1}>
        Next
      </button>
    </>
  );
}
