import React, {Component} from 'react'
import PropTypes from 'prop-types'

function DayRange(props) {
    let minDate = new Date(Math.min(props.current, props.previous));
    let maxDate = new Date(Math.max(props.current, props.previous));

    return (
        <div>
            <table style={{border: '1px solid black'}}>
                <tbody>
                    <tr>
                        <th>First Date</th>
                        <th>Second Date</th>
                    </tr>
                    <tr>
                        <TableCell>{minDate.toString()}</TableCell>
                        <TableCell>{maxDate.toString()}</TableCell>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

function TableCell (props) {
   return <td style={{border: '1px solid black'}}>{props.children}</td>
}
export default DayRange