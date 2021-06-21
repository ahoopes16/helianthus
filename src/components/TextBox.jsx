import { convertToHTMLString } from '../helpers'

function TextBox({ label, onChange, value, ...props }) {
    const htmlName = convertToHTMLString(label)
    const innerClass = `
    border rounded pl-1
    ml-2
    `

    return (
        <label {...props} htmlFor={htmlName}>
            {label}:
            <input className={innerClass} type='text' name={htmlName} value={value} onChange={onChange} autoComplete='off' maxLength='80' />
        </label>
    )
}

export default TextBox
