import { readFile, readFileSync} from 'fs';
import {readdir} from "fs/promises";
import {join, resolve, dirname} from 'path';
import { convertToID } from '../functions.js';
const __dirname = resolve(dirname(''));

async function getFiles(path = "./") {
    const entries = await readdir(path, { withFileTypes: true });

    // Get files within the current directory and add a path key to the file objects
    const files = entries
        .filter(file => !file.isDirectory())
        .map(file => ({ ...file, path: path + file.name }));

    // Get folders within the current directory
    const folders = entries.filter(folder => folder.isDirectory());

    for (const folder of folders)
        /*
          Add the found files within the subdirectory to the files array by calling the
          current function itself
        */
        files.push(...await getFiles(`${path}${folder.name}/`));

    return files;
}

export async function getAllMovies(){
    try {
        const directoryPath = join(__dirname, './movies/');

        const data = await (await getFiles(directoryPath)).map(f => {
            console.log(f.path)
            const actorData = readFileSync(f.path, 'utf8');
            console.log(actorData)
            return JSON.parse(actorData)
        })
        console.log(data)
        
        return data
      } catch (err) {
        console.error(err)
        return err
      }
}

export async function getMovieByTitle(movieName){
    try {
        const directoryPath = join(__dirname, './movies/');

        const data = await (await getFiles(directoryPath)).filter(f => f.name === `${convertToID(movieName)}.json`).map(f => {
            const movieData = readFileSync(f.path, 'utf8');
            return JSON.parse(movieData)
        })

        return data
    
    } catch (error) {
        console.error(error);
        return error
    }
}

export async function getMovieByActor(actorName){
    try {
        const directoryPath = join(__dirname, './movies/');

        const data = await (await getFiles(directoryPath))
        .map(f => {
            const movieData = readFileSync(f.path, 'utf8');
            return JSON.parse(movieData)
        })
        .filter(f => 
            f.actors.includes(actorName)
        )

        return data
    
    } catch (error) {
        console.error(error);
        return error
    }
}