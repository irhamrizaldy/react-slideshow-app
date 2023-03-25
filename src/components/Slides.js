import React, { useState } from 'react';

function Slides({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [restartVal, setRestartVal] = useState(false);
  const [prevSlide, setPrevSlide] = useState(false);
  const [nextSlide, setNextSlide] = useState(true);

  const restart = () => {
    setCurrentSlide(0)
    setRestartVal(false)
    setPrevSlide(false)
    setNextSlide(true)
  }
  const previous = () => {
    if (currentSlide < 2) {
      setPrevSlide(false)
      setRestartVal(false)
    } else {
      setPrevSlide(true)
      setRestartVal(true)
      setNextSlide(true)
    }
    setCurrentSlide(currentSlide - 1)
  }
  const next = () => {
    if (currentSlide < slides.length - 2) {
      setNextSlide(true)
      setRestartVal(true)
      setPrevSlide(true)
    } else {
      setNextSlide(false)
      setRestartVal(true)
      setPrevSlide(true)
    }
    setCurrentSlide(currentSlide + 1)
  }
  console.log(currentSlide)
  return (
    <div>
      <div id="navigation" className="text-center">
        <button data-testid="button-restart" className="small outlined" onClick={restart} disabled={!restartVal}>Restart</button>
        <button data-testid="button-prev" className="small" onClick={previous} disabled={!prevSlide}>Prev</button>
        <button data-testid="button-next" className="small" onClick={next} disabled={!nextSlide}>Next</button>
      </div>
      <div id="slide" className="card text-center">
        <h1 data-testid="title">{slides && slides[currentSlide].title}</h1>
        <p data-testid="text">{slides && slides[currentSlide].text}e</p>
      </div>
    </div>
  );
}

export default Slides;
