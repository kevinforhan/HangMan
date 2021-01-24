import React from 'react'

const WrongLetters = ({wrongLetters}) => {
    return (
        <div className="wrong-letters-container">
        <div>
        {wrongLetters.length > 0 && <p>Inaccurate</p>}
        {wrongLetters
        .map((letter, i) => <span key={i}>{letter}</span>)
        .reduce((prev, current) => prev === null ? [current] : [prev, ", ", current], null)}
        </div>
      </div>
    ) 
}

export default WrongLetters