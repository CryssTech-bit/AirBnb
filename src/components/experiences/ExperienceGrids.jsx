// Grid.jsx

import ExperienceCard from "./ExperienceCard";
import { airbnbOriginals } from "../../data/HomeListings";

const Grid = () => {
  return (
    <section className="w-full px-6 py-10">
      {/* Section Header */}
      <div className="flex  justify-between mb-1">
        <div>
          <h2 className="text-[24px] text-left font-semibold text-black">
            Airbnb Originals
          </h2>

          <p className="text-gray-500 mt-1">
            Hosted by the world's most interesting people
          </p>
        </div>

        {/* Optional Navigation Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition">
            ←
          </button>

          <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition">
            →
          </button>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="gap-6 lg:gap-7 flex scrollbar-hide overflow-x-auto scrollbar-hide py-2">
        {airbnbOriginals.map((item) => (
          <ExperienceCard
            key={item.id}
            image={item.image}
            title={item.title}
            location={item.location}
            price={item.price}
            badge={item.badge}
          />
        ))}
      </div>
      <h2 className="text-3xl font-semibold text-gray-900">Airbnb Originals</h2>
    </section>
  );
};

export default Grid;
