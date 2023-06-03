import json from './parser';
import read from './reader';

class GameSavingLoader {
  async load() {
    const data = await read();
    const value = await json(data);
    const objRes = await JSON.parse(value);
    return await objRes;
  }
}

(async () => {
  try {
    new GameSavingLoader().load().then((Response) => Response);
  } catch (error) {
    console.log(error);
  }
})();
