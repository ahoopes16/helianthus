import sunflower from '../img/sunflower.png'
import MediaQuery from 'react-responsive'

const sunflowerStyles = {
    image: 'object-contain',
    sizes: 'xl:h-88 lg:h-72 md:h-64 sm:h-48 h-32',
    margins: 'xl:-mt-20 sm:mt-16 mt-12',
    leftSpecific: 'xl:-mr-32 transform -rotate-45',
    rightSpecific: 'xl:-ml-32 transform scale-x-flip xl:rotate-45',
}

function SunflowerWrap({ className, children }) {
    const LAPTOP_WIDTH_PIXELS = 1280
    const defaultClass = 'flex xl:flex-row flex-col xl:justify-around xl:my-24'
    const combinedClasses = `${defaultClass} ${className}`
    const sharedSunflowerStyles = `${sunflowerStyles.image} ${sunflowerStyles.sizes} ${sunflowerStyles.margins}`

    return (
        <div className={combinedClasses}>
            <MediaQuery minDeviceWidth={LAPTOP_WIDTH_PIXELS}>
                <img
                    src={sunflower}
                    alt="left sunflower graphic"
                    className={`${sharedSunflowerStyles} ${sunflowerStyles.leftSpecific}`}
                />
            </MediaQuery>

            {children}

            <img
                src={sunflower}
                alt="right sunflower graphic"
                className={`${sharedSunflowerStyles} ${sunflowerStyles.rightSpecific}`}
            />
        </div>
    )
}

export default SunflowerWrap
