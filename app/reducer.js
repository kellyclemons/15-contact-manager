export default function (state, action) {
  switch (action.type) {

    case 'CONTACT@FIND_ALL':
      return {
        contacts: [{ firstName: 'John', lastName: 'Cena' }]
      };



    default:
      return {
        contacts: [],
      };
  }
}
