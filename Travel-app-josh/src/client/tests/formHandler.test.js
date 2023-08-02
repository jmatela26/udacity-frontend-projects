import { handleSubmit } from '../js/formHandler';

//submit must be defined and not undefined
test('test submit', () => {
  expect(handleSubmit).toBeDefined();
})