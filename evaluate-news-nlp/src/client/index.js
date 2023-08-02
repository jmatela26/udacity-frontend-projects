import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'
import { clearFields } from './js/clearFields'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'


window.addEventListener('DOMContentLoaded', () => {
    const buttonSubmit = document.getElementById('btn-submit');
    buttonSubmit.addEventListener('click', handleSubmit);
})

window.addEventListener('DOMContentLoaded', () => {
    const buttonClear = document.getElementById('btn-clear');
    buttonClear.addEventListener('click', clearFields);
})

export { checkForName }
export { handleSubmit }
export { clearFields }