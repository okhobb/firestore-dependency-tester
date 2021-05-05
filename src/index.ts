import firebase from 'firebase';
import * as admin from 'firebase-admin';

import {UtilityForFirestore} from 'shared-firestore-lib';


const app = admin.initializeApp({
  credential: admin.credential.cert(require('../data/credential.json'))
});

const adminFirestore = (<unknown>admin.firestore()) as firebase.firestore.Firestore;

const util = new UtilityForFirestore(adminFirestore);

util.saveSomethingPlain()
.then(() => console.log('something normal worked.'))
.then(() => util.saveSomethingWithSentinel())
.then(() => console.log('something with sentinel worked.'))
.catch(e => console.error('Got an error', e))
.finally(() =>   app.delete());

console.log('all done!');
