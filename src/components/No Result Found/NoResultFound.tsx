import { MdSearchOff } from "react-icons/md"
import styles from "./NoResultFound.module.css"

const NoResultFound = () => {
  return (
   <section className={styles.outerCont}>
    <MdSearchOff className={styles.noSearchIcon}/>
<h1 className={styles.title}>No Result Found</h1>
<p className={styles.subInfo}>We cant find any item matching your search.</p>
   </section>
  )
}

export default NoResultFound