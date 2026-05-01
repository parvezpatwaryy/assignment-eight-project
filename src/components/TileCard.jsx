import Link from 'next/link';

const TileCard = ({ tile }) => {
  return (
    <Link href={`/details/${tile.id}`}> 
      <div className="card bg-base-100 shadow-xl border border-gray-100 hover:shadow-2xl transition-all cursor-pointer">
        <figure className="px-4 pt-4 relative h-48 w-full">
          <img 
            src={tile.image} 
            alt={tile.title} 
            className="rounded-xl object-cover h-full w-full" 
          />
        </figure>
        <div className="card-body items-center text-center p-4">
          <h2 className="card-title text-green-700 text-lg">{tile.title}</h2>
          <p className="text-gray-500 text-sm line-clamp-2">{tile.description}</p>
          <div className="card-actions mt-2">
            <button className="btn btn-sm btn-outline btn-success">View Details</button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TileCard;