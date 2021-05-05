import firebase from 'firebase';

export class UtilityForFirestore {

  constructor(private readonly firestoreInstance: firebase.firestore.Firestore) {}

  saveSomethingPlain(): Promise<unknown> {
    return this.firestoreInstance.collection('some-collection').add({
      text: 'hi'
    })
  }

  saveSomethingWithSentinel(): Promise<unknown> {
    return this.firestoreInstance.collection('some-collection').add({
      text: 'hello',
      time: firebase.firestore.FieldValue.serverTimestamp()
    })
  }

}
