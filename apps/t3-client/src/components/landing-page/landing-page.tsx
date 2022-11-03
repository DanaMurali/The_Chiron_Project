import React from 'react';

export default function LandingPage() {
  return (
    <div>
      {/* <!-- Hero Section --> */}
      <section id="hero">
        {/* <!-- Flex Container --> */}
        <div className="bg-sectionPink container mx-auto  mt-10 flex flex-col-reverse items-center items-stretch space-y-0 px-6 py-6 md:flex-row md:space-y-0">
          {/* <!-- mt-10 -->
            <!-- Left Item --> */}
          <div className="flex flex-col items-center space-y-12 rounded-lg  bg-white p-3 md:w-1/2 ">
            <h1 className="max-w-md p-8 text-center text-4xl font-bold md:text-5xl">
              The Chiron Project
            </h1>
            <p className="max-w-sm text-center ">
              Meet friendly and approachable mentors to discuss new
              technologies, career goals and personal development.
            </p>
            <div className="flex justify-center space-x-6 p-6 md:justify-start">
              <a
                href="#"
                className="bg-blackCoral baseline hover:bg-hoverTeal rounded-lg p-3 px-6 pt-2 text-white"
              >
                Sign Up
              </a>
              <a
                href="#"
                className="bg-blackCoral baseline hover:bg-hoverTeal rounded-lg p-3 px-6 pt-2 text-white"
              >
                Sign In
              </a>
            </div>
          </div>
          {/* <!-- Right Item - Image --> */}
          <div className="bg-mediumGreen mb-32 flex flex-col items-center space-y-12 rounded-lg p-3 px-6 py-6 md:w-1/2">
            {/* <img src="images/hero.png" alt=""/> */}
          </div>
        </div>
      </section>

      <section id="companies">
        {/* <!-- Text Container --> */}
        <div className="mt-10 bg-white ">
          <h1 className="text-textGrey text-center">
            Used by 4,000+ companies
          </h1>
        </div>

        {/* <!-- Companies Container --> */}
        <div className="bg-blackCoral container mx-auto flex-row items-center items-stretch space-y-0 rounded p-2 md:space-y-0">
          {/* <!-- Company Logos Container --> */}
          <div className="flex-column mx-auto flex items-center items-stretch space-y-0 rounded bg-white px-6 py-6 md:space-y-0">
            {/* <img src="" alt="">
                <img src="" alt="">
                <img src="" alt="">
                <img src="" alt=""> */}
          </div>
        </div>
      </section>

      {/* <!-- Build up your Skills --> */}
      <section id="skills">
        {/* <!-- Flex Container --> */}
        <div className="bg-sectionPink container mx-auto  mt-10 flex flex-col-reverse items-center items-stretch space-y-0 px-6 py-6 md:flex-row md:space-y-0">
          {/* <!-- Left Item - Image --> */}
          <div className="bg-mediumGreen flex flex-col items-center space-y-12 rounded-lg p-3 px-6 py-6 md:w-1/2">
            {/* <img src="images/hero.png" alt=""> */}
          </div>

          {/* <!-- Right Item --> */}
          <div className="flex flex-col items-center space-y-12 rounded-lg  bg-white p-3 md:w-1/2 ">
            <h1 className="max-w-md p-8 text-center text-4xl font-bold md:text-5xl">
              Build Up your skills
            </h1>
            <p className="max-w-sm text-center ">
              Meet like minded individuals Not only to discuss your own career
              but also your own personal development.
            </p>
            <div className="flex justify-center space-x-6 p-6 md:justify-start">
              <a
                href="#"
                className="bg-blackCoral baseline hover:bg-hoverTeal rounded-lg p-3 px-6 pt-2 text-white"
              >
                Join Guild
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Mentoring Events --> */}
      <section id="mentoring-events">
        {/* <!-- Flex Container --> */}
        <div className="bg-sectionPink container mx-auto  mt-10 flex flex-col-reverse items-center items-stretch space-y-0 px-6 py-6 md:flex-row md:space-y-0">
          {/* <!-- mt-10 -->
            <!-- Left Item --> */}
          <div className="flex flex-col items-center space-y-12 rounded-lg  bg-white p-3 md:w-1/2 ">
            <h1 className="max-w-md p-8 text-center text-4xl font-bold md:text-5xl">
              Mentoring Events
            </h1>
            <p className="max-w-sm text-center ">
              Attend our next upcoming meet and greet at the Mayfair hotel to
              meet some of our mentors in person.
            </p>
            <p>20th December 2022, 7:00pm</p>
            <div className="flex justify-center space-x-6 p-6 md:justify-start">
              <a
                href="#"
                className="bg-blackCoral baseline hover:bg-hoverTeal rounded-lg p-3 px-6 pt-2 text-white"
              >
                Register Now
              </a>
            </div>
          </div>
          {/* <!-- Right Item - Image --> */}
          <div className="bg-mediumGreen mb-32 flex flex-col items-center space-y-12 rounded-lg p-3 px-6 py-6 md:w-1/2">
            {/* <img src="images/hero.png" alt=""> */}
          </div>
        </div>
      </section>
    </div>
  );
}
