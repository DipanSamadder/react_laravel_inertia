export default function Button({ className = '', disabled, children, ...props }){
    return (
        <button
            {...props}
            className={`btn  ${ disabled && 'opacity-25 '}  ` + className }
            disabled={disabled}
        >
            {children}
        </button>
    );
}