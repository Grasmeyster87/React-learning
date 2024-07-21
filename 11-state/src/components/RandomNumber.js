import { useState } from 'react'

//import generateRandomNum from './11-state/src/utils/generateRandomNumber.js'

import generateRandomNum from '../utils/generateRandomNum'

function RandomNumber(props) {
    //console.log(props)
    console.log('rendered') // сколько раз была вызвана функция
    const { maxNum } = props
    const [randomNum, setRandomNum] = useState(generateRandomNum(maxNum))

    const changeRandomNum = () => {
        setRandomNum(generateRandomNum(maxNum))
    }


    return (
        <div>
            <h1>{randomNum}</h1>
            <button onClick={changeRandomNum}>Generate new random number</button>
        </div>
    )
}

export default RandomNumber