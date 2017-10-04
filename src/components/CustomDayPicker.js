import React from 'react'

import DayPicker, { DateUtils } from 'react-day-picker'
import moment from 'moment'
import 'react-day-picker/lib/style.css'


class CustomDayPicker extends React.Component {

    state = {
        range: {
            from: null,
            to: null
        }
    };

    handleDayClick = day => {
        this.setState({range: DateUtils.addDayToRange(day, this.state.range)});
    };

    render () {
        const {to, from} = this.state.range
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
                    selectedDays={
                        [from, { from, to}]
                    }
                />
                <div>
                    {from && to ? `${from.toDateString()} - ${to.toDateString()}` : 'Выберите диапазон'}
                </div>
            </div>
        )
    }

}

export default CustomDayPicker