import { convertToHTMLString } from "../helpers"

function SelectBox({ label, value, onChange, children, ...props }) {
    const htmlName = convertToHTMLString(label)
    const className = `
    border rounded
    ml-2
    `

    return (
        <label {...props} htmlFor={htmlName}>
            {label}:
            <select className={className} name={htmlName} value={value} onChange={onChange}>
                {children}
            </select>
        </label>
    )
}

export default SelectBox
