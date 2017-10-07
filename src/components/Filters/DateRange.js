import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import {connect} from 'react-redux'
import { changeDateInterval } from '../../AC'
import 'react-day-picker/lib/style.css'

class DateRange extends Component {
    state = {
        from: null,
        to: null
    }

    handleDayClick = (day) => {
        this.setState(DateUtils.addDayToRange(day, this.state), () => {
            this.props.changeDateInterval(this.state)
        })
    }

    render() {
        const { from, to } = this.props.dates
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`
        return (
            <div className="date-range">
                <DayPicker
                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick={ this.handleDayClick }
                />
                {selectedRange}
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        dates: state.dates
    }
}
export default connect(mapStateToProps, { changeDateInterval })(DateRange)