async function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const response = await fetch('./data.json');
  const { Travellers } = await response.json();
  
  if (Travellers[username] && Travellers[username].password === password) {
    document.getElementById("login-page").className = "hidden";
    document.getElementById("app-contents").className = "visible";
    document.getElementById("dashboard").className = "visible";
    document.body.style.backgroundColor = "#f2f2f2";
  } 
  else {
    document.getElementById("error-message").className = "visible";
    document.getElementById("error-message").style.color = "#D83434";
  }
}
