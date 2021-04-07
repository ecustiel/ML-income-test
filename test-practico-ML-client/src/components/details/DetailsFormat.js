import React from 'react'


export const DetailsFormat = ({items}) => {

    console.log(items);
    
    return (
        
        <div className='detailsFormat__main'>
            <div className='detailsFormat__imgContainer'>
                <img src={items.picture} alt='iphone12' className='detailsFormat__imgContainer-img' />
            </div>
            
            <div className='detailsFormat__infoContainer'>
                <span className='detailsFormat__infoContainer-state'>{items.condition} - {items.sold_quantity}</span>
                <h1 className='detailsFormat__infoContainer-title'>{items.title}</h1>
                <span className='detailsFormat__infoContainer-price'>$. {items.price.amount}</span>
                <button className='detailsFormat__infoContainer-btn'>Comprar</button>
            </div>
            
            <div className='detailsFormat__detailsContainer'>
                <h2>Descripcion del Producto</h2>
                <span>{items.description}</span>
                
            </div>
        </div>
        
    )
}
