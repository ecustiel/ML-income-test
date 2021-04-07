import React from 'react'
import {useLocation} from 'react-router-dom';
import {useFetch} from '../../hooks/useFetch';
import { DetailsFormat } from './DetailsFormat';


import {finalData} from '../../data/JsonFormatted';

export const DetailsScreen = () => {

    const location = useLocation();
    const path = location.pathname.split('/');
    const idItem = path[2];

    const {data, loading, error}= useFetch(`/api/items/${idItem}`);
    console.log(data);
    
    const itemDataFormatted = (finalData);
    
    if(loading === false) {
    const itemData = data[0];
    const descriptionData = data[1];
    const mergedArrays = Object.assign(itemData, descriptionData);
    console.log(mergedArrays);
    
    itemDataFormatted.title = mergedArrays.title;
    itemDataFormatted.price.currency = mergedArrays.currency_id;
    itemDataFormatted.price.amount = mergedArrays.price;
    itemDataFormatted.picture = mergedArrays.thumbnail;
    itemDataFormatted.condition = mergedArrays.condition;
    itemDataFormatted.free_shipping = mergedArrays.shipping.free_shipping;
    itemDataFormatted.sold_quantity = mergedArrays.sold_quantity;
    itemDataFormatted.description = mergedArrays.plain_text;
    
    }


    return (
        <div className='detailsScreen__main'>
        
        <div className='detailsScreen__box'>
            <DetailsFormat items={itemDataFormatted} />
            
        </div>
        
    </div>
    )
}
