import tiles from '@/data/tiles.json';
import TileCard from '@/components/TileCard';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto p-10">
      <h1 className="text-3xl font-bold mb-8 border-l-4 border-green-500 pl-4">Featured Collection</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {tiles.slice(0, 5).map((item) => (
          <TileCard key={item.id} tile={item} />
        ))}
      </div>
    </div>
  );
}