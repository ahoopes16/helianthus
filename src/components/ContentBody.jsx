function ContentBody({ className, children }) {
    const consolidatedClass = `text-black text-2xl my-10 px-10 ${className}`

    return <div className={consolidatedClass}>{children}</div>
}

export default ContentBody
