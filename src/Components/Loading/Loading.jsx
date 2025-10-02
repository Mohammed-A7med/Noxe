import Styles from "./Loading.module.css";

export default function Loading() {
  const loadingOverlayClasses = "vh-100 position-fixed top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center"
  return (
    <div
      className={`${Styles["bg-loading"]} ${loadingOverlayClasses}`}
    >
      <span className={Styles.loader} role="status" aria-busy="true"></span>
    </div>
  );
}
