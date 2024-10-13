export function customSortContacts(a: any, b: any) {
  const nameA = a.displayName.toUpperCase();
  const nameB = b.displayName.toUpperCase();

  // If both names start with 'a', or both don't start with 'a', compare normally
  if (
    (nameA[0] === 'A' && nameB[0] === 'A') ||
    (nameA[0] !== 'A' && nameB[0] !== 'A')
  ) {
    return nameA.localeCompare(nameB);
  }

  // If only the first name starts with 'a', move it before the other name
  return nameA[0] === 'A' ? -1 : 1;
}

export function filterContacts(c: any) {
  return c
    .filter((c: any) => c.phoneNumbers.length > 0)
    .map((c: any) => {
      return {
        displayName: c?.givenName + ' ' + c?.middleName,
        phoneNumbers: c['phoneNumbers'],
      };
    });
}
