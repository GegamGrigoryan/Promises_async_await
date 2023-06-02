
// import json from './parser';
// import read from './reader';
 function json(data) {
  return new Promise((resolve, reject) => {
    // эмуляция обработки ArrayBuffer
    setTimeout(() => {
      resolve(String.fromCharCode.apply(null, new Uint16Array(data)));
    }, 500);
  });
}
 function read() {
  return new Promise((resolve, reject) => {
    // эмуляция чтения файла
    setTimeout(() => {
      const data = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
      return ((input) => {
        const buffer = new ArrayBuffer(input.length * 2);
        const bufferView = new Uint16Array(buffer);
        for (let i = 0; i < input.length; i++) {
          bufferView[i] = input.charCodeAt(i);
        }
        resolve(buffer);
      })(data);
    }, 1000);
  });
}

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
