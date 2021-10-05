import "regenerator-runtime/runtime.js";
import { getAllActors, getSingleActor } from "./actor";

test('Get Single Actor Data', async () => {
    const emma = await getSingleActor('Emma Watson');
    expect(emma.name).toBe("Emma Watson");
    expect(emma.birthname).toBe("Emma Charlotte Duerre Watson");
    expect(emma.birthdate).toBe("1990-04-15");
    expect(emma.birthplace).toBe("Paris, France");
});

test('Get Missing Actor', async () => {
    const nullActor = await getSingleActor('s');
    expect(nullActor).toBe(null);
})

test('Get All Actors', async () => {
    const actors = await getAllActors();
    expect(actors).toEqual(
        expect.arrayContaining([
            expect.objectContaining({
                name: "Emma Watson"
            })
        ])
    )
});