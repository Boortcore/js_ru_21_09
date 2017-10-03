import React from 'react'

import DayPicker from 'react-day-picker'
import DayRange from './DayRange'
import 'react-day-picker/lib/style.css'


class CustomDayPicker extends React.Component {

    state = {
        selectedDay: new Date(),
        previousSelectedDay: new Date()
    };

    handleDayClick = day => {
        this.setState(state => {

            return {
                selectedDay: day,
                previousSelectedDay: state.selectedDay
            }
        });
    };

    render () {
        return (
            <div>
                <DayPicker
                    onDayClick={this.handleDayClick}
                    disabledDays={[
                        {
                          after: new Date(2017, 9, 30),
                          before: new Date(2017, 9, 2),
                        },
                    ]}
                />

                <DayRange current={this.state.selectedDay} previous={this.state.previousSelectedDay} />
            </div>
        )
    }

}

export default CustomDayPicker