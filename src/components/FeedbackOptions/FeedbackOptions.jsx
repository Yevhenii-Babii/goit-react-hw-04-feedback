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