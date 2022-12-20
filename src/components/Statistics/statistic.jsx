
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