
//Import js 
import { handleSubmit } from './js/formHandler'
import { controlDate } from './js/dateControl'
import { removeTrip } from './js/removeTrip'

//scss
import './styles/style.scss'

//For save trip button
window.addEventListener('DOMContentLoaded', () => {
    const buttonSubmit = document.getElementById('button1');
    buttonSubmit.addEventListener('click', handleSubmit);
})

//For remove trip button
window.addEventListener('DOMContentLoaded', () => {
    const removeTripButton = document.getElementById('remove');
    removeTripButton.addEventListener('click', removeTrip);
})


export { handleSubmit }
export { removeTrip }
export { controlDate }
