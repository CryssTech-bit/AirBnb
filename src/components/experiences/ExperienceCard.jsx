const ExperienceCard = ({ image, title, location, price, badge }) => {
  return (
    <div className="w-[260px] rounded-2xl overflow-hidden cursor-pointer">
      {/* Image Container */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-[260px] object-cover rounded-2xl"
        />

        {/* Badge */}
        <span className="absolute top-3 left-3 bg-white text-black text-xs font-medium px-3 py-1 rounded-full shadow">
          {badge}
        </span>

        {/* Favorite Icon */}
        <button className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm p-2 rounded-full">
          ❤️
        </button>
      </div>

      {/* Content */}
      <div className="mt-3 space-y-1">
        <h3 className="text-sm font-semibold text-gray-900 line-clamp-2">
          {title}
        </h3>

        <p className="text-sm text-gray-500">{location}</p>

        <p className="text-sm font-medium text-gray-900">From {price}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
