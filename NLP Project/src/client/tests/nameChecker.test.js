
//Url must match and must be true
describe('urlExpression: URL', function () {
  it('match url', function () {
    const urlExpression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    const urlTest = 'http://facebook.com/';
    expect(urlExpression.test(urlTest)).toBe(true);
  });
});