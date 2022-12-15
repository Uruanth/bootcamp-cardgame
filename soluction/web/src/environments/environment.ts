
export const environment = {
  production: false,
  apiBaseCommand: "http://k8s-default-cardgame-6e96056eb0-1898338761.us-east-1.elb.amazonaws.com/command",
  apiBaseQuery: "http://k8s-default-cardgame-6e96056eb0-1898338761.us-east-1.elb.amazonaws.com/queries",
  socketBaseProxy: 'ws://k8s-default-cardgame-6e96056eb0-1898338761.us-east-1.elb.amazonaws.com/proxy',
  firebase: {
    apiKey: "AIzaSyCTF2ftyL3fjJwKWod0OYwrWo_jPuwiL9o",
    authDomain: "card-game-sofka.firebaseapp.com",
    projectId: "card-game-sofka",
    storageBucket: "card-game-sofka.appspot.com",
    messagingSenderId: "183741757287",
    appId: "1:183741757287:web:1270c4d0325b09e912e1c2"
  }
};
