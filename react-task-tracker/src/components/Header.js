 import PropTypes from 'prop-types'
 import Button from './button'
 import {useLocation} from 'react-router-dom'
 import Accordion from './Accordion'

const Header = ({title, onAdd, showAdd }) => {
    const location = useLocation ()
    return (
        <header className='header'>
            <h1 >{title}</h1>
           { location.pathname === '/' &&
               <Button
               color= {showAdd?'red':'green'}
               text = {showAdd?'close':'Add'} onClick={onAdd}
              />
           } 
           <Accordion/>
        </header>
    )
}

Header.defaultProps ={
    title: 'Task Tracker',
}
Header.propTypes = {
    title:PropTypes.string,
}

//CSS in JS
// const HeadingStyle = {
//     color:'red', 
//     backgroundColor:'blue'
// }

export default Header
