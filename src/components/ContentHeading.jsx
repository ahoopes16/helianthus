function ContentHeading({ className, children }) {
    const consolidatedClass = `
    text-center text-cabernet text-parisienne
    text-3xl
    mt-2
    ${className}
    `

    return <h1 className={consolidatedClass}>{children}</h1>
}

export default ContentHeading
