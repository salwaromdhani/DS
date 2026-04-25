const form=document.getElementById("signupForm"),message=document.getElementById("formMessage");form.addEventListener("submit",function(e){e.preventDefault();let valid=!0;const nom=document.getElementById("nom"),prenom=document.getElementById("prenom");[nom,prenom].forEach(input=>{input.value.trim()===""?(input.classList.add("invalid"),input.classList.remove("valid"),valid=!1):(input.classList.add("valid"),input.classList.remove("invalid"))});const email=document.getElementById("email"),emailPattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;emailPattern.test(email.value)?(email.classList.add("valid"),email.classList.remove("invalid")):(email.classList.add("invalid"),email.classList.remove("valid"),valid=!1);const username=document.getElementById("username");username.value.trim()===""?(username.classList.add("invalid"),valid=!1):(username.classList.add("valid"),username.classList.remove("invalid"));const password=document.getElementById("password"),confirm=document.getElementById("confirmPassword"),pwPattern=/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;pwPattern.test(password.value)?(password.classList.add("valid"),password.classList.remove("invalid")):(password.classList.add("invalid"),valid=!1);password.value!==confirm.value||confirm.value===""?(confirm.classList.add("invalid"),valid=!1):(confirm.classList.add("valid"),confirm.classList.remove("invalid"));const accept=document.getElementById("accept");accept.checked?accept.classList.remove("invalid"):accept.classList.add("invalid"),valid?(message.style.color="green",message.textContent="Inscription réussie !",form.reset(),document.querySelectorAll("input").forEach(i=>i.classList.remove("valid"))):(message.style.color="red",message.textContent="Veuillez corriger les erreurs avant de soumettre.");});

// Fonctions existantes
function changerCouleur() {
    let eleId = document.getElementById('nom');
    if (eleId) {
        eleId.style.color = "yellow";
        eleId.style.backgroundColor = "lightblue";
    }
}

function changerZoneTexte() {
    let eleZone = document.getElementById('nom');
    if (eleZone) {
        eleZone.value = "Romdhani";
        eleZone.style.backgroundColor = "pink";
    }
}

function changertitre() {
    let titre = document.getElementById('titreForm');
    if (titre) titre.innerHTML = "Formulaire modifié";
}

function changerSelect() {
    let select = document.getElementById('pays');
    let ville = document.getElementById('ville');
    if (select && ville) ville.value = select.value;
}

// --- Validation du formulaire ---
document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Empêche l'envoi pour test
    let message = "";
    const nom = document.getElementById('nom').value.trim();
    const prenom = document.getElementById('prenom').value.trim();
    const email = document.getElementById('email').value.trim();
    const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

if (password.value === "") {
  document.getElementById('passwordError').textContent = "Mot de passe requis";
} else {
  document.getElementById('passwordError').textContent = "";
}

if (confirmPassword.value !== password.value) {
  document.getElementById('confirmPasswordError').textContent = "Les mots de passe ne correspondent pas";
} else {
  document.getElementById('confirmPasswordError').textContent = "";
}

    const accept = document.getElementById('accept').checked;

    if (!nom) message += "Nom obligatoire.\n";
    if (!prenom) message += "Prénom obligatoire.\n";
    if (!email) message += "Email obligatoire.\n";
    if (!username) message += "Nom d'utilisateur obligatoire.\n";
    if (!password) message += "Mot de passe obligatoire.\n";
    if (password !== confirmPassword) message += "Les mots de passe ne correspondent pas.\n";
    if (!accept) message += "Vous devez accepter les conditions générales.\n";

    const formMessage = document.getElementById('formMessage');
    if (message) {
        formMessage.style.color = "red";
        formMessage.innerText = message;
    } else {
        formMessage.style.color = "green";
        formMessage.innerText = "Formulaire correctement rempli !";
        // Ici on pourrait envoyer le formulaire via AJAX ou supprimer le preventDefault
    }
});



form.addEventListener('submit', function(event) {
  event.preventDefault();

  let isValid = true;

  // Nom
  const nom = document.getElementById('nom');
  const nomError = document.getElementById('nomError');
  if (nom.value.trim() === "") {
    nomError.innerText = "Le nom est obligatoire.";
    isValid = false;
  } else {
    nomError.innerText = "";
  }

  // Prénom
  const prenom = document.getElementById('prenom');
  const prenomError = document.getElementById('prenomError');
  if (prenom.value.trim() === "") {
    prenomError.innerText = "Le prénom est obligatoire.";
    isValid = false;
  } else {
    prenomError.innerText = "";
  }

  // Email
  const email = document.getElementById('email');
  const emailError = document.getElementById('emailError');
  const emailRegex = /^\S+@\S+\.\S+$/;
  if (email.value.trim() === "") {
    emailError.innerText = "L'email est obligatoire.";
    isValid = false;
  } else if (!emailRegex.test(email.value)) {
    emailError.innerText = "L'email n'est pas valide.";
    isValid = false;
  } else {
    emailError.innerText = "";
  }

  // Username
  const username = document.getElementById('username');
  const usernameError = document.getElementById('usernameError');
  if (username.value.trim() === "") {
    usernameError.innerText = "Le nom d'utilisateur est obligatoire.";
    isValid = false;
  } else {
    usernameError.innerText = "";
  }

  // Password
  const password = document.getElementById('password');
  const passwordError = document.getElementById('passwordError');
  if (password.value.trim() === "") {
    passwordError.innerText = "Le mot de passe est obligatoire.";
    isValid = false;
  } else if (password.value.length < 6) {
    passwordError.innerText = "Le mot de passe doit contenir au moins 6 caractères.";
    isValid = false;
  } else {
    passwordError.innerText = "";
  }

  // Confirm Password
  const confirmPassword = document.getElementById('confirmPassword');
  const confirmPasswordError = document.getElementById('confirmPasswordError');
  if (confirmPassword.value !== password.value) {
    confirmPasswordError.innerText = "Les mots de passe ne correspondent pas.";
    isValid = false;
  } else {
    confirmPasswordError.innerText = "";
  }

  // Genre
  const genreError = document.getElementById('genreError');
  const genreChecked = document.querySelector('input[name="genre"]:checked');
  if (!genreChecked) {
    genreError.innerText = "Veuillez sélectionner un genre.";
    isValid = false;
  } else {
    genreError.innerText = "";
  }

  // Pays
  const pays = document.getElementById('pays');
  const paysError = document.getElementById('paysError');
  if (pays.value === "") {
    paysError.innerText = "Veuillez sélectionner un pays.";
    isValid = false;
  } else {
    paysError.innerText = "";
  }

  // Ville
  const ville = document.getElementById('ville');
  const villeError = document.getElementById('villeError');
  if (ville.value === "") {
    villeError.innerText = "Veuillez sélectionner une ville.";
    isValid = false;
  } else {
    villeError.innerText = "";
  }

  // Acceptation
  const accept = document.getElementById('accept');
  const acceptError = document.getElementById('acceptError');
  if (!accept.checked) {
    acceptError.innerText = "Vous devez accepter les conditions.";
    isValid = false;
  } else {
    acceptError.innerText = "";
  }

  if (isValid) {
    alert("Formulaire validé !");
    form.reset();
  }
});

function togglePassword(id) {
    const input = document.getElementById(id);
    if (input.type === "password") {
        input.type = "text";
    } else {
        input.type = "password";
    }
}

