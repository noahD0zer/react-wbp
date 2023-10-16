import NavBar from './NavBar'
import { useState } from 'react'
const Header = (props) => {
  const [clicked, setClicked] = useState(true)
  const onClick = () => {
    setClicked(!clicked)
  }
  props.clickData(clicked)
  
  return (
    <header>
      <NavBar clicked={clicked} onClick={onClick} />
    </header>
  )
}

export default Header
