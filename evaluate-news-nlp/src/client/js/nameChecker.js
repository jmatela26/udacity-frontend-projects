function checkForName(inputUrl) {
    var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi
    var regex = new RegExp(expression);
    return regex.test(inputUrl);
}

export { checkForName }
