import { Fragment } from 'react'

function FoodOptions() {
    return (
        <Fragment>
            <option value="">--Please choose an option--</option>
            <option value="No Restrictions">No Dietary Restrictions</option>
            <option value="GlutenFree">Gluten-Free</option>
            <option value="Vegan">Vegan</option>
        </Fragment>
    )
}

export default FoodOptions
