
function Heading({ className, children }) {
    const defaultClass = 'text-parisienne xl:text-6xl lg:text-6xl md:text-5xl sm:text-4xl text-xl'
    const combinedClasses = `${defaultClass} ${className}`

    return <h1 className={combinedClasses}>{children}</h1>
}

export default Heading
