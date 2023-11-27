
import NoteTreino from '../../components/NoteTreino/NoteTreino'
import useTreino from '../../hooks/useTreino'
import styles from './NotePump.module.css'


const NotePump = ()=>{

    

    return(
        <section className={styles.section}>
          <div className={styles.container_note}>
            <NoteTreino tipo="costa"/>
            <NoteTreino tipo="peito"/>
            <NoteTreino tipo="perna"/>
          </div>
        </section>

    )
}


export default NotePump