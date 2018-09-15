import addColor from '../actions/addColor';

import { storeFactory, myStoreFactory } from './storeFactory';

const store = storeFactory();

store.dispatch(addColor('#FFF', 'Bright White'));
store.dispatch(addColor('#00FF00', 'Lawn'));
store.dispatch(addColor('#0000FF', 'BigBlue'));
