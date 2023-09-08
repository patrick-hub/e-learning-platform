import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import PropTypes from "prop-types"
import enUS from "date-fns/locale/en-US";
const locales = {
    "en-US": enUS,
};
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const events = [
    {
        title: "Big Meeting",
        allDay: true,
        start: new Date(2023, 9, 6),
        end: new Date(2023, 9, 4),
    },
    {
        title: "Vacation",
        start: new Date(2023, 9, 7),
        end: new Date(2023, 9, 10),
    },
    {
        title: "Conference",
        start: new Date(2023, 10, 20),
        end: new Date(2023, 10, 23),
    },
];

function Calendarcomp({ height }) {
  

    return (
        <>
            
            <Calendar localizer={localizer} events={events} startAccessor="start" endAccessor="end" style={{ height }}/>

            
        </>
    );
}

Calendarcomp.propTypes = {
    height: PropTypes.string
}

export default Calendarcomp;