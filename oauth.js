 function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log(profile.getEmail());
    console.log(profile.getId());
    var id_token = googleUser.getAuthResponse();
    console.log(id_token);
  }
  function signOut(){
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
       console.log('signed out');
    });
  }
