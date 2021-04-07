import { renderHook, act } from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";


describe('Pruebas al hook useForm', () => {

    const initialVal = {
        name: 'Eduardo',
        email: 'ecustiel@gmail.com'
    };


    test('Regresa el formulario por defecto', () => {
        
        const { result } = renderHook( () => useForm(initialVal) );
        const [ formValues, handleInputChange, reset ] = result.current;

        expect( formValues ).toEqual(initialVal);
        expect( typeof handleInputChange ).toBe( 'function' );
        expect( typeof reset ).toBe( 'function' );
        
    });

    test('Cambiando el Name del Formulario', () => {
        
        const {result} = renderHook( () => useForm(initialVal) );
        const [, handleInputChange] = result.current;

        act( () => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Eduardo'
                }
            });

        });

        const [ formValues ] = result.current;
        expect( formValues ).toEqual({...initialVal, name: 'Eduardo' });

    });


    test('Vuelve el Formulario a cero con el Reset', () => {
        
        const { result } = renderHook( () => useForm(initialVal) );
        const [ ,handleInputChange, reset ] = result.current;

        act( () => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Melissa'
                }
            });
            reset();
        });

        const [ formValues ] = result.current;
        expect( formValues ).toEqual( initialVal );
        
    })
    
    
    
})