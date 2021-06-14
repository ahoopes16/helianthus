import { convertToHTMLString } from "../helpers"

function SelectBox({ label, value, onChange, children, ...props }) {
    const htmlName = convertToHTMLString(label)

    return (
        <label {...props} htmlFor={htmlName}>
            {label}:
            <select className="ml-4 border rounded" name={htmlName} value={value} onChange={onChange}>
                {children}
            </select>
        </label>
    )
}

export default SelectBox
