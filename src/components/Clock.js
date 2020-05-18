import React, { Component } from 'react';

import ClockPart from './ClockPart';
import Button from './Button';

import './Clock.css';

class Clock extends Component {
    state = {
        day: '--',
        hour: '--',
        minutes: '--',
        seconds: '--',
        timeofDay: '',
        darkMode: true,
    };

    componentDidMount() {
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];

        this.interval = setInterval(() => {
            const date = new Date();
            const day = date.getDay();
            let hour = date.getHours();
            let minutes = date.getMinutes();
            let seconds = date.getSeconds();

            // convert Date objects hours to 12hr format
            if (hour < 12) {
                this.setState({ timeofDay: 'AM' });
            }
            if (hour >= 12) {
                hour = hour - 12;
                this.setState({ timeofDay: 'PM' });
            }
            if (hour === 0) {
                hour = 12;
                this.setState({ timeofDay: 'AM' });
            }

            if (minutes < 10) {
                minutes = `0${minutes}`;
            }
            if (seconds < 10) {
                seconds = `0${seconds}`;
            }

            this.setState({ day: days[day], hour, minutes, seconds });
        }, 1000);
    }

    handleDarkMode = (e) => {
        console.log('clicked');
        this.setState({ darkMode: !this.state.darkMode });
    };

    render() {
        const { day, hour, minutes, seconds, timeofDay, darkMode } = this.state;
        return (
            <div
                className={darkMode ? 'dark-mode' : 'light-mode'}
                style={clockContainer}
            >
                <Button
                    handleDarkMode={this.handleDarkMode}
                    darkMode={darkMode}
                />
                <div style={clock}>
                    <ClockPart part={day} label="Day" />
                    <span style={span}>:</span>
                    <ClockPart part={hour} label="Hour" />
                    <span style={span}>:</span>
                    <ClockPart part={minutes} label="Minutes" />
                    <span style={span}>:</span>
                    <ClockPart part={seconds} label="Seconds" />
                    <h2 style={h2}>{timeofDay}</h2>
                </div>
            </div>
        );
    }
}

const clockContainer = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    width: '800px',
    height: '150px',
    borderRadius: '4px',
    boxShadow: '0px 0px 10px 5px rgba(0, 0, 0, 0.15)',
};

const clock = {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
};

const span = {
    margin: '0 30px 10px 30px',
};

const h2 = {
    fontWeight: '200',
};

export default Clock;
