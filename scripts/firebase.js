// Initialize Firebase
      
var config = {
    apiKey: "AIzaSyDeugto7O7AVMjFtB2y6P3A_EVtUId8mLU",
    authDomain: "fir-9ed3c.firebaseapp.com",
    databaseURL: "https://fir-9ed3c.firebaseio.com",
    projectId: "fir-9ed3c",
    storageBucket: "fir-9ed3c.appspot.com",
    messagingSenderId: "26646343769"
};
firebase.initializeApp(config);

const preObject = document.getElementById('object');

const tRow = document.getElementById('row');

const dbRefObject = firebase.database().ref().child('object');

const dbRefRow1 = dbRefObject.child('Reading1');



dbRefRow1.on('child_added',snap => {

    const td= document.createElement('td');
    td.innerText=snap.val();
    td.id=snap.key;
    tRow.appendChild(td);
});

dbRefRow1.on('child_changed', snap =>{
    const RowChanged = document.getElementById(snap.key);
    RowChanged.innerText = snap.val();
});

dbRefRow1.on('child_removed', snap =>{
    const RowToRemove = document.getElementById(snap.key);
    RowToRemove.remove();
});
