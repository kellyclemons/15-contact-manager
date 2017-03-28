export default function reducer(state = { contacts: [] }, action) {
  switch (action.type) {

    case 'CONTACT@FIND_ALL':
      return {
        contacts: action.data,
      };

    case 'CONTACT@CREATE':
      return {
        contacts: [...state.contacts, action.data],
      };

    case 'CONTACT@REMOVE':
      return {
        contacts: state.contacts.filter(current => current.id !== action.id)
      };

    default:
      return state || {
        contacts: [],
      };
  }
}
