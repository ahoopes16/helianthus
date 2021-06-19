import { convertToHTMLString } from '../helpers'

function TextBox({ label, onChange, value, ...props }) {
    const htmlName = convertToHTMLString(label)

    return (
        <label {...props} htmlFor={htmlName}>
            {label}:
            <input className="ml-4 pl-1 border rounded" type="text" name={htmlName} value={value} onChange={onChange} autoComplete="off" maxLength="80" />
        </label>
    )
}

export default TextBox
