import React from "react";

export default function About() {
  return (
    <>
      <div className="mt-5 pt-5 W_90"></div>
      <div className="mx-auto W_90 h-100 mb-5 pb-5 d-flex align-items-center justify-content-center">
        <div className="container">
          <div className="row">
            <h1 className="text-center size3V">About</h1>
          </div>
          <div className="row d-flex align-items-center justify-content-center">
            <div className="col-lg-6 col-sm-12">
              <img
                className="w-100"
                src="https://res.cloudinary.com/dwpi8ryr2/image/upload/v1687893467/products/quran_paper_dispersing_energy_in_the_middle_spuitb.jpg"
                alt="quran"
              />
            </div>
            <div className="col-lg-6 col-sm-12 ">
              <p className=" fs-3">
                This website is designed to provide easy and quick access to the
                Quran, including English translation and explanation. Users can
                explore and read different Surahs without the need to create an
                account. The website also offers a dark mode option for
                comfortable reading and is responsive across all devices.
              </p>
            </div>
          </div>
          <div className="row d-flex align-items-center justify-content-center">
            <div className="col-lg-6 col-sm-12 ">
              <p className=" fs-3">
                I utilized JavaScript, React, Bootstrap, and CSS frameworks to
                construct this captivating website. It serves as a platform to
                showcase my solid grasp of fundamentals and demonstrate my
                skills.
              </p>
            </div>
            <div className="col-lg-6 col-sm-12">
              <img
                className="w-100"
                src="https://res.cloudinary.com/dwpi8ryr2/image/upload/v1687893467/products/The_illustration_depicts_a_person_with_multiple_ar_bzvw5l.jpg"
                alt="quran"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
