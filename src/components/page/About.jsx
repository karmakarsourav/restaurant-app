import React from "react";

const About = () => {
  return (
    <div className="text-gray-800">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[50vh]"
        style={{ backgroundImage: "url(/images/about.jpg)" }}
      >
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">About Us - Foodies</h1>
        </div>
      </section>

      {/* Our Story */}
      <section className="max-w-6xl mx-auto px-6 py-12 items-center">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Journey</h2>
          <p className="leading-relaxed">
            Restaurant Name began as a small family kitchen in Kolkata in 2025.
            Inspired by age-old recipes and the joy of sharing food, we turned
            our passion into a full-fledged restaurant. Today, we continue to
            bring authentic flavors to your plate in a warm and welcoming space.
          </p>
        </div>
      </section>

      {/* Philosophy / Values */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold mb-8">What We Believe In</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: "🌿", text: "Fresh, locally sourced ingredients" },
              { icon: "👨‍🍳", text: "Authentic recipes with a modern touch" },
              { icon: "❤️", text: "Warm hospitality & family-like atmosphere" },
              { icon: "🌍", text: "Commitment to sustainability" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg"
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-16 bg-gradient-to-r from-red-500 to-orange-400 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">
          Join Us and Be Part of Our Story
        </h2>
        <p className="mb-6">
          Reserve your table today and taste the difference.
        </p>
        <button className="bg-white text-red-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 cursor-pointer">
          Reserve a Table
        </button>
      </section>
    </div>
  );
};

export default About;
