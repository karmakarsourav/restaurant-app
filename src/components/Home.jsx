import React from "react";

const Home = () => {
  return (
    <section
      className="relative bg-cover bg-center h-[90vh] text-white flex items-center justify-center"
      style={{ backgroundImage: "url(/images/Hero.jpg)" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-2xl">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Foodies</h2>
        <p className="text-lg md:text-xl mb-6">Authentic Indian Cuisine</p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition cursor-pointer">View Menu</button>
          <button className="bg-transparent border border-white hover:bg-white hover:text-black text-white px-6 py-3 rounded-lg transition cursor-pointer">Reserve a Table</button>
        </div>
      </div>
    </section>
  );
};

export default Home;
