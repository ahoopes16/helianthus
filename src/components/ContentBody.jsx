function ContentBody({ className, children }) {
    const consolidatedClass = `
    text-black
    my-5 px-6
    ${className}
    `

    return <div className={consolidatedClass}>{children}</div>
}

export default ContentBody
