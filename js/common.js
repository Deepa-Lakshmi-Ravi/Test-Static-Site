// Function to load HTML components
function loadComponent(url, containerId) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(containerId).innerHTML = data;
            // Add active class to current page in sidebar
            if (containerId === 'sidebar-container') {
                highlightCurrentPage();
            }
        })
        .catch(error => {
            console.error(`Error loading component from ${url}:`, error);
        });
}

// Function to highlight the current page in the sidebar
function highlightCurrentPage() {
    // Get the current page filename
    const currentPage = window.location.pathname.split('/').pop() || 'dashboard.html';
    
    // Extract the page name without extension
    const pageName = currentPage.split('.')[0];
    
    // Find and highlight the corresponding sidebar item
    const sidebarItem = document.querySelector(`.nav-item[data-page="${pageName}"]`);
    if (sidebarItem) {
        sidebarItem.classList.add('active');
    }
}

// Load components when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Load sidebar
    loadComponent('components/sidebar.html', 'sidebar-container');
    
    // Load header
    loadComponent('components/header.html', 'header-container');
    
    // Toggle sidebar on mobile
    document.addEventListener('click', function(event) {
        if (event.target.closest('.toggle-sidebar')) {
            document.querySelector('.sidebar').classList.toggle('active');
            document.querySelector('.content-wrapper').classList.toggle('sidebar-active');
            document.querySelector('.header').classList.toggle('sidebar-active');
        }
    });
    
    // Close user dropdown when clicking outside
    document.addEventListener('click', function(event) {
        const userProfile = document.querySelector('.user-profile');
        const userDropdown = document.querySelector('.user-dropdown');
        
        if (userProfile && userDropdown && !userProfile.contains(event.target)) {
            userDropdown.style.display = 'none';
        }
    });
});