import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Paper1 from "./Research/Paper1";
import Paper2 from "./Research/Paper2";
import Paper3 from "./Research/Paper3";

function Spotlight() {
  const [selectedPaper, setSelectedPaper] = useState('paper1');

  const papers = {
    paper1: <Paper1 />,
    paper2: <Paper2 />,
    paper3: <Paper3 />
  };

  const goToNext = () => {
    if (selectedPaper === 'paper1') {
      setSelectedPaper('paper2');
    } else if (selectedPaper === 'paper2') {
      setSelectedPaper('paper3');
    } else {
      setSelectedPaper('paper1');
    }
  };

  const goToPrevious = () => {
    if (selectedPaper === 'paper1') {
      setSelectedPaper('paper3');
    } else if (selectedPaper === 'paper2') {
      setSelectedPaper('paper1');
    } else {
      setSelectedPaper('paper2');
    }
  };

  return (
    <section className="flex flex-col items-center justify-center w-full min-h-screen px-4">
      <h2
        className="mb-6 text-2xl font-bold text-center text-transparent sm:text-4xl bg-gradient-to-r from-purple-400 via-purple-200 to-white bg-clip-text"
        data-aos="fade-up"
      >
        Our Research
      </h2>
      
      <div className="flex justify-center w-full mb-6">
        <div className="w-full max-w-4xl">
          {papers[selectedPaper]}
        </div>
      </div>
      
      <div className="flex items-center justify-center w-full max-w-xs py-1 text-white bg-purple-600 rounded">
        <button 
          onClick={goToPrevious} 
          className="flex items-center justify-center w-10 h-10">
          <span className="sr-only">Prev Page</span>
          <FiChevronLeft className="w-4 h-4" />
        </button>

        <div className="flex items-center mx-4">
          <span className="w-px h-4 mx-2 bg-white/25" aria-hidden="true"></span>
          <div>
            <label htmlFor="PaginationPage" className="sr-only">Page</label>
            <input
              type="number"
              className="w-12 h-8 p-0 text-xs font-medium text-center bg-transparent border-none rounded md:pl-3"
              min="1"
              value={['paper1', 'paper2', 'paper3'].indexOf(selectedPaper) + 1}
              id="PaginationPage"
              readOnly
            />
          </div>
          <span className="w-px h-4 mx-2 bg-white/25" aria-hidden="true"></span>
        </div>

        <button 
          onClick={goToNext} 
          className="flex items-center justify-center w-10 h-10">
          <span className="sr-only">Next Page</span>
          <FiChevronRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}

export default Spotlight;