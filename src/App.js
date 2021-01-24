import './App.css'
import {useState} from 'react'
import Box from './components/activeItems/box'

function App() {

  // State for position of box
  const [ position, setPosition ] = useState({
    top: '', 
    bottom: '', 
    left: '',
    right:''
  })

  // Destructuring 
  const { top, bottom, left, right } = position

  // test to move item
  const moveUp = e => {
    alert('Hello World')
  } 

	return (
		<div className='container'>
			<h1 className="text-center">Snake Game</h1>

			<Box top={top} bottom={bottom} left={left} right={right} />

      <button className="btn btn-dark" onClick={moveUp}>Add one to top</button>
		</div>
	)
}

export default App
