import { convertToHTMLString } from '../helpers'

function Checkbox({ label, onChange, value, ...props }) {
    const htmlName = convertToHTMLString(label)
    const innerClass = `
    ml-2
    tablet:h-4 tablet:w-4
    `

    return (
        <label {...props} htmlFor={htmlName}>
            {label}:
            <input
                className={innerClass}
                type='checkbox'
                name={htmlName}
                checked={value}
                onChange={onChange}
            />
        </label>
    )
}

export default Checkbox
