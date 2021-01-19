function ContentCard({ children }) {
    return (
        <div className='col-span-11 flex items-center justify-center'>
            <div className='h-224 w-320 bg-cream box-shadow overflow'>
                {children}
            </div>
        </div>
    )
}

export default ContentCard
