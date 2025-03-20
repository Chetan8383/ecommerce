import React from "react";
import Title from "../components/Title";
import { CiChat1, CiLocationOn, CiMail, CiPhone } from "react-icons/ci";
import { Link } from "react-router-dom";
import NewsLetter from "../components/NewsLetter";

const contact = () => {
  return (
    <div>
      <section>
        <div className="container px-6 py-12 mx-auto">
          <div>
            <div className="text-3xl">
              <Title text1={"Contact"} text2={"Us"} />
            </div>

            <h1 className="mt-2 text-2xl saira-font-bold md:text-3xltext-black">
              Chat to our friendly team
            </h1>

            <p className="mt-3 text-gray-700">
              We’d love to hear from you. Please fill out this form or shoot us
              an email.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-2">
              <div>
                <span className="inline-block p-3 text-violet-500 rounded-full bg-gray-800">
                  <CiMail className="text-xl" />
                </span>

                <h2 className="mt-4 text-base font-medium text-gray-800 ">
                  Email
                </h2>
                <p className="mt-2 text-sm text-gray-500">
                  Our friendly team is here to help.
                </p>
                <Link to="mailto:chetanmehra095@gmail.com">
                  <p className="mt-2 text-sm text-violet-500">
                    hello@otakumart.com
                  </p>
                </Link>
              </div>

              <div>
                <span className="inline-block p-3 text-violet-500 rounded-full bg-gray-800">
                  <CiChat1 className="text-xl" />
                </span>

                <h2 className="mt-4 text-base font-medium text-gray-800">
                  Live chat
                </h2>
                <p className="mt-2 text-sm text-gray-500 ">
                  Our friendly team is here to help.
                </p>
                <Link to="tel:+918383914579">
                  <p className="mt-2 text-sm text-violet-500">Start new chat</p>
                </Link>
              </div>

              <div>
                <span className="inline-block p-3 text-violet-500 rounded-full bg-gray-800">
                  <CiLocationOn className="text-xl" />
                </span>

                <h2 className="mt-4 text-base font-medium text-gray-800">
                  Office
                </h2>
                <p className="mt-2 text-sm text-gray-500 ">
                  Come say hello at our office HQ.
                </p>
                <Link to="https://maps.app.goo.gl/qjsqbCP41zZ8Kn7M7">
                  <p className="mt-2 text-sm text-violet-500">
                    100 Smith Street Collingwood VIC 3066 AU
                  </p>
                </Link>
              </div>

              <div>
                <span className="inline-block p-3 text-violet-500 rounded-full bg-gray-800">
                  <CiPhone className="text-xl" />
                </span>

                <h2 className="mt-4 text-base font-medium text-gray-800">
                  Phone
                </h2>
                <p className="mt-2 text-sm text-gray-500 ">
                  Mon-Fri from 8am to 5pm.
                </p>
                <Link to="tel:+918383914579">
                  <p className="mt-2 text-sm text-violet-500">+91 8383914579</p>
                </Link>
              </div>
            </div>

            <div
              className="p-4 py-6 rounded-lg bg-violet-50 border md:p-8"
              id="contact-form"
            >
              {/* FORM */}
              <form>
                <div className="-mx-2 md:items-center md:flex">
                  <div className="flex-1 px-2">
                    <label className="block mb-2 text-sm text-gray-600 ">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="John "
                      className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-500 rounded-lg  focus:border-violet-400 focus:ring-violet-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div className="flex-1 px-2 mt-4 md:mt-0">
                    <label className="block mb-2 text-sm text-gray-600 ">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Doe"
                      className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-500 rounded-lg  focus:border-violet-400 focus:ring-violet-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block mb-2 text-sm text-gray-600 ">
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="johndoe@example.com"
                    className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-500 rounded-lg focus:border-violet-400 focus:ring-violet-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="w-full mt-4">
                  <label className="block mb-2 text-sm text-gray-600 ">
                    Message
                  </label>
                  <textarea
                    className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-500 rounded-lg md:h-56 focus:border-violet-400 focus:ring-violet-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Message"
                  ></textarea>
                </div>

                <button className="w-full cursor-pointer px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-violet-500 rounded-lg hover:bg-violet-400 focus:outline-none focus:ring focus:ring-violet-300 focus:ring-opacity-50">
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/*  */}

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="md:flex gap-x-24 clear-left md:mb-16 mb-10">
            <div className=" md:mb-0 mb-4">
              <h2 className="text-black font-manrope text-4xl font-semibold leading-10 mb-5 md:text-left text-center">
                Get In Touch
              </h2>
              <p className="text-gray-600 text-lg font-normal leading-7 mb-7 md:text-left text-center">
                Whether you have a concern or simply want to say hello, We are
                here to facilitate communication with you.
              </p>
              <div className="flex md:items-center md:justify-start justify-center">
                <Link to="#contact-form">
                  <button className="w-36 h-12 rounded-full bg-violet-600 transition-all duration-700 hover:bg-violet-800 shadow text-white text-center text-base font-semibold leading-6">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
            <div className="border-l-2 md:border-violet-600 border-white px-10 py-6">
              <div className="mb-8">
                <h6 className="text-gray-500 text-sm font-medium leading-5 pb-3 md:text-start text-center">
                  Email Address
                </h6>
                <h3 className="text-black text-xl font-semibold leading-8 md:text-start text-center">
                  hello@otakumart.com
                </h3>
              </div>
              <div>
                <h6 className="text-gray-500 text-sm font-medium leading-5 pb-3 md:text-start text-center">
                  Phone Number
                </h6>
                <h3 className="text-black text-xl font-semibold leading-8 md:text-start text-center">
                  +91 8383914579
                </h3>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
            <div className="h-96 relative flex justify-center ">
              <div className="w-full h-full absolute bg-gradient-to-t from-gray-800/50 to-gray-600/50"></div>
              <img
                src="https://pagedone.io/asset/uploads/1696246502.png"
                alt="United Kingdom image"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 mb-6 text-center px-6 ">
                <h5 className="text-white text-lg font-semibold leading-7 mb-2">
                  United Kingdom
                </h5>
                <p className="text-white text-base font-medium leading-6">
                  123 High Street, Westminster, London
                </p>
              </div>
            </div>
            <div className="h-96 relative flex justify-center">
              <div className="w-full h-full absolute bg-gradient-to-t from-gray-800/50 to-gray-600/50"></div>
              <img
                src="https://pagedone.io/asset/uploads/1696246522.png"
                alt="Germany image"
                className="w-full h-full  object-cover"
              />
              <div className="absolute bottom-0 mb-6 text-center px-6">
                <h5 className="text-white text-lg font-semibold leading-7 mb-2">
                  Germany
                </h5>
                <p className="text-white text-base font-medium leading-6">
                  101 Unter den Linden, Mitte <br />
                  District, Berlin
                </p>
              </div>
            </div>
            <div className="h-96 relative flex justify-center">
              <div className="w-full h-full absolute bg-gradient-to-t from-gray-800/50 to-gray-600/50"></div>
              <img
                src="https://pagedone.io/asset/uploads/1696246551.png"
                alt="France image"
                className="w-full h-full  object-cover"
              />
              <div className="absolute bottom-0 mb-6 text-center px-6">
                <h5 className="text-white text-lg font-semibold leading-7 mb-2">
                  France
                </h5>
                <p className="text-white text-base font-medium leading-6">
                  456 Rue de la Paix, 8th Arrondissement, Paris
                </p>
              </div>
            </div>
            <div className="h-96 relative flex justify-center">
              <div className="w-full h-full absolute bg-gradient-to-t from-gray-800/50 to-gray-600/50"></div>
              <img
                src="https://pagedone.io/asset/uploads/1696246565.png"
                alt="Switzerland image"
                className="w-full h-full  object-cover"
              />
              <div className="absolute bottom-0 mb-6 text-center px-6">
                <h5 className="text-white text-lg font-semibold leading-7 mb-2">
                  Switzerland
                </h5>
                <p className="text-white text-base font-medium leading-6">
                  987 Bahnhofstrasse, Zurich <br /> City Center, Zurich
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <NewsLetter />
    </div>
  );
};

export default contact;
