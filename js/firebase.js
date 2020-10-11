// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "---",
    authDomain: "---",
    databaseURL: "---",
    projectId: "--",
    storageBucket: "--",
    messagingSenderId: "---",
    appId: "---"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
const nameRef = firebase.database().ref().child("sensor");

nameRef.on('value', function (snapshot) {
    var tripData = snapshot.val();
    var dia = 0;
    data = [];
    for (let index in tripData) {
        element = tripData[index];
        if (element.tipo == 1) {
            temperatura(element.valor);
        } else if (element.tipo == 2) {
            agua(element.valor);
        } else {
            dia++;
            data.push({ date: new Date(2020, 0, dia), value: element.valor });
        }
        console.log(data);
    }

    data.push({ date: data[data.length - 1].date, value: data[data.length - 1].value, disabled: false })


    reloadAire();
});
