/* eslint-disable max-len */
import React from 'react';
import Link from 'next/link';
import { UilAngleRightB } from '@iconscout/react-unicons';

const ManifestoSection = ({
  textContent,
  lang
}) => (
  <section className="relative flex flex-col w-full">

    {/* Why privacy is so important */}
    <div className="flex flex-col items-center py-20 lg:py-40 z-10">

      <div className="text-center px-6">

        <h2 className="text-3xl lg:text-4xl font-semibold mb-10">
          {textContent.section1.title.line1}
          {' '}
          <br className="hidden sm:flex" />
          {textContent.section1.title.line2}
        </h2>

        <h3 className="text-base font-normal text-cool-gray-80 mb-10">
          {textContent.section1.subtitle.line1}
          {' '}
          <br className="hidden sm:flex" />
          {textContent.section1.subtitle.line2}
          {' '}
          <br className="hidden sm:flex" />
          {textContent.section1.subtitle.line3}
        </h3>

        <h3 className="text-base font-normal text-cool-gray-80 mb-10">
          {textContent.section1.subtitle.line4}
          {' '}
          <br className="hidden sm:flex" />
          {textContent.section1.subtitle.line5}
        </h3>

        <div className="flex flex-col items-center">
          <p className="text-supporting-2 font-medium text-cool-gray-40 mb-4">
            {textContent.section1.signature}
          </p>
          <img loading="lazy" className="w-24 select-none" src="/images/privacy/signature.webp" draggable="false" alt="Fran's signature" />
        </div>

      </div>

    </div>

    {/* How we ensure user privacy */}
    <div className="flex flex-col items-center py-20 lg:pb-40 lg:pt-0 z-10">

      <div className="flex flex-col items-center text-center px-6">

        <h2 className="text-3xl lg:text-4xl font-semibold mb-10">
          {textContent.section2.title.line1}
          {' '}
          <br className="hidden sm:flex" />
          {textContent.section2.title.line2}
        </h2>

        <h3 className="text-base font-normal text-cool-gray-80 mb-20">
          {textContent.section2.subtitle.line1}
          {' '}
          <br className="hidden sm:flex" />
          {textContent.section2.subtitle.line2}
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 grid-flow-row lg:grid-rows-2 gap-10 lg:gap-20 text-left">

          <div className="flex flex-col items-start justify-start p-10 w-80 h-80 bg-cool-gray-5 rounded-2xl">
            <h4 className="text-2xl font-semibold mb-6">
              {textContent.section2.square1.title}
            </h4>
            <h5 className="text-base text-cool-gray-80">
              {textContent.section2.square1.description}
            </h5>
          </div>

          <div className="flex flex-col items-start justify-start p-10 w-80 h-80 bg-cool-gray-5 rounded-2xl">
            <h4 className="text-2xl font-semibold mb-6">
              {textContent.section2.square2.title}
            </h4>
            <h5 className="text-base text-cool-gray-80">
              {textContent.section2.square2.description}
            </h5>
          </div>

          <div className="flex flex-col items-start justify-start p-10 w-80 h-80 bg-cool-gray-5 rounded-2xl">
            <h4 className="text-2xl font-semibold mb-6">
              {textContent.section2.square3.title}
            </h4>
            <h5 className="text-base text-cool-gray-80">
              {textContent.section2.square3.description}
            </h5>
          </div>

          <div className="flex flex-col items-start justify-start p-10 w-80 h-80 bg-cool-gray-5 rounded-2xl">
            <h4 className="text-2xl font-semibold mb-6">
              {textContent.section2.square4.title}
            </h4>
            <h5 className="text-base text-cool-gray-80">
              {textContent.section2.square4.description}
            </h5>
          </div>

        </div>

      </div>

    </div>

    {/* Apps designed to protect your privacy */}
    <div className="flex flex-col items-center py-20 lg:py-40 z-10 bg-cool-gray-100 text-white">

      <div className="text-center px-6">

        <h2 className="text-3xl lg:text-5xl font-semibold mb-10">
          {textContent.section3.title.line1}
          <br />
          {textContent.section3.title.line2}
        </h2>

        <h3 className="text-base font-normal px-6 mb-40">
          {textContent.section3.subtitle.line1}
          {' '}
          <br className="hidden sm:flex" />
          {textContent.section3.subtitle.line2}
        </h3>

        <div className="grid grid-cols-1 grid-rows-2 gap-20 text-left">

          <div className="grid grid-cols-1 lg:grid-cols-2 grid-flow-row lg:grid-rows-1 gap-0 items-start justify-start bg-cool-gray-90 rounded-2xl overflow-hidden">

            <div className="m-20 w-80 h-80">
              <h4 className="text-2xl lg:text-4xl font-semibold mb-10">
                {textContent.section3.square1.title}
              </h4>
              <h5 className="text-base text-cool-gray-20 mb-4">
                {textContent.section3.square1.description}
              </h5>
              <Link href="/drive" locale={lang}>
                <a className="flex flex-row items-center space-x-1 text-base text-blue-50">
                  <span>{textContent.section3.square1.cta}</span>
                  <UilAngleRightB className="w-4 h-4" />
                </a>
              </Link>
            </div>

            <div className="relative lg:m-20 w-80 h-80">
              <div
                className="absolute -top-10 lg:top-5 left-16 lg:left-5 bg-cool-gray-80 rounded-3xl border border-cool-gray-70 shadow-subtle"
                style={{
                  width: 645,
                  height: 430
                }}
              />
            </div>

          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 grid-flow-row lg:grid-rows-1 gap-0 items-start justify-start bg-cool-gray-90 rounded-2xl overflow-hidden">

            <div className="m-20 w-80 h-80">
              <h4 className="text-2xl lg:text-4xl font-semibold mb-10">
                {textContent.section3.square2.title}
              </h4>
              <h5 className="text-base text-cool-gray-20 mb-4">
                {textContent.section3.square2.description}
              </h5>
              <Link href="/photos" locale={lang}>
                <a className="flex flex-row items-center space-x-1 text-base text-blue-50">
                  <span>{textContent.section3.square2.cta}</span>
                  <UilAngleRightB className="w-4 h-4" />
                </a>
              </Link>
            </div>

            <div className="relative lg:m-20 w-80 h-80">
              <div
                className="absolute -top-10 lg:top-5 left-16 lg:left-5 bg-cool-gray-80 rounded-3xl border border-cool-gray-70 shadow-subtle"
                style={{
                  width: 320,
                  height: 600
                }}
              />
            </div>

          </div>

        </div>

      </div>

    </div>

  </section>
);

export default ManifestoSection;
