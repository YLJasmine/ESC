// react components only access this file, not the firebase and auth files directly.

import * as auth from './auth';
import * as db from './db';
import * as firebase from './firebase';

export {
	db,
	auth,
	firebase,
};