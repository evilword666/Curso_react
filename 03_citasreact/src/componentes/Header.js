
import React from 'react';
import PropTypes from 'prop-types';

const Header = props =>{
    return(
        <h1 className="text-center">{props.titulo}</h1>
    )
}


Header.propTypes = {
    titulo:PropTypes.string.isRequired
}


export default Header;