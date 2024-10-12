export const isObjectEmpty = (objectName: any) => {
  return Object.keys(objectName).length === 0;
};

export const generateUniqueId = () => {
  return 'id-' + Math.random().toString(36).substr(2, 9);
};
