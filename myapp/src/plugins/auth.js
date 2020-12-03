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
  }, function(error) {
    if (error) {
      alert('データの保存に失敗しました'+error);
    } 
  });
}

export function registerAlbum (id) {
  const room = 'album'
  return firebase.firestore().collection(room).add({
    id: id
}, function(error) {
  if (error) {
    alert('データの保存に失敗しました'+error);
  } 
});
}

export function get (room) {
  return firebase.firestore().collection(room).get(
    function(error) {
      if (error) {
        alert('データの取得に失敗しました'+error);
      } 
    }
  )
}

export function upload (file, serviceID) {
    const imageURL = serviceID
    return  firebase.storage().ref().child(imageURL).put(file,
      function(error) {
        if (error) {
          alert('画像のアップロードに失敗しました'+error);
        } 
      })
}

export function download (path) {
  const imageURL = path
  return firebase.storage().ref().child(imageURL).getDownloadURL(
    function(error) {
      if (!error) {
        alert('画像のダウンロードに失敗しました'+error);
      } 
    }
  )
}