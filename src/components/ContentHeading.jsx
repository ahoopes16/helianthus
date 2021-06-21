function ContentHeading({ className, children }) {
    const consolidatedClass = `
    text-center text-cabernet text-parisienne
    text-3xl mobile-lg:text-4xl laptop:text-5xl desktop:text-6xl
    mt-2
    ${className}
    `

    return <h1 className={consolidatedClass}>{children}</h1>
}

export default ContentHeading
