document.addEventListener('DOMContentLoaded', function() {
    // Include components
    const includes = document.querySelectorAll('[data-include]');
    
    includes.forEach(include => {
        const file = include.getAttribute('data-include');
        fetch(file)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to load ${file}: ${response.status}`);
                }
                return response.text();
            })
            .then(data => {
                include.innerHTML = data;
            })
            .catch(error => {
                console.error(error);
            });
    });

    // Simple active link highlighting for sidebar
    document.addEventListener('click', function(e) {
        if (e.target.closest('.sidebar-nav a')) {
            document.querySelectorAll('.sidebar-nav li').forEach(li => {
                li.classList.remove('active');
            });
            e.target.closest('li').classList.add('active');
        }
    });
});