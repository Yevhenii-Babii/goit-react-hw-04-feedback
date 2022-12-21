import PropTypes from "prop-types";

export const Section = ({children,title}) =>  {
    return (
        <section>
       <h1>{title}</h1>
       {children}
        </section>
    )

}
 
Section.prototype = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}
