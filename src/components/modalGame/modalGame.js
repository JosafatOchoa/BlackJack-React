import ButtonGame from "../buttons/buttons"
import styles from "./modalGame.module.scss"

const ModalGame = ({descript,title,handleButt}) => {

    return (
        <div className={`${styles['container-modal']}`}>
            <div className={`${styles['container-modal__box-description']}`}>
                <span className={`${styles['container-modal__box-description__text']}`}>{descript}</span>
                <ButtonGame  text={title} handle={handleButt} classtype={'modal-btn'} />
            </div>
        </div>
)


}

export default ModalGame