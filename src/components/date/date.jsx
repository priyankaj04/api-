import './date.css';
import * as React from 'react';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const dateBuilder = (d) => {
        let months = [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
        ];

        let days = [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
        ];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day}, ${date} ${month} ${year}`;
};

export default function date() {
        return (
                <>
                        <div className="date-container">
                                <CalendarTodayIcon />
                                <div className="current-date"> {dateBuilder(new Date())} </div>
                        </div>
                </>
        );
}
