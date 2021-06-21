import { convertToHTMLString } from '../helpers'

function Checkbox({ label, onChange, value, ...props }) {
    const htmlName = convertToHTMLString(label)

    return (
        <label {...props} htmlFor={htmlName}>
            {label}:
            <input
                className="ml-4 h-5 w-5"
                type="checkbox"
                name={htmlName}
                checked={value}
                onChange={onChange}
            />
        </label>
    )
}

export default Checkbox
