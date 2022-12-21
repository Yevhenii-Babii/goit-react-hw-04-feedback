
import PropTypes from "prop-types";
import { List } from "./Statistic.styled"
export const Statistics = ({good, bad, neutral,total,positiveFeedback}) => {
    return ( 
        <List>
<li>Good:{good}</li>
<li>Bad:{bad}</li>
<li>Neutral: {neutral}</li>
<li>Total: {total} </li>
<li>Positive Feedback: {positiveFeedback}%</li>
        </List>
    )
}

Statistics.prototype = {
    good: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    total:PropTypes.number.isRequired,
    positiveFeedback: PropTypes.number.isRequired
}