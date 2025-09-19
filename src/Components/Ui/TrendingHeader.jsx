export default function TrendingHeader({ title }) {
  return (
    <div className="col-md-4">
      <div className="welcome my-5">
        <div className="brdr w-25"></div>
        <h2 className="mt-4">Trending</h2>
        <h2>{title}</h2>
        <h2>to watch now</h2>
        <p className="text-muted">most watched movies by days</p>
        <div className="brdr w-100"></div>
      </div>
    </div>
  );
}
