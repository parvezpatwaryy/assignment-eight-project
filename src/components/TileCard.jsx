const TileCard = ({ tile }) => {
  return (
    <div className="card bg-base-100 shadow-xl border border-gray-100 hover:shadow-2xl transition-all">
      <figure className="px-4 pt-4">
        <img src={tile.image} alt={tile.title} className="rounded-xl h-48 w-full object-cover" />
      </figure>
      <div className="card-body items-center text-center p-4">
        <h2 className="card-title text-green-700 text-lg">{tile.title}</h2>
        <p className="text-gray-500 text-sm">{tile.description}</p>
      </div>
    </div>
  );
};

export default TileCard;