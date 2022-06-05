
import { useState } from 'react'
import ButtonGame from '../../components/buttons/buttons'
import CardGame from '../../components/containerCards/containerCards'
import ModalGame from '../../components/modalGame/modalGame'
import arrayCards from '../complements/objectCards'
import styles from './blackjack.module.scss'


const BlackjackPage = () => {


    let [cardGame, setCardGame] = useState([]);
    let [cardValue, setCardValue] = useState()
    let [stopGame, setStopGame] = useState(false)

    let [cardGameComputer, setCardGameComputer] = useState([]);
    let [cardValueComputer, setCardValueComputer] = useState(0)

    const array = cardGame
    const arrayComputer = cardGameComputer
    let puntuation = 0
    let puntuationComputer = 0


    const handleNewcard = () => {

        array.push(arrayCards[Math.floor(Math.random() * arrayCards.length)])
        cardGame.map(card => puntuation += card.valor)
        setCardGame(array)
        setCardValue(puntuation)

    }




    const handleNewGame = () => {

        setCardGame([])
        setCardValue(0)
        setStopGame(false)
        setCardGameComputer([])
        setCardValueComputer(0)

    }

    const computerGame = () => {

        for (let i = 0; i < 3; i++) {
            arrayComputer.push(arrayCards[Math.floor(Math.random() * arrayCards.length)])

        }

        return arrayComputer
    }

    const handleStopGame = () => {

        setStopGame(true)
        computerGame()
        cardGameComputer.map(c => puntuationComputer += c.valor)
        setCardGameComputer(arrayComputer)
        setCardValueComputer(puntuationComputer)

    }








    return (
        <div className={`${styles['container-game']}`}>
            <header className={`${styles['header']}`}>

                <ButtonGame text={'Nuevo Juego'} classtype={'header__btn-new-game'} handle={handleNewGame} />
                <ButtonGame text={'Pedir Carta'} classtype={'header__btn-new-card'} handle={handleNewcard} />
                <ButtonGame text={'Detener'} classtype={'header__btn-stop'} handle={handleStopGame} disable={cardGame.length > 0 && cardGameComputer.length === 0 ? false : true} />

            </header>

            <section className={`${styles['container-box-cards']}`}>

                <div className={`${styles['container-game-cards']}`}>
                    <h2 className={`${styles['container-game-cards__h2']}`}>Jugador 1</h2>
                    <span className={`${styles['container-game-cards__span']}`}> Puntuacion:{cardValue}

                    </span>

                    <div className={`${styles['container-game-cards__card']}`}>


                        {
                            cardGame.length === 0 ? (
                                <span>No tienes cartas en juego</span>
                            ) : cardGame.map(c => <CardGame cardimg={c.imagen} />)
                        }


                    </div>




                </div>

                <div className={`${styles['container-game-cards']}`}>
                    <h2 className={`${styles['container-game-cards__h2']}`}>Computadora</h2>
                    <span className={`${styles['container-game-cards__span']}`}>Puntuacion:{cardValueComputer}</span>


                    <div className={`${styles['container-game-cards__card']}`}>
                        {

                            stopGame ? (cardGameComputer.map(c => <CardGame cardimg={c.imagen} />)) : ""

                        }

                    </div>

                </div>



                {

                    cardValue === 21 ? (
                        <ModalGame descript={'GANASTE'} title={'Cerrar'} handleButt={handleNewGame} classButton={"container-modal__btn-modal"} />
                    ) : ""
                }
                {
                    cardValue > 21 ? (

                        <ModalGame descript={'PERDISTE'} title={'Cerrar'} handleButt={handleNewGame} />
                    ) : ""
                }

                {
                    cardValueComputer > 21 && cardValue < 22 ? (

                        <ModalGame descript={'GANASTE'} title={'Cerrar'} handleButt={handleNewGame} />
                    ) : ""
                }

                {
                    cardValue > cardValueComputer && cardValue < 22 && cardGameComputer.length > 0 ? (

                        <ModalGame descript={'GANASTE'} title={'Cerrar'} handleButt={handleNewGame} />
                    ) : ""
                }


                {

                    cardValueComputer === 21 && cardValue !== 21 ? (

                        <ModalGame descript={'PERDISTE'} title={'Cerrar'} handleButt={handleNewGame} />
                    ) : ""
                }

                {
                    cardValue < cardValueComputer && cardValueComputer < 21 ? (

                        <ModalGame descript={'PERDISTE'} title={'Cerrar'} handleButt={handleNewGame} />
                    ) : ""
                }

                {
                    cardValue === cardGameComputer ? (

                        <ModalGame descript={'EMPATE'} title={'Cerrar'} handleButt={handleNewGame} />
                    ) : ""
                }



            </section>


        </div>
    )
}

export default BlackjackPage