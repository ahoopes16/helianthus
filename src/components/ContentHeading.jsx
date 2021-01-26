function ContentHeading({ className, children }) {
    const consolidatedClass = `text-center text-cabernet text-parisienne text-6xl ${className}`

    return <h1 className={consolidatedClass}>{children}</h1>
}

export default ContentHeading
