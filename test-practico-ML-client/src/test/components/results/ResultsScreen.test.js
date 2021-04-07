import React from 'react';
import { shallow } from 'enzyme';
import {renderHook} from '@testing-library/react-hooks';
import {ResultsScreen} from '../../../components/results/ResultsScreen';
import { useFetch } from '../../../hooks/useFetch';
jest.mock('../../../components/results/ResultsScreen')


describe('Haciendo pruebas del componente <ResultsScreen />', () => {
    
    const location = {hash: "",
    key: "97q50b",
    pathname: "/items",
    search: "?search=ipad",
    state: undefined}
    
    

    test('Debe mostrar el componente <ResultsScreen />', () => {

      location.pathname='/item';
      const wrapper = shallow(<ResultsScreen />);
      expect(wrapper).toMatchSnapshot(); 
    })

    test('Usando el useFetch', async() => {
        
       const {result, waitForNextUpdate} = renderHook(() => useFetch('https://api.mercadolibre.com/sites/MLA/search?q=iphone'));
        await waitForNextUpdate();
        
       const {data, loading, error} = result.current;
       expect(data).not.toBe({});
       expect(loading).toBe(false);
       expect(error).toBe(null);
       
        
    })
    
    test('Debe fallar ya que la url es incorrecta', async() => {
        const {result, waitForNextUpdate} = renderHook(() => useFetch('https://api.mercadolibre.com/sites/MLAs/search?q=iphone'));
        await waitForNextUpdate();
        
        
        

       const {data, loading, error} = result.current;
       expect(data).not.toBe(null);
       expect(loading).toBe(false);
       expect(error).toBe('No se pudo cargar la informacion');
    })
    
    
})
