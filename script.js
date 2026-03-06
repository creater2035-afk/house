/**
 * KUMARAN HOME APPLIANCE - Core Logic
 * Handles: Filtering, WhatsApp Redirection, and UI Interactions
 */

// 1. Product Data (Easily add more products here)
const products = [
    { id: 1, name: "Heavy Duty Mixer Grinder", category: "appliances", price: "2,499", image: "mixer.jpg" },
    { id: 2, name: "Airtight Storage Set (12pc)", category: "plastics", price: "850", image: "containers.jpg" },
    { id: 3, name: "Premium Plastic Chair", category: "furniture", price: "650", image: "chair.jpg" },
    { id: 4, name: "Fast-Heat Induction Stove", category: "appliances", price: "1,899", image: "stove.jpg" },
    { id: 5, name: "20L Heavy Duty Bucket", category: "plastics", price: "299", image: "bucket.jpg" },
    { id: 6, name: "Multipurpose Dish Rack", category: "plastics", price: "1,200", image: "rack.jpg" }
];

// 2. WhatsApp Integration
function sendInquiry(productName, price) {
    const storeNumber = "91XXXXXXXXXX"; // Replace with your actual WhatsApp number (include 91)
    const message = `Hi Kumaran Home Appliances! I am interested in:
- Product: ${productName}
- Price: ₹${price}

Is this item currently in stock?`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${storeNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
}

// 3. Category Filtering Logic
const filterButtons = document.querySelectorAll('.category-card');
const productCards = document.querySelectorAll('.product-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons and add to clicked one
        filterButtons.forEach(btn => btn.classList.remove('active-filter'));
        button.classList.add('active-filter');

        const selectedCategory = button.getAttribute('data-category');

        productCards.forEach(card => {
            const productCategory = card.getAttribute('data-category');
            
            if (selectedCategory === 'all' || selectedCategory === productCategory) {
                card.style.display = 'block';
                // Add a small fade-in animation
                card.style.opacity = '0';
                setTimeout(() => { card.style.opacity = '1'; }, 10);
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// 4. Search Functionality (Optional but recommended)
function searchProducts() {
    const input = document.getElementById('productSearch').value.toLowerCase();
    productCards.forEach(card => {
        const title = card.querySelector('h3').innerText.toLowerCase();
        if (title.includes(input)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// 5. Initialize Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});