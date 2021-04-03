import moment from 'moment';
import _ from 'lodash';

export const formatDateMoment = (time, typeFormat, type) => {
  return moment(time).format(type);
};

export const _SortUniq = (arr) => {
  return _.sortedUniq(arr);
};

export const getLength = (value) => {
  return value ? value.length : 0;
};


