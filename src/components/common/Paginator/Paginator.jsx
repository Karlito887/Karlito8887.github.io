import React, { useState } from 'react'
import s from './Paginator.module.css'
import Preloader from '../../../assets/images/preloader/Preloader'

const Paginator = ({ totalUsersCount, pageSize, currentPage, onPageChanged, portionSize = 10 }) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let [portionNumber, setPortionNumber] = useState(1)
    let portionCount = Math.ceil(pagesCount / portionSize)
    let firstNumberPortion = (portionNumber - 1) * portionSize + 1
    let lastNumberPortion = portionNumber * portionSize

    return <div className={s.wrapper}>
        {portionNumber > 1 &&
            <button onClick={() => { setPortionNumber(portionNumber - 1) }}>Prev...</button>}

        {pages
            .filter(p => p >= firstNumberPortion && p <= lastNumberPortion)
            .map(p => {
                return <span className={currentPage === p ? s.selectedPage : null, s.item}
                    onClick={() => { onPageChanged(p) }} key={p} >{p}</span>
            })}

        <button disabled={portionNumber === portionCount ? true : false}
            onClick={() => { setPortionNumber(portionNumber + 1) }}>Next...</button>
    </div>
}


export default Paginator 