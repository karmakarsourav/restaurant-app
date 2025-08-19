import React from "react";

const Contact = () => {
  return (
    <section className="p-4 m-4 text-center">
      <h1 className="text-3xl font-bold text-gray-800">
        We’d Love to Hear from You
      </h1>

      <div className="m-4 mx-auto max-w-6xl">
        <h2 className="text-2xl m-4 p-4 font-bold text-stone-800">
          Contact Us
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="mx-auto">
            <h2 className="text-2xl font-semibold mb-8">Address</h2>
            <div className="text-left font-semibold text-lg">
              <p>Demo Rode</p>
              <p>Kolkata, WB 700001</p>
              <p>Phone: 9000000000</p>
              <p>Email: foodies@gmail.com</p>
            </div>
          </div>

          <div className="mx-auto">
            <h2 className="text-2xl font-semibold mb-8">
              Follow Us via Social Media
            </h2>
            <div className="font-semibold text-lg flex flex-col gap-4">
              <a href="">Facebook</a>
              <a href="">Instagram</a>
              <a href="">Twitter</a>
            </div>
          </div>

          <div className="">
            <h2 className="text-2xl font-semibold mb-8">
              Send Us Direct Message
            </h2>
            <form action="" className="m-2">
              <div className="flex gap-2 justify-between my-2 max-w-2xs mx-auto">
                <label htmlFor="name" className="text-lg font-semibold">
                  Name :
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter Your Name"
                  className="border rounded border-gray-300 focus:outline-none focus:ring focus:ring-gray-500 px-2 py-1"
                  required
                />
              </div>

              <div className="flex gap-2 justify-between my-2 max-w-2xs mx-auto">
                <label htmlFor="email" className="text-lg font-semibold">
                  Email :
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter Your Email"
                  className="border rounded border-gray-300 focus:outline-none focus:ring focus:ring-gray-500 px-2 py-1"
                  required
                />
              </div>

              <div className="flex gap-2 justify-between my-2 max-w-2xs mx-auto">
                <label htmlFor="phone" className="text-lg font-semibold">
                  Phone :
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Phone (Optional)"
                  className="border rounded border-gray-300 focus:outline-none focus:ring focus:ring-gray-500 px-2 py-1"
                />
              </div>

              <div className="flex gap-2 justify-between my-2 max-w-2xs mx-auto">
                <textarea
                  rows={4}
                  placeholder="Tell us how we can help you"
                  className="w-full border rounded border-gray-300 focus:outline-none focus:ring focus:ring-gray-500 p-2"
                  required
                />
              </div>

              <button
                type="button"
                className="cursor-pointer w-1/2 text-white font-semibold bg-gray-500 hover:bg-gray-700 m-2 p-2 rounded"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
