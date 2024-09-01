import { RotatingLines } from "react-loader-spinner"
import styles from "./Loader.module.css";
function Loader() {
  return (
    <div className={styles.loader}><RotatingLines width="100px" height="100px" strokeWidth="2" strokeColor="darkcyan"/></div>
  )
}

export default Loader