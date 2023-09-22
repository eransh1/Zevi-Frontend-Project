
import styles from "./Navbar.module.css"
import img from "../../images/brandLogo.svg"
import { useNavigate } from "react-router-dom"

const Navbar = () => {
  const navigate=useNavigate()
  return (
    <section className={styles.outerCont}>
       <img onClick={()=>navigate("/")} className={styles.brandImage} src={img} alt="brandLogo" /> 
    </section>
  )
}

export default Navbar