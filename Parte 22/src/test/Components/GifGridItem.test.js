import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';


describe('Pruebas en <GifGridItem/>', () => {

    const title = 'Un titulo';
    const url = 'https://localhost/algo.jpg';

    const wrapper = shallow(<GifGridItem
        title={title}
        url={url}
    />)
    test('Debe de mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })
    test('debe tener un parrafo con el title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);

    })

    test('Debe tener la imagen igual que al props', () => {
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url)
        expect(img.prop('alt')).toBe(title)
    })

    test('debe de tener la misma clase', () => {
        const div = wrapper.find('div')
        const className = div.prop('className')
        expect(className.includes('animate__bounce')).toBe(true)
    })


})
