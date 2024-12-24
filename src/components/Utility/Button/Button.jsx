import './Button.css';

export default function Button({ classname, children, ...props }) {
    return(
        <>
            <button  {...props} className={`btn ${classname}`}>{children}</button>
        </>
    )
}