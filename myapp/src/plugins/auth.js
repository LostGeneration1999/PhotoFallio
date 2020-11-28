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
      // The write failed...
      alert('データの保存に失敗しました')
      console.log(error)
    } else {
      console.log("Data saved successfully!")
    }
  });
}

export function get (room) {
  return firebase.firestore().collection(room).get(
    function(error) {
      if (error) {
        // The write failed...
        alert('データの取得に失敗しました');
        console.log(error);
      } else {
        console.log("Get data successfully!")
      }
    }
  )
}

export function upload (file, serviceID) {
    const imageURL = `tmp/${serviceID}`
    return  firebase.storage().ref().child(imageURL).put(file,
      function(error) {
        if (error) {
          // The write failed...
          alert('画像のアップロードに失敗しました');
          console.log(error);
        } else {
          console.log("Image file saved successfully!")
        }
      })
}

export function download (title) {
  const imageURL = `tmp/${title}`
  return firebase.storage().ref().child(imageURL).getDownloadURL(
    function(error) {
      if (!error) {
        alert('画像のダウンロードに失敗しました');
        console.log(error)
      } else {
        console.log("Download URL successfully!")
      }
    }
  )
}