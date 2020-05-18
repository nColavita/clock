import React, { Component } from 'react';

class ClockPart extends Component {
    render() {
        const { part, subtitle } = this.props;
        return (
            <div style={style}>
                <h1 style={style.h1}>{part}</h1>
                <p style={style.p}>{subtitle}</p>
            </div>
        );
    }
}

const style = {
    textAlign: 'center',
    width: '110px',
    h1: {
        fontSize: '3.5em',
        fontWeight: '200',
    },
    p: {
        color: '#666666',
        fontSize: '0.5em',
        fontWeight: '200',
    },
};

export default ClockPart;
