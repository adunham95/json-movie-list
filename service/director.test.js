import 'regenerator-runtime'
import { getAllDirectors, getSingleDirector } from './director'

test('Get Single Director', async () => {
    const director = await getSingleDirector('Alfred Hitchcock');
    expect(director.name).toBe('Alfred Hitchcock');
    expect(director.birthname).toBe('Alfred Joseph Hitchcock');
    expect(director.birthdate).toBe('1899-08-13');
    expect(director.birthplace).toBe('Leytonstone, Essex, England');
});

test('Missing Single Director', async () => {
    const director = await getSingleDirector('s');
    expect(director).toBe(null)
})

test('Get All Directors', async () => {
    const directors = await getAllDirectors();
    expect(directors).toEqual(
        expect.arrayContaining([
            expect.objectContaining({
                name: "Alfred Hitchcock"
            })
        ])
    )
});