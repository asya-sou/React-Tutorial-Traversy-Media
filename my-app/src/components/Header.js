import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
    const onClick = () => {
        console.log('click!')
    }
    return (
        <header className='header'>
            <h1>{title}</h1> 
            <Button color = 'green' text='Add' onClick= {onClick}/>

        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
} 

Header.propTypes = {
    title: PropTypes.string.isRequired,
}



/*
//passing props from app js
const Header = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>    
        </header>
    )
}
*/

/* 
//2 ways to style, CSS in JS
const Header = ({title}) => {
    return (
        <header>
            <h1 style ={headingStyle}>{title}</h1>    

            <h1 style={{color: 'yellow', backgroundColor: 'green'}}>{title}</h1>    
        </header>
    )
} */

/* const headingStyle = {
    color: 'orange',
    backgroundColor: 'gray'
} */

export default Header
