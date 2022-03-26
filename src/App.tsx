import axios from 'axios';
import md5 from 'md5';
import { useEffect } from 'react';

const baseURL = 'http://gateway.marvel.com/v1/public/characters?';

const publicKey = 'c20349cf1844bd5bbb82bc6eeafc8dce';

const privateKey = 'abff237a6fb9c1f41edb1a9e7bd6ec3bbaf1c43c';

const time = Number(new Date());

const hash = md5(time + privateKey + publicKey);



export function App() {

  useEffect(() => {
    axios.get(
      `http://gateway.marvel.com/v1/public/characters?ts=${time}&apikey=${publicKey}&hash=${hash}`,
    )
    .then(response => console.log(response.data.data.results))
    .catch(err => console.log(err));
  }, [])

  return (
    <h1>hello world</h1>
  )
}


