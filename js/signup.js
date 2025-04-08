document.addEventListener('DOMContentLoaded', function() {
    // Toggle password visibility for both fields
    const togglePasswords = document.querySelectorAll('.toggle-password');
    
    togglePasswords.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const inputId = this.parentElement.querySelector('input').id;
            const input = document.getElementById(inputId);
            const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
            input.setAttribute('type', type);
            this.querySelector('i').classList.toggle('fa-eye-slash');
        });
    });

    // Form submission (basic validation)
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('signup-email').value;
            const password = document.getElementById('signup-password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            const termsChecked = document.getElementById('terms').checked;
            
            // Basic validation
            if (!name || !email || !password || !confirmPassword) {
                alert('Please fill in all fields');
                return;
            }
            
            if (password !== confirmPassword) {
                alert('Passwords do not match');
                return;
            }
            
            if (!termsChecked) {
                alert('You must agree to the terms and conditions');
                return;
            }
            
            // In a real app, you would send this to your server
            console.log('Signup attempt with:', { name, email, password });
            
            // Redirect to login page (as specified in form action)
            this.submit();
        });
    }
});