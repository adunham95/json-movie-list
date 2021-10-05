import 'regenerator-runtime';
import { getAllMovies, getMovieByActor, getMovieByDirector, getMovieByTitle } from './movie';

test('List all movies', async () => {
    const movies = await getAllMovies();
    expect(movies).toEqual(
        expect.arrayContaining([
            expect.objectContaining({
                name: "Frankenstein"
            }),
            expect.objectContaining({
                name: "The Wizard of Oz"
            })
        ])
    )
});

test('Get Movies by Name', async () => {
    const movie = await getMovieByTitle('the-wizard-of-oz');
    expect(movie).toEqual(
        expect.arrayContaining([
            expect.objectContaining({
                name: "The Wizard of Oz"
            })
        ])
    )
})

test('Get Movies by Actor', async () => {
    const movies = await getMovieByActor('Robert Downey Jr');
    expect(movies).toEqual(
        expect.arrayContaining([
            expect.objectContaining({
                name: "Iron Man"
            })
        ])
    )
})

test('Get Movies by Director', async () => {
    const movies = await getMovieByDirector('Christopher Nolan');
    expect(movies).toEqual(
        expect.arrayContaining([
            expect.objectContaining({
                name: "Batman Begins"
            })
        ])
    )
})