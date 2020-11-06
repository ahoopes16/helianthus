function EmphasizedText({ className, children }) {
    const defaultClass = 'lg:text-5xl md:text-4xl sm:text-3xl text-lg'
    const combinedClasses = `${defaultClass} ${className}`

    return <h2 className={combinedClasses}>{children}</h2>
}

export default EmphasizedText
