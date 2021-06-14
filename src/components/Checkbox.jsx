import { convertToHTMLString } from '../helpers'

function Checkbox({ label, onChange, value, ...props }) {
    const htmlName = convertToHTMLString(label)

    return (
        <label {...props} htmlFor={htmlName}>
            {label}:
            <input className="ml-4" type="checkbox" name={htmlName} value={value} onChange={onChange} />
        </label>
    )
}

export default Checkbox
