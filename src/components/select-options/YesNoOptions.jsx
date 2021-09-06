import { Fragment } from 'react'

export const YesNoValues = {
    YES: 'Yes',
    NO: 'No'
}

function YesNoOptions() {
    return (
        <Fragment>
            <option value="">--Please choose an option--</option>
            <option value={YesNoValues.YES}>Yes</option>
            <option value={YesNoValues.NO}>No</option>
        </Fragment>
    )
}

export default YesNoOptions
