export {
  verticalScale,
  horizontalScale,
  moderateScale,
} from '@app/utils/metrics';

export {default as getIconsSet} from './iconsSet';
export {
  requestContactWritePermission,
  showSettingsAlert,
  checkContactWritePermission,
  checkContactReadPermission,
  requestContactsReadPermission,
} from './contactPermission';

export {checkFormikError, getFormikValues} from './formikMethods';
export {isObjectEmpty, generateUniqueId} from './general';
export {customSortContacts, filterContacts} from './contacts';
