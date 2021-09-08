import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme'
import AddCategory from '../../components/AddCategory'

describe('Pruebas en AddCategory', () => {
// constantes de las pruebas
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);
// reinicar ciclo de vida y que se reinicialice
    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    })
// primer test
    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot()
    })
// segundo test
    test('debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola mundo'
        input.simulate('change', { target: { value } })
        expect(wrapper.find('p').text().trim()).toBe(value)
    })
// tercer test
    test('No debe postear la informacion onsubmit', () => {
        wrapper.find('form').simulate('submit', { preventDefault() { } })
        expect(setCategories).not.toHaveBeenCalled();
    })
// cuarto test
    test('debe de llamar el setCategories y limpiar la caja de texto', () => {
        let value = 'Hola mundo';
        //   1. simular el imputChange
        wrapper.find('input').simulate('change', { target: { value } })
        //   2. simular el submit
        wrapper.find('form').simulate('submit', { preventDefault() { } })
        //   3. setCategories se debe haber llamado
        expect(setCategories).toHaveBeenCalled();
        //   4. el valor del input debe de estar '' vacio
        expect(wrapper.find('input').prop('value')).toBe('');
    })
})
