 function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log(profile.getEmail());
    email = profile.getEmail();
    verify = email.substring(email.length-8,email.length);
    console.log(verify);
    loggedIn = verify=="stuy.edu";
    console.log(loggedIn);
    if (loggedIn){
	window.location.replace("verify");
    }
  }
  function signOut(){
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
       console.log('signed out');
    });
  }
