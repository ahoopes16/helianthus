function ContentWrapper({ children }) {
    return (
        <div className='text-roboto grid grid-cols-12'>
            {children}
        </div>
    )
}

export default ContentWrapper
