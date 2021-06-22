function ContentBody({ className, children }) {
    const consolidatedClass = `
    text-black
    my-5 px-6
    mobile-lg:text-lg tablet:text-xl desktop:text-2xl
    ${className}
    `

    return <div className={consolidatedClass}>{children}</div>
}

export default ContentBody
