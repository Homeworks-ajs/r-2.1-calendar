import './calendar.css';
import UiDatepickerMaterialHeader from '../ui-datepicker-material-header/UiDatepickerMaterialHeader';
import UiDatepickerCalendar from '../ui-datepicker-calendar/UiDatepickerCalendar';
import CalendarUtills from '../../logic/CalendarUtills';

const calendarData = new CalendarUtills().getDateMap();
const dateList = new CalendarUtills().getMonthList();


function Calendar() {
    return <div className="ui-datepicker">
      <UiDatepickerMaterialHeader uiHeader={calendarData}/>
      <UiDatepickerCalendar dateList={dateList}/>
    </div>
}

export default Calendar;
