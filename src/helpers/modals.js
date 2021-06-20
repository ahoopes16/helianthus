import swal from 'sweetalert2'

function validateInput(text, html) {
    if (!text && !html) {
        throw new Error('Either text or html must be provided.')
    }
}

/**
 * Creates a generic error modal.
 * @param {string} text
 * @param {string} html Optional text override with markup
 * @returns void
 */
export function generateErrorModal(text, html) {
    validateInput(text, html)

    swal.fire({
        title: 'Oops!',
        icon: 'error',
        html,
        text,
        confirmButtonText: 'Okay!',
    })
}

/**
 * Creates a generic success modal.
 * @param {string} text
 * @param {string} html Optional text override with markup
 */
export function generateSuccessModal(text, html) {
    validateInput(text, html)

    swal.fire({
        title: 'Success!',
        icon: 'success',
        html,
        text,
        confirmButtonText: 'Awesome!',
    })
}

/**
 * Creates a generic informational modal.
 * @param {string} text
 * @param {string} html Optional text override with markup
 */
export function generateInfoModal(text, html) {
    validateInput(text, html)

    swal.fire({
        title: 'Hey there!',
        icon: 'info',
        html,
        text,
        confirmButtonText: 'Got it!',
    })
}
