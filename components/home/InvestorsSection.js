/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

const InvestorsSection = ({ textContent }) => (
  <section>
    <div className="content">
      <div className="flex flex-col items-center justify-center w-full text-center flex-shrink-0 px-10 md:px-0 py-12 md:py-24">
        <h2 className="mb-8 text-4xl font-semibold">
          {textContent.title}
        </h2>

        <div className="flex flex-row justify-around flex-wrap sm:px-10">
          <div className="flex flex-shrink-0 w-2/5 md:w-1/3 xl:w-44 h-20 items-center justify-center">
            <img loading="lazy" src="../../logos/investors/ovhcloud.svg" draggable="false" alt="ovhcloud logo" />
          </div>
          <div className="flex flex-shrink-0 w-2/5 md:w-1/3 xl:w-44 h-20 items-center justify-center">
            <img loading="lazy" src="../../logos/investors/telefonica.svg" draggable="false" alt="telefonica logo" />
          </div>
          <div className="flex flex-shrink-0 w-2/5 md:w-1/3 xl:w-44 h-20 items-center justify-center">
            <img loading="lazy" src="../../logos/investors/theventurecity.svg" draggable="false" alt="theventurecity logo" />
          </div>
          <div className="flex flex-shrink-0 w-2/5 md:w-1/3 xl:w-44 h-20 items-center justify-center">
            <img loading="lazy" src="../../logos/investors/esade.webp" className="h-7 mx-auto" draggable="false" alt="esade logo" />
          </div>
          <div className="flex flex-shrink-0 w-2/5 md:w-1/3 xl:w-44 h-20 items-center justify-center">
            <a
              href="https://crypto.com/price/internxt"
              target="_blank"
              className="mx-auto"
            >
              <img loading="lazy" src="../../logos/investors/crypto.com.webp" className="h-7" draggable="false" alt="crypto.com logo" />
            </a>
          </div>
          <div className="flex flex-shrink-0 w-2/5 md:w-1/3 xl:w-44 h-20 items-center justify-center">
            <img loading="lazy" src="../../logos/investors/angelscapital.svg" draggable="false" alt="angelscapital logo" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default InvestorsSection;
