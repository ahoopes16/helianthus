function Button({ children, className='', isDisabled, onClick, ...props }) {
    const consolidatedClass = `
    bg-navy text-gold px-5 rounded
    hover:border hover:border-gold
    disabled:bg-steel disabled:text-navy disabled:cursor-not-allowed
    ${className}
    `

    return (
        <button
            className={consolidatedClass}
            disabled={isDisabled()}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button
