import reducer from '../app/reducer';

const defaultState = Object.freeze({
  contacts: [],
});


module('reducer', () => {
  test('it exists', (assert) => {
    assert.ok(reducer, 'reducer exists');
  });


// TEST START
  test('it has a default state', (assert) => {
    assert.deepEqual(reducer(null, {}), defaultState, 'Returns the default state');
  });

// TEST 1

  test('it can add new data', (assert) => {
    const startingState = [];
    const actionOne = { type: 'CONTACT@FIND_ALL', data: [{ firstName: 'John', lastName: 'Cena' }] };
    const expectedResult = { contacts: [{ firstName: 'John', lastName: 'Cena' }] };

    assert.deepEqual(reducer(startingState, actionOne), expectedResult);
  });
});
