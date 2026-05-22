const ExperienceCard = ({ image, title, location, price, badge }) => {
  return (
    <div className="min-w-35   rounded-2xl overflow-hidden cursor-pointer">
      {/* Image Container */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-40 lg:h-40 object-cover rounded-2xl"
        />

        {/* Badge */}
        <span className="absolute top-3 left-3 bg-white text-black text-xs lg:text-[8px] font-medium px-3 py-1 rounded-full shadow">
          {badge}
        </span>

        {/* Favorite Icon */}
        <button className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm px-1 text-[12px] lg:text-[9px] lg:h-fit lg:py-0 rounded-full">
          ❤️
        </button>
      </div>

      {/* Content */}
      <div className="mt-3 space-y-1 pl-2">
        <h3 className="text-sm font-bold text-gray-900 text-[11px] text-left line-clamp-2">
          {title}
        </h3>

        <p className="text-sm text-[10.5px] text-left  text-gray-500">
          {location}
        </p>

        <p className="text-sm font-medium text-gray-500 text-[10.5px] text-left ">
          From {price}
        </p>
      </div>
    </div>
  );
};

export default ExperienceCard;
