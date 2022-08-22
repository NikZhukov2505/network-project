import React, { useEffect, useState } from 'react';
import styles from '../../Users/Users.module.css'
import cn from 'classnames'

const Paginator = ({ totalItemsCount, pageSize, onPageChanged, currentPage, portionSize = 50 }) => {
    const pagesCount = Math.ceil(totalItemsCount / pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    const [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * pageSize

    useEffect(() => {
        setPortionNumber(Math.ceil(currentPage / portionSize))
    }, [currentPage])

    return (
        <div className={styles.btns__wrapper}>
            {
                portionNumber > 1 &&
                <button onClick={() => setPortionNumber(portionNumber - 1)}>PREV</button>
            }
            {
                pages
                    .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map((p) => (
                        <button
                            key={p}
                            onClick={() => onPageChanged(p)}
                            className={cn({
                                [styles.selectedPage]: currentPage === p
                            }, styles.pageNumber)}>{p}</button>
                    ))
            }
            {
                portionCount > portionNumber &&
                <button onClick={() => setPortionNumber(portionNumber + 1)}>NEXT</button>
            }
        </div>
    );
};

export default Paginator;