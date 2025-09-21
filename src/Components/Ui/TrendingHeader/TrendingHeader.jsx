import styles from "./TrendingHeader.module.css"

export default function TrendingHeader({ title, description }) {
  return (
    <div className="col-md-4">
      <div className="welcome my-5">
        <div className="brdr w-25"></div>
        <h2 className="mt-4">Trending</h2>
        <h2>{title}</h2>
        <h2>to watch now</h2>
        <p className={styles["trending-description"]}>{description}</p>
        <div className="brdr w-100"></div>
      </div>
    </div>
  );
}
