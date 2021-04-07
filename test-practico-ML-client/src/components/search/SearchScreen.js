import React from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import {useForm} from '../../hooks/useForm';


export const SearchScreen = ({history}) => {
    
    const location = useLocation(); 
    const {q = ''} = queryString.parse(location.search); 
    const [formValues, handleInputChange] = useForm({
        searchText: q
    });

    const { searchText} = formValues;

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`/items?search=${searchText}`);
    }

    const handleHome = (e) => {
        e.preventDefault();
        history.push('/');
    }    
    return (
        <div>
                <form onSubmit={handleSearch} >
                    <div className='searchScreen__container'>
                        <div className='searchScreen__imgContainer-left'>
                            <img src='./Assets/Logo_ML.png' className='searchScreen_imgContainer-left-logo pointer' alt='logo' onClick={handleHome}/>
                        </div>
                        <div className='searchScreen__inputContainer-right'>
                            <input
                                type='text'
                                placeholder='Nunca dejes de Buscar'
                                name='searchText'
                                value={searchText}
                                onChange={handleInputChange}
                                autoComplete='off'
                                className='searchScreen__input'
                                />

                            </div>
                    </div>
                </form>  
        </div>
    )
}
