function signUp() {
    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="password"]').value;
    const confirmPassword = document.querySelector('input[name="confirmPassword"]').value;
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    // authentication  with Firebase Auth
}