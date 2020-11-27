import firebase from 'firebase'


export function login (email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password)
}

export function logout() {
  return firebase.auth().signOut()
}

export function auth () {
    return new Promise(resolve => {
        firebase.auth().onAuthStateChanged(user => {
        resolve(user || false)
        })
    })
}

export function post (data) {
  const room = 'service'
  return firebase.firestore().collection(room).add({
      title: data['title'],
      github: data['github'],
      weburl: data['weburl'],
      description: data['desc'],
      imageurl: data['imageurl']
  }, function(error) {
    if (error) {
      // The write failed...
      console.log(error)
    } else {
      console.log("Data saved successfully!")
    }
  });
}

export function get () {
  const room = 'service'
  const list = []
  return firebase.database().ref(room).on("value", (data) => {
    if (data) { return data  }
    else { return list }
  })
}

export function upload (file, serviceID) {
  const imageURL = `tmp/${serviceID}`
  return  firebase.storage().ref().child(imageURL).put(file,
    function(error) {
      if (error) {
        // The write failed...
        console.log(error)
      } else {
        console.log("Image file saved successfully!")
      }
    })
}
