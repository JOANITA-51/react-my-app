 import PropTypes from 'prop-types'

const Header = ({title}) => {
    return (
        <header>
            <h1 style ={HeadingStyle}>{title}</h1>
        </header>
    )
}

Header.defaultProps ={
    title: 'Task Tracker',
}
Header.propTypes = {
    title:PropTypes.string,
}
const HeadingStyle = {
    color:'red', backgroundColor:'blue'
}

export default Header
