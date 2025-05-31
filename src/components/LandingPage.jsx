// components/LandingPage.jsx
import React from "react";
import {
  MagnifyingGlassIcon,
  ChevronDownIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";

export const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo and Search */}
            <div className="flex items-center space-x-6 flex-1">
              <div className="flex items-center">
                <span className="text-2xl font-bold">Connektra</span>
                {/* <span className="text-2xl font-bold text-red-500">my</span>
                <span className="text-2xl font-bold">show</span> */}
              </div>

              <div className="relative flex-1 max-w-lg">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for Movies, Events, Plays, Sports and Activities"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
                />
              </div>
            </div>

            {/* Location and Sign In */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1 text-sm">
                <span>Delhi-NCR</span>
                <ChevronDownIcon className="h-4 w-4" />
              </div>
              <button className="bg-red-500 text-white px-4 py-2 rounded text-sm font-medium">
                Sign in
              </button>
              <Bars3Icon className="h-6 w-6 text-gray-600" />
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="border-t border-gray-200">
          <div className="mx-auto px-4">
            <div className="flex items-center justify-between py-3">
              <div className="flex space-x-8">
                <a
                  href="#"
                  className="text-gray-700 hover:text-red-500 text-sm font-medium"
                >
                  Movies
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-red-500 text-sm font-medium"
                >
                  Stream
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-red-500 text-sm font-medium"
                >
                  Events
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-red-500 text-sm font-medium"
                >
                  Plays
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-red-500 text-sm font-medium"
                >
                  Sports
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-red-500 text-sm font-medium"
                >
                  Activities
                </a>
              </div>
              <div className="flex space-x-6">
                <a
                  href="#"
                  className="text-gray-700 hover:text-red-500 text-sm"
                >
                  ListYourShow
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-red-500 text-sm"
                >
                  Corporates
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-red-500 text-sm"
                >
                  Offers
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-red-500 text-sm"
                >
                  Gift Cards
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Banner Section */}
      <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/api/placeholder/1200/400"
            alt="Live Concert"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="relative mx-auto px-4 py-16">
          <div className="flex items-center justify-between">
            <div className="max-w-lg">
              <h1 className="text-4xl font-bold mb-4">Unlock ₹500 off*</h1>
              <h2 className="text-4xl font-bold mb-8">on LIVE gigs</h2>
              <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold text-lg">
                Apply Now
              </button>
            </div>

            {/* Credit Card Visual */}
            <div className="hidden lg:block">
              <div className="bg-black bg-opacity-50 p-6 rounded-xl backdrop-blur-sm">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-2xl font-bold">book</span>
                  <span className="text-2xl font-bold text-red-500">my</span>
                  <span className="text-2xl font-bold">show</span>
                </div>
                <div className="w-16 h-10 bg-gradient-to-r from-red-500 to-orange-500 rounded mb-4"></div>
                <div className="text-sm opacity-75">Siddhant Manchandani</div>
              </div>
            </div>
          </div>
        </div>

        {/* Banner Navigation Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          <div className="w-2 h-2 bg-white rounded-full"></div>
          <div className="w-2 h-2 bg-white bg-opacity-50 rounded-full"></div>
          <div className="w-2 h-2 bg-white bg-opacity-50 rounded-full"></div>
        </div>
      </section>

      {/* Recommended Movies Section */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Recommended Movies
            </h2>
            <a href="#" className="text-red-500 hover:text-red-600 font-medium">
              See All ›
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {/* Movie Card 1 */}
            <div className="group cursor-pointer">
              <div className="relative rounded-lg overflow-hidden mb-3 aspect-[3/4]">
                <img
                  src="/api/placeholder/300/400"
                  alt="Movie 1"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Movie Card 2 */}
            <div className="group cursor-pointer">
              <div className="relative rounded-lg overflow-hidden mb-3 aspect-[3/4]">
                <img
                  src="/api/placeholder/300/400"
                  alt="Movie 2"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Movie Card 3 */}
            <div className="group cursor-pointer">
              <div className="relative rounded-lg overflow-hidden mb-3 aspect-[3/4]">
                <img
                  src="/api/placeholder/300/400"
                  alt="Movie 3"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Movie Card 4 */}
            <div className="group cursor-pointer">
              <div className="relative rounded-lg overflow-hidden mb-3 aspect-[3/4]">
                <img
                  src="/api/placeholder/300/400"
                  alt="Movie 4"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Movie Card 5 */}
            <div className="group cursor-pointer">
              <div className="relative rounded-lg overflow-hidden mb-3 aspect-[3/4]">
                <img
                  src="/api/placeholder/300/400"
                  alt="Movie 5"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
