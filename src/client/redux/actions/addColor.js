import { v4 } from 'uuid';
import C from './constants';

const addColor = (title, color) => ({
  type: C.ADD_COLOR,
  id: v4(),
  title,
  color,
  timestamp: new Date().toString()
});

export default addColor;
