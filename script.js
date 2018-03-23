function toggle() {
    console.log('clicked');
    var firebaseRef= firebase.database().ref().child('Data');
    firebase.database().ref().once('value').then(function(snapshot) {
        var m=snapshot.val().Data;
        console.log(m);
        var update= m  ? 0 : 1;
        console.log(update);
        firebase.database().ref("/Data").set(update);
    });
}

