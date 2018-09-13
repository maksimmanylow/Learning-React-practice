import C from './constants';

const sortColors = sortedBy =>
  sortedBy === 'rating'
    ? {
        type: C.SORT_COLORS,
        sortBy: 'SORTED_BY_RATING'
      }
    : sortedBy === 'title'
      ? {
          type: C.SORT_COLORS,
          sortBy: 'SORTED_BY_TITLE'
        }
      : {
          type: C.SORT_COLORS,
          sortBy: 'SORTED_BY_DATE'
        };

export default sortColors;
