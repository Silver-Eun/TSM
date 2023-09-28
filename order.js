const firebaseConfig = {
  apiKey: "AIzaSyCBHru5ZJkSJw6eNZS2O3hP_HTWZRWj0Ss",
  authDomain: "login-57d54.firebaseapp.com",
  databaseURL: "https://login-57d54-default-rtdb.firebaseio.com",
  projectId: "login-57d54",
  storageBucket: "login-57d54.appspot.com",
  messagingSenderId: "99487570087",
  appId: "1:99487570087:web:757f1cc8c871275f5c2382",
};

firebase.initializeApp(firebaseConfig);

var orderRef = firebase.database().ref("/orderList");
var auth = firebase.auth();
var user = null;

function sendOrder(form) {
  var newOrder = {
    이름: form.name.value,
    연락처: form.pnumb.value,
    주소: form.address.value,
    배송요청사항: $("#request option:checked").text(),
    // 카테고리1: $("#category1 option:checked").text(),
    // 카테고리2: $("#category2 option:checked").text(),
    // 카테고리3: $("#category3 option:checked").text(),
    // 카테고리4: $("#category4 option:checked").text(),
    // 카테고리5: $("#category5 option:checked").text(),
    timestamp: firebase.database.ServerValue.TIMESTAMP,
  };

  orderRef.push(newOrder);
}

function addcart() {
  $("#cart").append("<p>test</p>");
}

function signup(form) {
  var email = form.email.value;
  var password = form.password.value;

  auth
    .createUserWithEmailAndPassword(email, password)
    .then(function () {
      alert("회원가입 완료");
    })
    .catch(function (error) {
      alert(error.message);
    });
}

function login(form) {
  var email = form.email.value;
  var password = form.password.value;

  auth
    .createUserWithEmailAndPassword(email, password)
    .then(function () {
      alert("로그인 완료");
    })
    .catch(function (error) {
      alert(error.message);
    });
}

auth.onAuthStateChanged(function (user) {
  if (user) {
    $("#login-email").text(user.email);

    $("#logintab").hide();
    $("#before-login").hide();
    $("#after-login").show();

    window.user = user;
  } else {
    $("#before-login").show();
    $("#after-login").hide();

    window.user = null;
  }
});

function logout() {
  auth.signOut();
}

function sendverifyemail() {
  user
    .sendEmailVerification()
    .then(function () {
      alert("Send Verify");
    })
    .catch(function (error) {
      alert(error.message);
    });
}
