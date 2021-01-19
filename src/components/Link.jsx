import { BLANK_TARGET, NEW_TAB } from '../constants'

function Link({ className, href, children }) {
    const linkClass = `hover:underline text-blue-500 ${className}`

    return (
        <a
            className={linkClass}
            target={BLANK_TARGET}
            rel={NEW_TAB}
            href={href}
        >
            {children}
        </a>
    )
}

export default Link
