// Modal Popup for Project Details
function showDetails(business) {
    const services = {
        restaurant: "• WhatsApp ordering<br>• Arabic/English menu<br>• Table reservations",
        clinic: "• Doctor profiles<br>• Online booking<br>• SMS reminders",
        realestate: "• Property search<br>• Virtual tours<br>• KNET payments",
        lawfirm: "• Bilingual docs<br>• Secure portals<br>• Case management",
        autorepair: "• Service packages<br>• Mechanic profiles<br>• SMS notifications",
        others: "• Custom development<br>• Unique solutions<br>• Tailored features"
    };

    // Create modal if it doesn't exist
    let modal = document.getElementById('details-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'details-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-btn" id="close-modal">&times;</span>
                <h3>Services Included</h3>
                <div id="modal-services"></div>
                <div class="modal-price">Price: <b>500-1500 KWD</b></div>
            </div>
        `;
        document.body.appendChild(modal);

        // Basic modal styles (for usability, can be improved in CSS)
        modal.style.position = 'fixed';
        modal.style.top = 0;
        modal.style.left = 0;
        modal.style.width = '100vw';
        modal.style.height = '100vh';
        modal.style.background = 'rgba(0,0,0,0.45)';
        modal.style.display = 'flex';
        modal.style.alignItems = 'center';
        modal.style.justifyContent = 'center';
        modal.style.zIndex = 1000;
        modal.querySelector('.modal-content').style.background = '#fff';
        modal.querySelector('.modal-content').style.padding = '32px 28px';
        modal.querySelector('.modal-content').style.borderRadius = '18px';
        modal.querySelector('.modal-content').style.boxShadow = '0 8px 32px rgba(0,0,0,0.18)';
        modal.querySelector('.modal-content').style.textAlign = 'center';
        modal.querySelector('.close-btn').style.position = 'absolute';
        modal.querySelector('.close-btn').style.top = '16px';
        modal.querySelector('.close-btn').style.right = '24px';
        modal.querySelector('.close-btn').style.fontSize = '2rem';
        modal.querySelector('.close-btn').style.cursor = 'pointer';

        // Close modal
        modal.querySelector('#close-modal').onclick = () => modal.style.display = 'none';
        modal.onclick = e => { if (e.target === modal) modal.style.display = 'none'; };
    }

    document.getElementById('modal-services').innerHTML = services[business] || '';
    modal.style.display = 'flex';
}

// Contact Form Handler
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Show thank you popup
    const popup = document.createElement('div');
    popup.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: white;
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 4px 24px rgba(0,0,0,0.18);
        text-align: center;
        z-index: 1000;
    `;
    
    popup.innerHTML = `
        <h3 style="color: var(--green); margin-bottom: 1rem;">Thank You!</h3>
        <p>Your project request has been received.<br>We'll contact you within 24 hours.</p>
        <button onclick="this.parentElement.remove()" style="
            background: var(--green);
            color: white;
            border: none;
            padding: 8px 24px;
            border-radius: 20px;
            margin-top: 1rem;
            cursor: pointer;
        ">Close</button>
    `;
    
    document.body.appendChild(popup);
    
    // Submit the form
    fetch(this.action, {
        method: 'POST',
        body: new FormData(this)
    }).then(() => {
        this.reset();
    });
});