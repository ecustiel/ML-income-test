import React from 'react'
import {useLocation} from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import {ResultsList} from './ResultsList';


export const ResultsScreen = () => {

    const location = useLocation();
    const query = location.search.split('=');
    const queryToSearch = query[1];
    
    const {data, loading, error} =  useFetch(`/api/items?q=:${encodeURI(queryToSearch)}`);
    console.log(data);
    
    
    
    
    const itemToSend = [];

    if(loading === false){
     for (let i = 0; i < data.results.length; i++) {
        
        if (i < 4) {
           itemToSend.push({
               name: 'Eduardo',
               lastname: 'Custiel',
               categories:[data.results[i].category_id],
               items: [{
                 id: data.results[i].id,
                 title: data.results[i].title,
                 price: {
                     currency: data.results[i].currency_id,
                     amount: data.results[i].price
                 },
                 picture: data.results[i].thumbnail,
                 condition:  data.results[i].condition,
                 free_shipping: data.results[i].shipping.free_shipping,
                 loc: data.results[i].address.state_name
               }]
           });
        }
    
    }   
    }

    return (
        <div className='resultsScreen__main'>
            <div className='resultsScreen_path'>
                <span className='resultsScreen_path-text'></span>
            </div>
            <div className='resultsScreen__box'>
                
                        <ResultsList items={itemToSend} />
                      
            </div>
            
        </div>
    )
}
