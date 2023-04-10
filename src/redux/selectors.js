export const getContacts = state => state.contacts;

export const getFilter = state => state.filter.filter;

export const getFilteredContacts = store => {
  const { filter, contacts } = store;

  const normalizedFilter = filter.filter.toLowerCase();
  const result = contacts.filter(({ name, number }) => {
    return (
      name.toLowerCase().includes(normalizedFilter) ||
      number.toLowerCase().includes(normalizedFilter)
    );
  });

  return result;
};
