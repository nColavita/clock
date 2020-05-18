import React, { Component } from 'react';

class ClockPart extends Component {
    render() {
        const { part, subtitle } = this.props;
        return (
            <div style={style}>
                <h1 style={clockPartH1}>{part}</h1>
                <p style={clockPartP}>{subtitle}</p>
            </div>
        );
    }
}

const style = {
    textAlign: 'center',
    width: '110px',
};

const clockPartH1 = {
    fontSize: '3.5em',
    fontWeight: '200',
};

const clockPartP = {
    fontSize: '0.6em',
    fontWeight: '200',
};

export default ClockPart;
