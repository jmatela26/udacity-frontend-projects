import { clearFields } from './clearFields';
import { checkForName } from './nameChecker';

const handleSubmit = async (e) => {
    e.preventDefault();
    const urlField = document.getElementById('article-url');
    const { value } = urlField;
    if (checkForName(value)) {
      const data = await post('http://localhost:8080/meaningCloud', { url: value });
      updateUI( 
        { 
            data 
        });
    } 
    else 
    {
      clearFields();
      alert('Invalid Url');
    }
  }


const post = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    
    try{
        return await response.json()
    }
    catch (error) {
        console.log(error)
    }
}

const updateUI = ({ data }) => {
    document.getElementById("agreement").innerHTML = `Agreement: ${data.agreement}`;
    document.getElementById("confidence").innerHTML = `Confidence: ${data.confidence}`;
    document.getElementById("subjectivity").innerHTML = `Subjectivity: ${data.subjectivity}`;
    document.getElementById("irony").innerHTML = `Irony: ${data.irony}`;
    document.getElementById("score_tag").innerHTML = `Score Tag: ${data.score_tag}`;
}


export { post }
export { updateUI }
export { handleSubmit }
