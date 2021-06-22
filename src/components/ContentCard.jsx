function ContentCard({ children }) {
    const outerClass = `
    laptop-sm:flex laptop-sm:m-auto laptop-sm:items-center laptop-sm:justify-center
    `
    const innerClass = `
    bg-cream overflow
    laptop-sm:shadow-2xl laptop-sm:rounded-lg
    w-full laptop-sm:w-200 laptop-sm:h-144 laptop-md:w-232 desktop:h-184 desktop:w-304
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
