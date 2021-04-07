import React, {useState, useEffect} from 'react'
import {ResultsFormat} from './ResultsFormat';


export const ResultsList = ({items}) => {

    const [itemsArray, setitemsArray] = useState([])
    
    useEffect(() => {
        setitemsArray(items);
    }, [items]);
    
    return (
        <div>
            {
                itemsArray.map((item, index) =>  {
                    
                   return <ResultsFormat key={index}
                        {...item}
                        />
                }) 

                    }

        </div>
    )
}
