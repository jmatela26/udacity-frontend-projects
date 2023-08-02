
function clearFields() {

    document.getElementById("article-url").value = "";
    document.getElementById("agreement").innerHTML = "";
    document.getElementById("confidence").innerHTML = "";
    document.getElementById("subjectivity").innerHTML = "";
    document.getElementById("irony").innerHTML = "";
    document.getElementById("score_tag").innerHTML = "";

}

export { clearFields }