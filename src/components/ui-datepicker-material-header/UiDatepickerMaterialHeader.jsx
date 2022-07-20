import PropTypes from 'prop-types'
import UiHeader from '../../models/UiHeader'

UiHeader.propTypes = {
    uiHeader: PropTypes.instanceOf(UiHeader).isRequired
} 

export default function UiDatepickerMaterialHeader(props) {
    const {uiHeader} = props;
    return (
        <>
    <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">{uiHeader.weekday}</div>
        <div className="ui-datepicker-material-date">
            <div className="ui-datepicker-material-day-num">{uiHeader.day}</div>
            <div className="ui-datepicker-material-month">{uiHeader.month}</div>
            <div className="ui-datepicker-material-year">{uiHeader.year}</div>
        </div>
    </div>
    <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
        <span className="ui-datepicker-month">{uiHeader.monthName}</span>&nbsp;<span className="ui-datepicker-year">{uiHeader.year}</span>
        </div>
    </div>
    </>
    )
}