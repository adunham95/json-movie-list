import fs from "fs"
import path from "path"
import { convertToID } from "../functions.js"
const __dirname = path.resolve(path.dirname(''));

export async function getSingleActor(name){
    try {
        const pathName = path.resolve(__dirname, `./actors/${convertToID(name)}.json`);
        if(!fs.existsSync(pathName)) {
          return null
        }
        else {
          const data = await fs.readFileSync(pathName, 'utf8');
          console.log(data)
          return JSON.parse(data)
        }
      } catch (err) {
        console.error(err)
        return err
      }
}

export async function getAllActors(){
    try {
        const directoryPath = path.join(__dirname, './actors/');

        const data = await fs.readdirSync(directoryPath).map(file => {
            const pathName = path.resolve(__dirname, `./actors/${file}`);
            const actorData = fs.readFileSync(pathName, 'utf8');
            return JSON.parse(actorData)
        });
        
        return data
      } catch (err) {
        console.error(err)
        return err
      }
}