import Link from 'next/link';
import tiles from '@/data/tiles.json';
import TileCard from '@/components/TileCard';

export default function Home() {
  return (
    <>
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co.com/4RSNj287/your-actual-image.jpg"
            className="w-300 rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Elevate Your space with <br/> Premium Tiles</h1>
            <p className="py-6">
              Explore our curated collection of ceramic, marble, porcelain, and geometric tiles designed to transform your home and office. From timeless elegance to modern patterns, find the perfect surface that reflects your style and ensures lasting durability.
            </p>
            <Link href="/all-tiles">
              <button className="btn btn-secondary rounded-2xl">Browse Now</button>
            </Link>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto p-10">
        <h1 className="text-3xl font-bold mb-8 border-l-4 border-green-500 pl-4">Featured Collection</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {tiles.slice(0, 5).map((item) => (
            <TileCard key={item.id} tile={item} />
          ))}
        </div>
      </div>
    </>
  );
}