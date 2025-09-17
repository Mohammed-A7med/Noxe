import Styles from "./Loading.module.css";

export default function Loading() {
  return (
    <div
      className={`vh-100 ${Styles["bg-loading"]} d-flex justify-content-center align-items-center`}
    >
      <span className={Styles.loader} role="status" aria-busy="true"></span>
    </div>
  );
}
