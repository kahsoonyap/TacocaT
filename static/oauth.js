 function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log(profile.getEmail());
    email = profile.getEmail();
    verify = email.substring(email.length-8,email.length);
    console.log(verify);
    loggedIn = verify=="stuy.edu";
    console.log(loggedIn);
    address=window.location.href;
    check=address.split("/");
    end=check[check.length-1]
    console.log(end);
    if (loggedIn &&  end !== "verified"){
	window.location.replace("verified");
    }
    else if(loggedIn==false && end !== "denied") {
	window.location.replace("denied");
    }
  }
  function signOut(){
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
       console.log('signed out');
    });
    window.location.replace("/");
  }
