
export default function Home() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Elevate Your Space  with <br/>Premium Tilse</h1>
          <p className="py-6">
            Explore our curated collection of premium ceramic, elegant marble, durable porcelain, and modern geometric tiles, specifically designed to elevate your home and office interiors. From timeless classics to contemporary patterns, we bring you the perfect blend of aesthetics and durability. Transform your floors and walls into a masterpiece with our high-quality craftsmanship.
          </p>
          <button className="btn btn-primary rounded-full">Browse Now</button>
        </div>
      </div>
    </div>
  );
}
