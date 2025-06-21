import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [cats, setCats] = useState([])
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    axios.get('https://api.thecatapi.com/v1/images/search?limit=10&has_breeds=1')
      .then(response => {
        console.log('Cat API:', response.data)
        setCats(response.data)
      })
      .catch(error => console.error("Cat API error:", error))

     axios.get('https://dog.ceo/api/breeds/image/random/10')
      .then(response => {
        console.log('Dog API response:', response.data);
        setDogs(response.data.message);
      })
      .catch(error => {
        console.error("Dog API error:", error);
      });
  }, []);
  return (
    <>
      <div>
  <h1 className='animal'>Animal Explorer using Axios API</h1>
          <h1>Cats</h1>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {cats.map(item => (
            <li key={item.id}>
              <img src={item.url} alt="Cat" width="300" />
              <p><strong>Width:</strong> {item.width}px</p>
              <p><strong>Height:</strong> {item.height}px</p>
            </li>
          ))}
        </ul>

         <h1>Dogs</h1>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {dogs.map((url, idx) => (
            <li key={idx}>
              <img src={url} alt="Dog" width="300" />
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App;

