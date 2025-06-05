const fetchAlerts = async () => {
    try {
        const response = await fetch('/api/alerts');
        const alerts = await response.json();
        // Render alerts in the frontend
        renderAlerts(alerts);
    } catch (error) {
        console.error('Error fetching alerts:', error);
    }
};

const renderAlerts = (alerts) => {
    const alertContainer = document.querySelector('.alert-container');
    alertContainer.innerHTML = ''; // Clear existing alerts
    alerts.forEach(alert => {
        const alertCard = document.createElement('div');
        alertCard.className = 'alert-card red';
        alertCard.innerHTML = `
            <p class="alert-title">${alert.title}</p>
            <p class="alert-details">${alert.description} &nbsp; ${alert.location}</p>
        `;
        alertContainer.appendChild(alertCard);
    });
};

document.addEventListener('DOMContentLoaded', fetchAlerts);
