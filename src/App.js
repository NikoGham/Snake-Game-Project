import './App.css'
import { useState } from 'react'
import Box from './components/activeItems/Box'

function App() {
	// State for position of box
	const [ position, setPosition ] = useState({
		top: 0,
		bottom: 0,
		left: 0,
		right: 0
	})

	// Destructuring
	const { top, bottom, left, right } = position

	// test to move item
	const moveDown = (e) => {
		setPosition({ ...position, top: position.top + 50 })
	}

	const moveUp = (e) => {
		setPosition({ ...position, top: position.top - 50 })
	}
	const moveLeft = (e) => {
		setPosition({ ...position, left: position.left - 50 })
	}
	const moveRight = (e) => {
		setPosition({ ...position, left: position.left + 50 })
	}


	let detectKey = (e) => {
    switch(e.keyCode) {
      case 40:
        moveDown()
        break
      case 38:
        moveUp()
        break
      case 37:
        moveLeft()
        break
      case 39:
        moveRight()
        break
      default:
      break
    }
  }
  
  document.onkeydown = detectKey


	return (
		<div className='container'>
			<h1 className='text-center'>Snake Game</h1>

			<Box top={top} bottom={bottom} left={left} right={right} />

			<button className='btn btn-dark' onClick={moveDown}>
				Move Down
			</button>
			<button className='btn btn-dark' onClick={moveUp}>
				{' '}
				Move Up{' '}
			</button>
			<button className='btn btn-dark' onClick={moveLeft}>
				Move Left
			</button>
			<button className='btn btn-dark' onClick={moveRight}>
				Move Right
			</button>
		</div>
	)
}

export default App
