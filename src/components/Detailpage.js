import React from "react";

export default function Detailpage({ currSlide }) {
  return (
    <>
      <h1 data-testid="title">{currSlide.title}</h1>
      <p data-testid="text">{currSlide.text}</p>
    </>
  );
}
