import PropTypes from "prop-types";

export const FeedbackOptions = ({options,  onLeaveFeedback}) => {
return(
    <div>
       {Object.keys(options).map(id=> (
        <button onClick={()=> onLeaveFeedback(id)}
        key={id}>
            {id}
        </button>
        ))}
    </div>
)
}

FeedbackOptions.prototype ={
options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
}).isRequired,
onLeaveFeedback: PropTypes.func.isRequired,
}