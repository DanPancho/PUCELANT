import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class NewFriendService {

  constructor(private firestore: AngularFirestore) { }

  newFriend(id_user: any, amigos: any[]) {
    var cont= 0;
    const querySnapshot = this.firestore.collection("friends", ref => ref.where("usuario", "==", id_user)).get();
    let id;
    console.log(amigos);
    querySnapshot.subscribe((data) => {
      console.log(data.docs[0].id)
      this.firestore.collection("friends").doc(`${data.docs[0].id}`).update({
        "amigos": amigos
      })})
      cont++;
      console.log(cont);
  }
}
