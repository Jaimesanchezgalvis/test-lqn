import { getGifs } from '../../helpers/getGifs';

describe('Pruebas con getGifs Fecth', () => {

    test('debe traer 10 elementos', async () => {
        const gif = await getGifs('One Punch');
        expect(gif.length).toBe(10)
    })

    test('debe traer elementos', async () => {
        const gif = await getGifs('');
        expect(gif.length).toBe(0)
    })
})
