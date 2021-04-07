import React from 'react'
import { useHistory } from "react-router-dom";

export const ResultsFormat = (items) => {
    
    const history = useHistory();

    const handleClick = (e) => {
        e.preventDefault();
        const id = items.items[0].id;
        history.push(`/items/${id}`);
    }
    

    return (
        <>
        <div className='resultsFormat__container pointer' onClick={handleClick} >
            <div className='resultsFormat__imgContainer'>
                <img src={items.items[0].picture} alt='prodImg' className='resultsFormat__imgContainer-img' />
            </div>
            <div className='resultsFormat'>
            <div className='resultsFormat__detsContainer'>
                <p className='resultsFormat_detsContainer-price'>$. {items.items[0].price.amount}</p>
                {
                    (items.items[0].free_shipping) &&
                        <img src='./Assets/ic_shipping.png' alt='shipp' className='resultsFormat_detsContainer-img' />    
                }
            </div>
            
            <div className='resultsFormat__titleContainer'>
                <p className='resultsFormat__titleContainer-title'>{items.items[0].title}</p>
            </div>
            </div>
            <div className='resultsFormat__locContainer'>
                <p className='resultsFormat__locContainer-loc'>{items.items[0].loc}</p>
            </div>
            
            
        </div>
        </>
    )
}
