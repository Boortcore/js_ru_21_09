import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import { connect } from 'react-redux'
import { changeDateRange } from '../../AC'
import 'react-day-picker/lib/style.css'

class DateRange extends Component {

    handleDayClick = (day) => {
        let range = Object.assign({}, this.props.dates)
        this.props.changeDateRange(DateUtils.addDayToRange(day, range))
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
export default connect(mapStateToProps, { changeDateRange })(DateRange)