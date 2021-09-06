import { Fragment } from 'react'

export const FoodValues = {
    NO_RESTRICTIONS: 'No Restrictions',
    GLUTEN_FREE: 'GlutenFree',
    VEGAN: 'Vegan',
}

function FoodOptions() {
    return (
        <Fragment>
            <option value="">--Please choose an option--</option>
            <option value={FoodValues.NO_RESTRICTIONS}>No Dietary Restrictions</option>
            <option value={FoodValues.GLUTEN_FREE}>Gluten-Free</option>
            <option value={FoodValues.VEGAN}>Vegan</option>
        </Fragment>
    )
}

export default FoodOptions
