import C from './constants';

const removeColor = id => ({
  type: C.REMOVE_COLOR,
  id
});

export default removeColor;
