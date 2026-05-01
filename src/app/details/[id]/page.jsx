import Image from 'next/image';
import { notFound } from 'next/navigation';
import tilesData from '@/data/tiles.json';

export default async function DetailsPage({ params }) {
  const { id } = await params;
  const tile = tilesData.find((item) => item.id === id);
  if (!tile) {
    return notFound();
  }

  return (
    <div className="container mx-auto p-10">

      
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative h-96">
          <div className="relative h-96 w-full">
            <img
              src={tile.image}
              alt={tile.title}
              className="rounded-xl object-cover h-full w-full shadow-lg"
            />
          </div>
        </div>
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-green-800">{tile.title}</h1>
          <p className="text-xl text-gray-600">{tile.description}</p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-2xl font-bold text-gray-800">Price:${tile.price}</p>
            {tile.material && <p className="text-sm text-gray-500">Material: {tile.material}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}