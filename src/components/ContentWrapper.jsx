function ContentWrapper({ children }) {
    return (
        <div className='text-roboto laptop-sm:flex laptop-sm:flex-1'>
            {children}
        </div>
    )
}

export default ContentWrapper
