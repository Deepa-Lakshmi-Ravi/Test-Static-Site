// Wait for DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize dashboard components after sidebar and header are loaded
    setTimeout(initDashboard, 300);
});

function initDashboard() {
    // Chart initialization (placeholder for actual chart library)
    initQueriesChart();
    
    // Initialize any dashboard-specific interactivity
    initStatCards();
    
    // Initialize table sorting/filtering if needed
    initDataTables();
}

function initQueriesChart() {
    // This is a placeholder for actual chart implementation
    // In a real application, you'd use a library like Chart.js
    console.log('Queries chart initialized');
    
    // Sample code for initializing a chart (commented out)
    /*
    const ctx = document.getElementById('queriesChart').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Queries',
                data: [65, 59, 80, 81, 56, 55, 40],
                backgroundColor: 'rgba(67, 97, 238, 0.2)',
                borderColor: 'rgba(67, 97, 238, 1)',
                borderWidth: 2,
                tension: 0.3
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    */
}

function initStatCards() {
    // Add hover effects or animations to stat cards
    const statCards = document.querySelectorAll('.stat-card');
    
    statCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // You could also add click handlers for cards
    statCards.forEach(card => {
        card.addEventListener('click', function() {
            // Do something when card is clicked
            console.log('Card clicked:', this.querySelector('h3').textContent);
        });
    });
}

function initDataTables() {
    // Add functionality to tables like sorting, filtering, pagination
    const tables = document.querySelectorAll('.data-table');
    
    // This is a placeholder for actual table functionality
    // In a real application, you might use DataTables or similar library
    console.log('Data tables initialized');
    
    // Add event listeners to action buttons
    const actionButtons = document.querySelectorAll('.btn-icon');
    
    actionButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const action = this.querySelector('i').classList.contains('fa-edit') ? 'edit' : 'delete';
            const row = this.closest('tr');
            const botName = row.querySelector('.bot-name').textContent;
            
            if (action === 'edit') {
                console.log('Edit bot:', botName);
                // Implement edit functionality
            } else {
                console.log('Delete bot:', botName);
                // Implement delete functionality with confirmation
                if (confirm(`Are you sure you want to delete ${botName}?`)) {
                    // Delete implementation
                    console.log(`${botName} would be deleted`);
                }
            }
        });
    });
}