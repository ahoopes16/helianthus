function ContentCard({ children }) {
    const outerClass = `
    laptop:flex laptop:m-auto laptop:items-center laptop:justify-center
    `
    const innerClass = `
    bg-cream overflow
    laptop:shadow-2xl laptop:rounded-lg
    w-full laptop:w-280 laptop:h-192
    `
    return (
        <div className={outerClass}>
            <div className={innerClass}>
                {children}
            </div>
        </div>
    )
}

export default ContentCard
