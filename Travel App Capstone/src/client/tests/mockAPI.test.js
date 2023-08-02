const json = require('../../server/mockAPI');

//Test server side
test('test mockAPi at server side', () => {

    expect(json.title).toBe('test json response');
    expect(json.message).toContain('testing');
    expect(json.time).toHaveLength(3);
});