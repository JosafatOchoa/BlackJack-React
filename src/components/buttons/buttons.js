import styles from './buttons.module.scss'



const ButtonGame = ({text, classtype,handle,disable}) =>{

     
        


     return(
        <button disabled={disable}  onClick={handle} className={`${styles[classtype]}`}>{text}</button>
     )  
    
    
}

export default ButtonGame