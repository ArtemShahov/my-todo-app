/* eslint-disable import/no-anonymous-default-export */

const getFieldValue = (store: any, field: string): string => store.FormReducer[field];

export default {
  getFieldValue,
};
