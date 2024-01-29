import GitHubCalendar from "react-github-calendar";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const Calendar = () => {
    const { gitHubTheme, mainColor } = useContext(AppContext);
    return (
        <div className="centralizer d-flex j-center pb-3 pt-3">
            <GitHubCalendar
                color={mainColor}
                theme={gitHubTheme}
                username="HelderXavierL"
                fontSize={10}
            />
        </div>
    );
};

export default Calendar;
