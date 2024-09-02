import { auth, db } from './firebase-config.js';
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

document.getElementById('submitSignIn').addEventListener('click', (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            localStorage.setItem('loggedInUserId', user.uid);
            showMessage('Login is successful', 'signInMessage');
            window.location.href = '../application/dashboard.html';
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            if (errorCode === 'auth/invalid-credential') {
                showMessage('No user found with this email. Please sign up first.', 'signInMessage');
            } else {
                showMessage(`Error: ${errorMessage}`, 'signInMessage');
            }
        });
});

function showMessage(message, divId) {
    const messageDiv = document.getElementById(divId);
    messageDiv.style.display = "block";
    messageDiv.innerHTML = message;
    messageDiv.style.opacity = 1;
    setTimeout(() => {
        messageDiv.style.opacity = 0;
    }, 5000);
}
