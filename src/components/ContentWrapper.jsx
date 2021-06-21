function ContentWrapper({ children }) {
    return (
        <div className='text-roboto laptop:flex laptop:flex-1'>
            {children}
        </div>
    )
}

export default ContentWrapper
