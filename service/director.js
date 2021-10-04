import fs from "fs"
import path from "path"
import { convertToID } from "../functions.js"
const __dirname = path.resolve(path.dirname(''));

export async function getSingleDirector(name){
    try {
        const pathName = path.resolve(__dirname, `./directors/${convertToID(name)}.json`)
        const data = await fs.readFileSync(pathName, 'utf8');
        return JSON.parse(data)
      } catch (err) {
        console.error(err)
        return err
      }
}

export async function getAllDirectors(){
    try {
        const directoryPath = path.join(__dirname, './directors/');

        const data = await fs.readdirSync(directoryPath).map(file => {
            const pathName = path.resolve(__dirname, `./directors/${file}`);
            const actorData = fs.readFileSync(pathName, 'utf8');
            return JSON.parse(actorData)
        });
        
        return data
      } catch (err) {
        console.error(err)
        return err
      }
}