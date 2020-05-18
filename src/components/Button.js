import React, { Component } from 'react';

class Button extends Component {
    render() {
        const { handleDarkMode, darkMode } = this.props;
        return (
            <div style={style} onClick={handleDarkMode}>
                <div
                    style={buttonBorder}
                    className={
                        darkMode ? 'button-border-dark' : 'button-border-light'
                    }
                >
                    <div
                        style={button}
                        className={darkMode ? 'button-dark' : 'button-light'}
                    ></div>
                </div>
            </div>
        );
    }
}

const style = {
    position: 'absolute',
    right: '10px',
    top: '10px',
    cursor: 'pointer',
};

const buttonBorder = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
