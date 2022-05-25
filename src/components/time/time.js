import './time.css';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Clock from "react-live-clock";

export default function Time() {

        return (
                <>
                        <div className = "time">
                                <AccessTimeIcon />
                                <div className="time-container">
                                <div className="current-time">
                        <Clock format="HH:mm:ss" interval={1000} ticking={true} />
                </div>
                                </div>
                        </div>
                </>
        );
}
