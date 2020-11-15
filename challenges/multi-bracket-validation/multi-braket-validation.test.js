'use strict';
const gg = require('./multi-braket-validation');

describe('Testing multi braket validation', () => {
  test('It should give my yes for balanced brackets :{()[]} ', () => {
    let ll = new gg();
    var values = ['{()[]}'];

    expect(ll.braces(values)).toStrictEqual(['YES']);
  });
  test('It should give my NO for un-balanced brackets :{()[}]} ', () => {
    let ll = new gg();
    var values = ['{()[}]}'];

    expect(ll.braces(values)).toStrictEqual(['NO']);
  });
});
