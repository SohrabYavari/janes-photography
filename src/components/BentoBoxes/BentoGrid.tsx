import React, { useState } from "react";
import "./Bento.css";

interface BentoGridProps {
  images: string[];
}

const BentoGrid: React.FC<BentoGridProps> = ({ images }) => {
  const [selectedBox, setSelectedBox] = useState(0);

  const handleRadioChange = (index: number) => {
    if (!document.startViewTransition) {
      setSelectedBox(index);
      return;
    }

    document.startViewTransition(() => {
      setSelectedBox(index);
    });
  };

  return (
    <div className="flex flex-col mx-auto justify-center items-center">
      <div className="container flex mx-auto justify-center items-center relative pt-5">
      <div className="bg-accent w-full h-40 absolute top-0 -z-10 rounded-tr-xl rounded-tl-xl opacity-75" />
        <div className="wrapper">
          {images.map((src, index) => (
            <React.Fragment key={index}>
              <input
                type="radio"
                name="bento"
                id={`box-${index}`}
                value={`box-${index}`}
                checked={selectedBox === index}
                onChange={() => handleRadioChange(index)}
              />
              <label
                className="box"
                htmlFor={`box-${index}`}
                data-index={index + 1}
                style={{ backgroundImage: `url(${src})` }}
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;
