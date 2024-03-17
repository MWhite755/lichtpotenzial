export default function Home() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(/hero_img.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Lichtpotenzial</h1>
          <button className="btn btn-primary">Erscheint bald...</button>
        </div>
      </div>
    </div>
  );
}
