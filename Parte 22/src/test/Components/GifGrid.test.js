import React from 'react';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import '@testing-library/jest-dom'
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas sobre <GifGrid/>', () => {

    const category = 'One Punch';

    // primera prueba
    test('debe mostrarse correctamente', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifGrid category={category} />)
        expect(wrapper).toMatchSnapshot()
    })

    test('debe de mostar items cuando se cargan imagenes useFetchGifs ', () => {

        const gifs = [{
            id: 'ABC',
            url : 'https//localhost/cualquiercosa.jpg',
            title: 'Cualquier cosa'
        }, {
                id: '123',
                url: 'https//localhost/cualquiercosa.jpg',
                title: 'Cualquier cosa'
            }, {
                id: '14423',
                url: 'https//localhost/cualquiercosa.jpg',
                title: 'Cualquier cosa'
            }]
        
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrid category={category} />)
        expect(wrapper).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe(false)
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    })

})