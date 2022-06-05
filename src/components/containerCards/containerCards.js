
import styles from './containerCards.module.scss'

const CardGame = ({cardimg}) => {



   
    return (
               <img className={`${styles['imgCard']}`} src={cardimg} alt='carta'/>
    )

}


export default CardGame