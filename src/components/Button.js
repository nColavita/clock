import React, { Component } from 'react';

class Button extends Component {
    render() {
        const { handleDarkMode, darkMode } = this.props;
        return (
            <div
                className={
                    darkMode ? 'button-border-dark' : 'button-border-light'
                }
                style={buttonContainer}
                onClick={handleDarkMode}
            >
                <div
                    style={button}
                    className={darkMode ? 'button-dark' : 'button-light'}
                ></div>
            </div>
        );
    }
}

const buttonContainer = {
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: '10px',
    top: '10px',
    width: '20px',
    height: '20px',
    borderRadius: '50%',
};

const button = {
    width: '75%',
    height: '75%',
    borderRadius: '50%',
};

export default Button;
