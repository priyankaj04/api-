import React from "react";
import Time from "../../components/time/time";
import Weather from "../../components/weather/weather";
import Date from "../../components/date/date"
import "./topbar.css";

export default function topbar() {
        return (
                <>
                        <div className="topbar">
                                <div className = "top-container">
                                <div className="datetime">
                                        <Date />
                                        <Time />
                                </div>
                                <Weather />
                                </div>
                                </div>
                </>
        );
}
