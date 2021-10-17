 import PropTypes from 'prop-types'
 import Button from './button'

const Header = ({title, onAdd, showAdd }) => {

    return (
        <header className='header'>
            <h1 >{title}</h1>
            <Button
             color= {showAdd?'red':'green'}
             text = {showAdd?'close':'Add'} onClick={onAdd}
            />
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
