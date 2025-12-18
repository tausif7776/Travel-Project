// ========== GLOBAL VARIABLES ==========
let destinations = [];
let filteredDestinations = [];
let currentView = 'grid';
let currentFilter = 'all';
let currentSort = 'default';
let visibleCount = 6;
let isLoading = false;

// ========== LOADING SCREEN ==========
function initLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    const progressBar = document.getElementById('progressBar');
    
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress > 100) progress = 100;
        progressBar.style.width = `${progress}%`;
        
        if (progress === 100) {
            clearInterval(interval);
            setTimeout(() => {
                loadingScreen.style.opacity = '0';
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                    document.body.style.overflow = 'auto';
                    initAnimations();
                }, 500);
            }, 500);
        }
    }, 100);
}

// ========== INITIALIZE APP ==========
document.addEventListener('DOMContentLoaded', function() {
    // Initialize loading screen
    initLoadingScreen();
    
    // Load destinations data
    loadDestinationsData();
    
    // Initialize all components
    initMobileMenu();
    initSearch();
    initViewToggle();
    initSorting();
    initThemeToggle();
    initFeedbackForm();
    initBackToTop();
    initNewsletter();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Initialize counters
    initCounters();
});

// ========== DESTINATIONS DATA ==========
function loadDestinationsData() {
    destinations = [
        {
            id: 1,
            name: "Taj Mahal",
            location: "Agra, India",
            city: "Agra",
            country: "India",
            type: "historical",
            rating: 4.8,
            bestTime: "October to March",
            stay: "2-3 days",
            priceRange: "$$",
            image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
            description: "The Taj Mahal is an ivory-white marble mausoleum on the right bank of the Yamuna river. It was commissioned in 1632 by Mughal emperor Shah Jahan to house the tomb of his favorite wife, Mumtaz Mahal.",
            youtubeUrl: "https://www.youtube.com/embed/49HTIoCccDY",
            whereToStay: "• Luxury: The Oberoi Amarvilas (near Taj Mahal)\n• Mid-range: Crystal Sarovar Premiere\n• Budget: Hotel Atulyaa Taj",
            travelTips: "• Visit early morning to avoid crowds\n• Hire a licensed guide for detailed information\n• Don't carry prohibited items (tripods, drones)\n• Wear comfortable shoes for walking",
            entryFee: "₹50 for Indians, ₹1300 for foreigners",
            openingHours: "6:00 AM to 7:00 PM (Closed on Fridays)",
            nearbyAttractions: "Agra Fort, Fatehpur Sikri, Mehtab Bagh",
            tags: ["Historical", "Architecture", "UNESCO"],
            featured: true
        },
        {
            id: 2,
            name: "Bali",
            location: "Indonesia",
            city: "Denpasar",
            country: "Indonesia",
            type: "beach",
            rating: 4.9,
            bestTime: "April to October",
            stay: "5-7 days",
            priceRange: "$$",
            image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
            description: "Bali is known for its forested volcanic mountains, iconic rice paddies, beaches and coral reefs. It's famous for its yoga and meditation retreats, and vibrant Hindu culture.",
            youtubeUrl: "https://www.youtube.com/embed/2B9r7bw8UGA",
            whereToStay: "• Luxury: Four Seasons Resort Bali at Sayan\n• Mid-range: Amnaya Resort Kuta\n• Budget: Pondok Ayu Hotel",
            travelTips: "• Rent a scooter for easy transportation\n• Try local warungs (eateries) for authentic food\n• Respect temple customs (wear sarong)\n• Learn basic Indonesian phrases",
            entryFee: "Free (Visa required for some nationalities)",
            openingHours: "24/7",
            nearbyAttractions: "Ubud Monkey Forest, Tanah Lot Temple, Uluwatu Temple",
            tags: ["Beach", "Culture", "Nature"],
            featured: true
        },
        {
            id: 3,
            name: "Paris",
            location: "France",
            city: "Paris",
            country: "France",
            type: "city",
            rating: 4.7,
            bestTime: "April-June, September-October",
            stay: "4-5 days",
            priceRange: "$$$",
            image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
            description: "Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine.",
            youtubeUrl: "https://www.youtube.com/embed/UfEiKK-iX70",
            whereToStay: "• Luxury: Hôtel Plaza Athénée\n• Mid-range: Hôtel Saint-Marc\n• Budget: Hôtel Marais Bastille",
            travelTips: "• Get a Paris Museum Pass for multiple attractions\n• Use the Metro for easy transportation\n• Book Eiffel Tower tickets in advance\n• Try local bakeries for fresh croissants",
            entryFee: "Varies by attraction",
            openingHours: "Varies by attraction",
            nearbyAttractions: "Eiffel Tower, Louvre Museum, Notre-Dame Cathedral",
            tags: ["City", "Romantic", "Art"],
            featured: false
        },
        {
            id: 4,
            name: "Swiss Alps",
            location: "Switzerland",
            city: "Interlaken",
            country: "Switzerland",
            type: "mountain",
            rating: 4.9,
            bestTime: "June-September, December-March",
            stay: "5-7 days",
            priceRange: "$$$",
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
            description: "The Swiss Alps offer breathtaking mountain scenery, world-class skiing, hiking trails, and charming villages with traditional Swiss culture. Perfect for adventure and relaxation.",
            youtubeUrl: "https://www.youtube.com/embed/3aGK1pX6qk4",
            whereToStay: "• Luxury: The Cambrian Adelboden\n• Mid-range: Hotel Alpenrose\n• Budget: Youth Hostel Interlaken",
            travelTips: "• Get a Swiss Travel Pass for trains\n• Carry warm clothing year-round\n• Try Swiss chocolate and cheese\n• Book ski equipment in advance",
            entryFee: "Free (Activities have separate fees)",
            openingHours: "24/7",
            nearbyAttractions: "Jungfraujoch, Matterhorn, Lake Geneva",
            tags: ["Mountains", "Adventure", "Skiing"],
            featured: true
        },
        {
            id: 5,
            name: "Great Wall of China",
            location: "China",
            city: "Beijing",
            country: "China",
            type: "historical",
            rating: 4.6,
            bestTime: "April-May, September-October",
            stay: "1-2 days",
            priceRange: "$",
            image: "https://images.unsplash.com/photo-1513805959325-2c4b65d05e81?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
            description: "The Great Wall of China is a series of fortifications made of stone, brick, tamped earth, wood, and other materials. It was built to protect Chinese states from invasions.",
            youtubeUrl: "https://www.youtube.com/embed/23oH5NEvRkY",
            whereToStay: "• Luxury: Brickyard Retreat\n• Mid-range: Commune by the Great Wall\n• Budget: Beijing Downtown Backpackers",
            travelTips: "• Visit Mutianyu section for fewer crowds\n• Wear comfortable hiking shoes\n• Carry water and sunscreen\n• Avoid weekends and holidays",
            entryFee: "¥45-65 depending on section",
            openingHours: "7:30 AM to 5:30 PM",
            nearbyAttractions: "Forbidden City, Summer Palace, Temple of Heaven",
            tags: ["Historical", "Architecture", "UNESCO"],
            featured: false
        },
        {
            id: 6,
            name: "Maldives",
            location: "Maldives",
            city: "Malé",
            country: "Maldives",
            type: "beach",
            rating: 4.9,
            bestTime: "November to April",
            stay: "5-7 days",
            priceRange: "$$$",
            image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
            description: "The Maldives is a tropical paradise in the Indian Ocean known for its crystal-clear waters, white sandy beaches, and luxurious overwater bungalows.",
            youtubeUrl: "https://www.youtube.com/embed/8-aqF8YqQ9c",
            whereToStay: "• Luxury: Soneva Fushi\n• Mid-range: Cinnamon Dhonveli Maldives\n• Budget: Maafushi Island Guesthouse",
            travelTips: "• Book water activities in advance\n• Respect local customs and dress modestly\n• Try local Maldivian cuisine\n• Use reef-safe sunscreen",
            entryFee: "Free (Visa on arrival)",
            openingHours: "24/7",
            nearbyAttractions: "Malé Fish Market, Artificial Beach, Maldives Victory",
            tags: ["Beach", "Luxury", "Honeymoon"],
            featured: true
        },
        {
            id: 7,
            name: "Tokyo",
            location: "Japan",
            city: "Tokyo",
            country: "Japan",
            type: "city",
            rating: 4.8,
            bestTime: "March-May, September-November",
            stay: "5-7 days",
            priceRange: "$$$",
            image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
            description: "Tokyo is a bustling metropolis that seamlessly blends ultramodern and traditional attractions, from neon-lit skyscrapers to historic temples.",
            youtubeUrl: "https://www.youtube.com/embed/_YGnN4UY9_o",
            whereToStay: "• Luxury: The Ritz-Carlton Tokyo\n• Mid-range: Hotel Gracery Shinjuku\n• Budget: Nine Hours Shinjuku-North",
            travelTips: "• Get a Suica card for transportation\n• Try street food in Shibuya\n• Visit temples early morning\n• Learn basic Japanese phrases",
            entryFee: "Free (Visa required)",
            openingHours: "Varies by attraction",
            nearbyAttractions: "Shibuya Crossing, Tokyo Skytree, Meiji Shrine",
            tags: ["City", "Modern", "Culture"],
            featured: false
        },
        {
            id: 8,
            name: "Rocky Mountains",
            location: "Canada",
            city: "Banff",
            country: "Canada",
            type: "mountain",
            rating: 4.7,
            bestTime: "June-September, December-March",
            stay: "4-6 days",
            priceRange: "$$",
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
            description: "The Canadian Rockies offer stunning mountain landscapes, turquoise lakes, and abundant wildlife. Perfect for hiking, skiing, and photography.",
            youtubeUrl: "https://www.youtube.com/embed/ee7QLCqJ6Hc",
            whereToStay: "• Luxury: Fairmont Banff Springs\n• Mid-range: Banff Caribou Lodge\n• Budget: HI Banff Alpine Centre",
            travelTips: "• Buy a Parks Canada Discovery Pass\n• Carry bear spray for hiking\n• Book accommodations well in advance\n• Visit Lake Louise early",
            entryFee: "$10.50 per adult daily",
            openingHours: "24/7",
            nearbyAttractions: "Lake Louise, Moraine Lake, Columbia Icefield",
            tags: ["Mountains", "Nature", "Wildlife"],
            featured: true
        }
    ];

    filteredDestinations = [...destinations];
    renderDestinations();
    populateFeedbackSelect();
    populateTopDestinations();
}

// ========== RENDER DESTINATIONS ==========
function renderDestinations() {
    const grid = document.getElementById('destinationsGrid');
    grid.innerHTML = '';
    
    const destinationsToShow = filteredDestinations.slice(0, visibleCount);
    
    destinationsToShow.forEach((dest, index) => {
        const card = createDestinationCard(dest, index);
        grid.appendChild(card);
    });
    
    // Update load more button
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (visibleCount >= filteredDestinations.length) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'flex';
    }
    
    // Add event listeners to explore buttons
    setTimeout(() => {
        document.querySelectorAll('.explore-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const id = parseInt(this.getAttribute('data-id'));
                openExploreModal(id);
            });
        });
    }, 100);
}

function createDestinationCard(dest, index) {
    const card = document.createElement('div');
    card.className = `destination-card ${currentView}-view ${dest.featured ? 'featured' : ''}`;
    card.style.animationDelay = `${index * 0.1}s`;
    
    // Determine badge based on type
    let badge = '';
    switch(dest.type) {
        case 'beach': badge = '🏖️ Beach'; break;
        case 'mountain': badge = '⛰️ Mountain'; break;
        case 'city': badge = '🏙️ City'; break;
        case 'historical': badge = '🏛️ Historical'; break;
    }
    
    card.innerHTML = `
        <div class="destination-badge">${badge}</div>
        <img src="${dest.image}" alt="${dest.name}" class="destination-img">
        <div class="destination-content">
            <div class="destination-header">
                <h3><i class="fas fa-map-marker-alt"></i> ${dest.name}</h3>
                <div class="destination-rating">
                    <i class="fas fa-star"></i> ${dest.rating}
                </div>
            </div>
            <div class="destination-location">
                <i class="fas fa-location-dot"></i> ${dest.location}
            </div>
            <div class="destination-tags">
                ${dest.tags.map(tag => `<span class="destination-tag">${tag}</span>`).join('')}
            </div>
            <p class="destination-description">${dest.description}</p>
            <div class="destination-meta">
                <div class="meta-item">
                    <i class="fas fa-calendar-alt"></i>
                    <span>${dest.bestTime}</span>
                </div>
                <div class="meta-item">
                    <i class="fas fa-bed"></i>
                    <span>${dest.stay}</span>
                </div>
                <div class="meta-item">
                    <i class="fas fa-tag"></i>
                    <span>${dest.priceRange}</span>
                </div>
            </div>
            <button class="explore-btn" data-id="${dest.id}">
                <i class="fas fa-search"></i> Explore Destination
                <i class="fas fa-arrow-right"></i>
            </button>
        </div>
    `;
    
    return card;
}

// ========== SEARCH FUNCTIONALITY ==========
function initSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchClear = document.getElementById('searchClear');
    const searchResults = document.getElementById('searchResults');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    // Real-time search
    searchInput.addEventListener('input', debounce(function() {
        performSearch();
    }, 300));
    
    // Clear search
    searchClear.addEventListener('click', function() {
        searchInput.value = '';
        searchInput.focus();
        performSearch();
    });
    
    // Filter buttons
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            filterButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentFilter = this.dataset.filter;
            performSearch();
        });
    });
    
    // Show search results on focus
    searchInput.addEventListener('focus', function() {
        if (this.value.trim() || filteredDestinations.length > 0) {
            performSearch();
        }
    });
    
    // Close search results when clicking outside
    document.addEventListener('click', function(e) {
        if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
            searchResults.style.display = 'none';
        }
    });
}

function performSearch() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
    const searchResults = document.getElementById('searchResults');
    
    // Filter destinations
    filteredDestinations = destinations.filter(dest => {
        // Text search
        const textMatch = searchTerm === '' || 
            dest.name.toLowerCase().includes(searchTerm) ||
            dest.location.toLowerCase().includes(searchTerm) ||
            dest.city.toLowerCase().includes(searchTerm) ||
            dest.country.toLowerCase().includes(searchTerm) ||
            dest.description.toLowerCase().includes(searchTerm) ||
            dest.tags.some(tag => tag.toLowerCase().includes(searchTerm));
        
        // Type filter
        const typeMatch = currentFilter === 'all' || dest.type === currentFilter;
        
        return textMatch && typeMatch;
    });
    
    // Sort results
    sortDestinations();
    
    // Update UI
    renderDestinations();
    displaySearchResults();
    
    // Update result count
    updateResultCount();
}

function displaySearchResults() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
    const searchResults = document.getElementById('searchResults');
    
    if (searchTerm === '' || filteredDestinations.length === 0) {
        searchResults.style.display = 'none';
        return;
    }
    
    let html = '';
    
    if (filteredDestinations.length === 0) {
        html = `
            <div class="no-results">
                <i class="fas fa-map-marker-slash"></i>
                <p>No destinations found. Try searching by name, city, or country.</p>
            </div>
        `;
    } else {
        filteredDestinations.slice(0, 5).forEach(dest => {
            html += `
                <div class="search-result-item" data-id="${dest.id}">
                    <img src="${dest.image}" alt="${dest.name}" class="result-img">
                    <div class="result-info">
                        <h4>${dest.name}</h4>
                        <p class="result-location"><i class="fas fa-map-marker-alt"></i> ${dest.location}</p>
                        <div class="result-tags">
                            <span class="result-tag">${dest.type}</span>
                            <span class="result-tag">${dest.priceRange}</span>
                        </div>
                    </div>
                    <i class="fas fa-chevron-right"></i>
                </div>
            `;
        });
        
        if (filteredDestinations.length > 5) {
            html += `
                <div class="search-result-item view-all">
                    <div class="result-info">
                        <p>View all ${filteredDestinations.length} results</p>
                    </div>
                </div>
            `;
        }
    }
    
    searchResults.innerHTML = html;
    searchResults.style.display = 'block';
    
    // Add click handlers
    document.querySelectorAll('.search-result-item:not(.view-all)').forEach(item => {
        item.addEventListener('click', function() {
            const id = parseInt(this.getAttribute('data-id'));
            searchResults.style.display = 'none';
            document.getElementById('searchInput').value = '';
            openExploreModal(id);
        });
    });
    
    // View all handler
    const viewAllBtn = document.querySelector('.view-all');
    if (viewAllBtn) {
        viewAllBtn.addEventListener('click', function() {
            searchResults.style.display = 'none';
            document.getElementById('destinations').scrollIntoView({ behavior: 'smooth' });
        });
    }
}

// ========== VIEW TOGGLE ==========
function initViewToggle() {
    const viewButtons = document.querySelectorAll('.view-btn');
    const grid = document.getElementById('destinationsGrid');
    
    viewButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            viewButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentView = this.dataset.view;
            grid.classList.toggle('list-view', currentView === 'list');
            renderDestinations();
        });
    });
}

// ========== SORTING ==========
function initSorting() {
    const sortSelect = document.getElementById('sortSelect');
    
    sortSelect.addEventListener('change', function() {
        currentSort = this.value;
        sortDestinations();
        renderDestinations();
    });
}

function sortDestinations() {
    switch(currentSort) {
        case 'name':
            filteredDestinations.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'popular':
            filteredDestinations.sort((a, b) => b.rating - a.rating);
            break;
        case 'rating':
            filteredDestinations.sort((a, b) => b.rating - a.rating);
            break;
        default:
            // Default: featured first, then by rating
            filteredDestinations.sort((a, b) => {
                if (a.featured && !b.featured) return -1;
                if (!a.featured && b.featured) return 1;
                return b.rating - a.rating;
            });
    }
}

// ========== LOAD MORE ==========
function initLoadMore() {
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    
    loadMoreBtn.addEventListener('click', function() {
        if (isLoading) return;
        
        isLoading = true;
        this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
        
        // Simulate loading
        setTimeout(() => {
            visibleCount += 6;
            renderDestinations();
            isLoading = false;
            this.innerHTML = '<i class="fas fa-sync-alt"></i> Load More Destinations';
        }, 800);
    });
}

// ========== EXPLORE MODAL ==========
function openExploreModal(id) {
    const dest = destinations.find(d => d.id === id);
    if (!dest) return;
    
    const modal = document.getElementById('exploreModal');
    const title = document.getElementById('exploreModalTitle');
    const body = document.getElementById('exploreModalBody');
    
    title.textContent = dest.name;
    
    body.innerHTML = `
        <div class="destination-hero">
            <img src="${dest.image}" alt="${dest.name}">
            <div class="destination-hero-content">
                <h2>${dest.name}</h2>
                <p>${dest.location} • ${dest.country}</p>
            </div>
        </div>
        
        <div class="modal-grid">
            <div class="detail-card">
                <h4><i class="fas fa-info-circle"></i> Basic Information</h4>
                <p><strong>Best Time to Visit:</strong> ${dest.bestTime}</p>
                <p><strong>Recommended Stay:</strong> ${dest.stay}</p>
                <p><strong>Entry Fee:</strong> ${dest.entryFee}</p>
                <p><strong>Opening Hours:</strong> ${dest.openingHours}</p>
                <p><strong>Price Range:</strong> ${dest.priceRange}</p>
            </div>
            
            <div class="detail-card">
                <h4><i class="fas fa-hotel"></i> Where to Stay</h4>
                <p>${dest.whereToStay.replace(/\n/g, '<br>')}</p>
            </div>
            
            <div class="detail-card">
                <h4><i class="fas fa-lightbulb"></i> Travel Tips</h4>
                <p>${dest.travelTips.replace(/\n/g, '<br>')}</p>
            </div>
            
            <div class="detail-card">
                <h4><i class="fas fa-map-signs"></i> Nearby Attractions</h4>
                <p>${dest.nearbyAttractions}</p>
            </div>
        </div>
        
        <div class="detail-card">
            <h4><i class="fas fa-book-open"></i> About ${dest.name}</h4>
            <p>${dest.description}</p>
        </div>
        
        <div class="video-container">
            <iframe src="${dest.youtubeUrl}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        
        <div class="youtube-btn-container">
            <a href="${dest.youtubeUrl}" target="_blank" class="youtube-btn">
                <i class="fab fa-youtube"></i> Watch Full Video on YouTube
            </a>
        </div>
    `;
    
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    // Close modal handlers
    const closeBtn = document.getElementById('closeExploreModal');
    closeBtn.onclick = () => closeModal(modal);
    
    modal.onclick = (e) => {
        if (e.target === modal) closeModal(modal);
    };
}

function closeModal(modal) {
    modal.style.opacity = '0';
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        modal.style.opacity = '1';
    }, 300);
}

// ========== FEEDBACK FORM ==========
function initFeedbackForm() {
    const feedbackBtn = document.getElementById('feedbackBtn');
    const feedbackModal = document.getElementById('feedbackModal');
    const closeFeedbackBtn = document.getElementById('closeFeedbackModal');
    const feedbackForm = document.getElementById('feedbackForm');
    const starRating = document.getElementById('starRating');
    const ratingValue = document.getElementById('ratingValue');
    const experienceText = document.getElementById('experience');
    const charCount = document.getElementById('charCount');
    const uploadArea = document.getElementById('uploadArea');
    const photoUpload = document.getElementById('photoUpload');
    const uploadPreview = document.getElementById('uploadPreview');
    
    let selectedRating = 0;
    let uploadedFiles = [];
    
    // Star rating
    starRating.querySelectorAll('span').forEach((star, index) => {
        star.addEventListener('click', () => {
            selectedRating = index + 1;
            ratingValue.textContent = selectedRating;
            starRating.querySelectorAll('span').forEach((s, i) => {
                s.classList.toggle('active', i < selectedRating);
            });
        });
    });
    
    // Character counter
    experienceText.addEventListener('input', () => {
        const count = experienceText.value.length;
        charCount.textContent = count;
        charCount.style.color = count > 500 ? 'var(--danger)' : 'var(--gray)';
    });
    
    // File upload
    uploadArea.addEventListener('click', () => photoUpload.click());
    
    photoUpload.addEventListener('change', (e) => {
        uploadedFiles = Array.from(e.target.files);
        updateUploadPreview();
    });
    
    // Drag and drop
    uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.style.borderColor = 'var(--primary)';
        uploadArea.style.background = 'rgba(45, 135, 240, 0.05)';
    });
    
    uploadArea.addEventListener('dragleave', () => {
        uploadArea.style.borderColor = '';
        uploadArea.style.background = '';
    });
    
    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadedFiles = Array.from(e.dataTransfer.files);
        updateUploadPreview();
        uploadArea.style.borderColor = '';
        uploadArea.style.background = '';
    });
    
    function updateUploadPreview() {
        uploadPreview.innerHTML = '';
        uploadedFiles.slice(0, 5).forEach((file, index) => {
            const reader = new FileReader();
            reader.onload = (e) => {
                const img = document.createElement('img');
                img.src = e.target.result;
                img.className = 'preview-image';
                img.title = file.name;
                uploadPreview.appendChild(img);
            };
            reader.readAsDataURL(file);
        });
    }
    
    // Form submission
    feedbackForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        if (selectedRating === 0) {
            alert('Please select a rating');
            return;
        }
        
        const formData = new FormData();
        formData.append('name', document.getElementById('name').value);
        formData.append('email', document.getElementById('email').value);
        formData.append('destination', document.getElementById('destinationSelect').value);
        formData.append('rating', selectedRating);
        formData.append('experience', experienceText.value);
        
        uploadedFiles.forEach(file => {
            formData.append('photos', file);
        });
        
        // Show success message
        showNotification('Thank you for your feedback! Your review has been submitted successfully.', 'success');
        
        // Reset form
        feedbackForm.reset();
        starRating.querySelectorAll('span').forEach(s => s.classList.remove('active'));
        ratingValue.textContent = '0';
        charCount.textContent = '0';
        uploadPreview.innerHTML = '';
        uploadedFiles = [];
        selectedRating = 0;
        
        // Close modal
        closeModal(feedbackModal);
    });
    
    // Modal controls
    feedbackBtn.addEventListener('click', () => {
        feedbackModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });
    
    closeFeedbackBtn.addEventListener('click', () => closeModal(feedbackModal));
    
    feedbackModal.addEventListener('click', (e) => {
        if (e.target === feedbackModal) closeModal(feedbackModal);
    });
}

function populateFeedbackSelect() {
    const select = document.getElementById('destinationSelect');
    destinations.forEach(dest => {
        const option = document.createElement('option');
        option.value = dest.id;
        option.textContent = `${dest.name}, ${dest.location}`;
        select.appendChild(option);
    });
}

// ========== THEME TOGGLE ==========
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const icon = themeToggle.querySelector('i');
    
    // Check for saved theme or prefer-color-scheme
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.documentElement.setAttribute('data-theme', 'dark');
        icon.className = 'fas fa-sun';
    }
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        
        if (currentTheme === 'dark') {
            document.documentElement.removeAttribute('data-theme');
            icon.className = 'fas fa-moon';
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            icon.className = 'fas fa-sun';
            localStorage.setItem('theme', 'dark');
        }
    });
}

// ========== BACK TO TOP ==========
function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.style.display = 'flex';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ========== MOBILE MENU ==========
function initMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const navLinks = document.getElementById('navLinks');
    
    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenu.querySelector('i').classList.toggle('fa-bars');
        mobileMenu.querySelector('i').classList.toggle('fa-times');
    });
    
    // Close menu when clicking links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenu.querySelector('i').classList.add('fa-bars');
            mobileMenu.querySelector('i').classList.remove('fa-times');
        });
    });
}

// ========== ANIMATIONS ==========
function initAnimations() {
    // Animate cards on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });
    
    document.querySelectorAll('.destination-card').forEach(card => {
        observer.observe(card);
    });
    
    // Header scroll effect
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

function initScrollAnimations() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ========== COUNTER ANIMATIONS ==========
function initCounters() {
    const counters = document.querySelectorAll('.counter');
    const speed = 200;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = +entry.target.getAttribute('data-target');
                const count = +entry.target.innerText;
                const increment = target / speed;
                
                if (count < target) {
                    entry.target.innerText = Math.ceil(count + increment);
                    setTimeout(() => observer.observe(entry.target), 1);
                } else {
                    entry.target.innerText = target;
                }
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => observer.observe(counter));
}

// ========== POPULATE TOP DESTINATIONS ==========
function populateTopDestinations() {
    const topDestinationsList = document.getElementById('topDestinations');
    const topDestinations = destinations
        .filter(d => d.featured)
        .slice(0, 5);
    
    topDestinations.forEach(dest => {
        const li = document.createElement('li');
        li.innerHTML = `
            <a href="#" data-id="${dest.id}" class="top-destination-link">
                <i class="fas fa-chevron-right"></i> ${dest.name}
            </a>
        `;
        topDestinationsList.appendChild(li);
    });
    
    // Add click handlers
    document.querySelectorAll('.top-destination-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const id = parseInt(link.getAttribute('data-id'));
            openExploreModal(id);
        });
    });
}

// ========== NEWSLETTER ==========
function initNewsletter() {
    const newsletterForm = document.getElementById('newsletterForm');
    
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input[type="email"]').value;
        
        // Simulate subscription
        showNotification('Thank you for subscribing to our newsletter!', 'success');
        newsletterForm.reset();
    });
}

// ========== UTILITY FUNCTIONS ==========
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
        <span>${message}</span>
        <button class="notification-close">&times;</button>
    `;
    
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => notification.classList.add('show'), 10);
    
    // Close button
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

function updateResultCount() {
    const searchHeader = document.querySelector('.search-header p');
    const searchTerm = document.getElementById('searchInput').value.trim();
    
    if (searchTerm) {
        searchHeader.textContent = `Found ${filteredDestinations.length} results for "${searchTerm}"`;
    } else {
        searchHeader.textContent = 'Search by name, city, country or type of experience';
    }
}

// Initialize load more after DOM is loaded
setTimeout(() => {
    initLoadMore();
}, 1000);