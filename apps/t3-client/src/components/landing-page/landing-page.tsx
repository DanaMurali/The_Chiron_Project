import Image from 'next/image';
import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';

export default function LandingPage() {
  // const [showSignInModal, setShowSignInModal] = useState<boolean>(false);

  // const handleOnClose = () => {
  //   setShowSignInModal(false);
  // };
  // const handleSignInClick = () => {
  //   setShowSignInModal(true);
  //   console.log('hit');
  // };

  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <main>Loading...</main>;
  }

  return (
    <div>
      {/* <!-- Hero Section --> */}
      <section id="hero">
        {/* <Modal onClose={handleOnClose} open={showSignInModal}>
          <Login onClose={handleOnClose} />
        </Modal> */}

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
              {session ? (
                <>
                  <button
                    className="bg-blackCoral baseline hover:bg-hoverTeal rounded-lg p-3 px-6 pt-2 text-white"
                    onClick={() => signOut()}
                  >
                    Sign Out
                  </button>
                  <button className="bg-blackCoral baseline hover:bg-hoverTeal rounded-lg p-3 px-6 pt-2 text-white">
                    Dashboard
                  </button>
                </>
              ) : (
                <button
                  className="bg-blackCoral baseline hover:bg-hoverTeal rounded-lg p-3 px-6 pt-2 text-white"
                  onClick={() => signIn('azure-ad')}
                >
                  Azure Sign In
                </button>
              )}
            </div>
          </div>
          {/* <!-- Right Item - Image --> */}
          <div className="bg-mediumGreen mb-32 flex flex-col items-center space-y-12 rounded-lg p-3 px-6 py-6 md:w-1/2">
            <Image
              src="/images/landing-page/activity.png"
              className="-mt-14 w-16"
              alt=""
              height="420px"
              width="600px"
            />
          </div>
        </div>
      </section>

      {/* Companies*/}
      <section id="companies">
        <div className="container mx-auto mt-10 bg-white px-6 py-6">
          {/* Container to heading */}
          <div className="mx-auto max-w-6xl px-5 text-center">
            <h1 className="text-textGrey text-center">
              Used by 4,000+ companies
            </h1>

            {/* Logos Container */}
            <div className="border-blackCoral mt-10 flex flex-col border-8 md:flex-row md:space-x-6">
              {/* Logo 1 */}
              <div className="m-10 flex flex-col items-center space-y-6 rounded-lg bg-white p-6 md:w-1/3">
                <Image
                  src="/images/landing-page/stark.png"
                  className="-mt-14 w-16"
                  alt=""
                  height="100px"
                  width="200px"
                />
              </div>
              {/* Logo 2 */}
              <div className="m-10 flex flex-col items-center space-y-6 rounded-lg bg-white p-6 md:w-1/3">
                <Image
                  src="/images/landing-page/monster.png"
                  className="-mt-14 w-16"
                  alt=""
                  height="100px"
                  width="200px"
                />
              </div>
              {/* Logo 3 */}
              <div className="m-10 flex flex-col items-center space-y-6 rounded-lg bg-white p-6 md:w-1/3">
                <Image
                  src="/images/landing-page/wayne.png"
                  className="-mt-14 w-16"
                  alt=""
                  height="100px"
                  width="200px"
                />
              </div>
              {/* Logo 4 */}
              <div className="m-10 flex flex-col items-center space-y-6 rounded-lg bg-white p-6 md:w-1/3">
                <Image
                  src="/images/landing-page/umbrella.png"
                  className="-mt-14 w-16"
                  alt=""
                  height="100px"
                  width="200px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Build up your Skills --> */}
      <section id="skills">
        {/* <!-- Flex Container --> */}
        <div className="bg-sectionPink container mx-auto  mt-10 flex flex-col-reverse items-center items-stretch space-y-0 px-6 py-6 md:flex-row md:space-y-0">
          {/* <!-- Left Item - Image --> */}
          <div className="bg-mediumGreen flex flex-col items-center space-y-12 rounded-lg p-3 px-6 py-6 md:w-1/2">
            <Image
              src="/images/landing-page/steps.png"
              className="-mt-14 w-16"
              alt=""
              height="400px"
              width="600px"
            />
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
        <div className="bg-sectionPink container mx-auto  mt-10 flex flex-col items-center items-stretch space-y-0 px-6 py-6 md:flex-row md:space-y-0">
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
            <div className="flex justify-center space-x-6 p-2 md:justify-start">
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
            <Image
              src="/images/landing-page/event.png"
              className="-mt-14 w-16"
              alt=""
              height="435px"
              width="600px"
            />
          </div>
        </div>
      </section>

      {/* Read What Others Have to say */}
      <section id="testimonials">
        <div className="bg-sectionPink container mx-auto mt-10 px-6 py-6">
          {/* Container to heading and testimonials */}
          <div className="mx-auto max-w-6xl px-5 text-center">
            <h1 className="text-textGrey text-center">TESTIMONIALS</h1>
            <h2 className="text-center text-4xl font-bold">
              Read What Others Have To Say
            </h2>
            {/* Testimonials Container */}
            <div className="mt-10 flex flex-col md:flex-row md:space-x-6">
              {/* Testimonial 1 */}
              <div className="border-blackCoral mb-10 flex flex-col items-center space-y-6 rounded-lg border-8 bg-white p-6 md:w-1/3">
                <Image
                  src="/images/landing-page/jonathon.png"
                  className="-mt-14 w-16"
                  alt=""
                  height="100px"
                  width="100px"
                />
                <h5 className="text-lg font-bold">Jonathon Hutchinson</h5>
                <p className="text-smm">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
              </div>
              {/* Testimonial 2 */}
              <div className="border-blackCoral mb-10 flex flex-col items-center space-y-6 rounded-lg border-8 bg-white p-6 md:w-1/3">
                <Image
                  src="/images/landing-page/darania.png"
                  className="-mt-14 w-16"
                  alt=""
                  height="100px"
                  width="100px"
                />
                <h5 className="text-lg font-bold">Darania Muralitharan</h5>
                <p className="text-smm">
                  Iste dolores commodi doloribus, unde sint quo eligendi
                  consequatur obcaecati?
                </p>
              </div>
              {/* Testimonial 3 */}
              <div className="border-blackCoral mb-10 flex flex-col items-center space-y-6 rounded-lg border-8 bg-white p-6 md:w-1/3">
                <Image
                  src="/images/landing-page/jordan.png"
                  className="-mt-14 w-16"
                  alt=""
                  height="100px"
                  width="100px"
                />
                <h5 className="text-lg font-bold">Jordan Smith</h5>
                <p className="text-smm">
                  Voluptatibus provident recusandae esse laudantium expedita
                  commodi temporibus odio corrupti illo eveniet.
                </p>
              </div>
              {/* Testimonial 4 */}
              <div className="border-blackCoral mb-10 flex flex-col items-center space-y-6 rounded-lg border-8 bg-white p-6 md:w-1/3">
                <Image
                  src="/images/landing-page/rose.png"
                  className="-mt-14 w-16"
                  alt=""
                  height="100px"
                  width="100px"
                />
                <h5 className="text-lg font-bold">Rose Tanner</h5>
                <p className="text-smm">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Be a part of the next big thing */}
      <section id="contact">
        <div className="bg-sectionPink container mx-auto mt-10 mb-10 px-6 py-6">
          {/* Container to heading */}
          <div className="mx-auto max-w-6xl px-5 text-center">
            <h2 className="text-center text-4xl font-bold">
              Be A Part Of The Next Big Thing
            </h2>
            <h5 className="p-6 text-center">
              We work with Brands, Startups, to SMEs. Collaborate for more
              impact and growth.
            </h5>
          </div>
          {/* button container */}
          <div className="mx-auto flex flex-col items-center rounded-lg p-3 px-6 py-6 pt-6">
            <a
              href="#"
              className="bg-blackCoral baseline hover:bg-hoverTeal rounded-lg p-3 px-6 pt-2 text-white"
            >
              Contact Us
            </a>
          </div>
          {/* Image Container */}
          <div className="bg-mediumGreen mx-auto flex flex-col items-center  rounded-lg p-3 px-6 py-6 ">
            <Image
              src="/images/landing-page/people.png"
              className="-mt-14 w-16"
              alt=""
              height="300px"
              width="800px"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
