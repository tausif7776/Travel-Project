document.addEventListener('DOMContentLoaded', function() {
    // ========== DESTINATIONS DATA ==========
    const destinations = [
        {
            id: 1,
            name: "Taj Mahal",
            location: "Agra, India",
            city: "Agra",
            country: "India",
            bestTime: "October to March",
            stay: "2-3 days",
            image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            description: "The Taj Mahal is an ivory-white marble mausoleum on the right bank of the Yamuna river. It was commissioned in 1632 by Mughal emperor Shah Jahan to house the tomb of his favorite wife, Mumtaz Mahal.",
            youtubeUrl: "https://www.youtube.com/embed/49HTIoCccDY",
            whereToStay: "• Luxury: The Oberoi Amarvilas (near Taj Mahal)\n• Mid-range: Crystal Sarovar Premiere\n• Budget: Hotel Atulyaa Taj",
            travelTips: "• Visit early morning to avoid crowds\n• Hire a licensed guide for detailed information\n• Don't carry prohibited items (tripods, drones)\n• Wear comfortable shoes for walking",
            entryFee: "₹50 for Indians, ₹1300 for foreigners",
            openingHours: "6:00 AM to 7:00 PM (Closed on Fridays)",
            nearbyAttractions: "Agra Fort, Fatehpur Sikri, Mehtab Bagh"
        },
        {
            id: 2,
            name: "Bali",
            location: "Indonesia",
            city: "Denpasar",
            country: "Indonesia",
            bestTime: "April to October",
            stay: "5-7 days",
            image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            description: "Bali is known for its forested volcanic mountains, iconic rice paddies, beaches and coral reefs. It's famous for its yoga and meditation retreats, and vibrant Hindu culture.",
            youtubeUrl: "https://www.youtube.com/embed/2B9r7bw8UGA",
            whereToStay: "• Luxury: Four Seasons Resort Bali at Sayan\n• Mid-range: Amnaya Resort Kuta\n• Budget: Pondok Ayu Hotel",
            travelTips: "• Rent a scooter for easy transportation\n• Try local warungs (eateries) for authentic food\n• Respect temple customs (wear sarong)\n• Learn basic Indonesian phrases",
            entryFee: "Free (Visa required for some nationalities)",
            openingHours: "24/7",
            nearbyAttractions: "Ubud Monkey Forest, Tanah Lot Temple, Uluwatu Temple"
        },
        {
            id: 3,
            name: "Paris",
            location: "France",
            city: "Paris",
            country: "France",
            bestTime: "April-June, September-October",
            stay: "4-5 days",
            image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            description: "Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine.",
            youtubeUrl: "https://www.youtube.com/embed/UfEiKK-iX70",
            whereToStay: "• Luxury: Hôtel Plaza Athénée\n• Mid-range: Hôtel Saint-Marc\n• Budget: Hôtel Marais Bastille",
            travelTips: "• Get a Paris Museum Pass for multiple attractions\n• Use the Metro for easy transportation\n• Book Eiffel Tower tickets in advance\n• Try local bakeries for fresh croissants",
            entryFee: "Varies by attraction",
            openingHours: "Varies by attraction",
            nearbyAttractions: "Eiffel Tower, Louvre Museum, Notre-Dame Cathedral"
        },
        {
            id: 4,
            name: "Swiss Alps",
            location: "Switzerland",
            city: "Interlaken",
            country: "Switzerland",
            bestTime: "June-September, December-March",
            stay: "5-7 days",
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            description: "The Swiss Alps offer breathtaking mountain scenery, world-class skiing, hiking trails, and charming villages with traditional Swiss culture. Perfect for adventure and relaxation.",
            youtubeUrl: "https://www.youtube.com/embed/3aGK1pX6qk4",
            whereToStay: "• Luxury: The Cambrian Adelboden\n• Mid-range: Hotel Alpenrose\n• Budget: Youth Hostel Interlaken",
            travelTips: "• Get a Swiss Travel Pass for trains\n• Carry warm clothing year-round\n• Try Swiss chocolate and cheese\n• Book ski equipment in advance",
            entryFee: "Free (Activities have separate fees)",
            openingHours: "24/7",
            nearbyAttractions: "Jungfraujoch, Matterhorn, Lake Geneva"
        },
        {
            id: 5,
            name: "Great Wall of China",
            location: "China",
            city: "Beijing",
            country: "China",
            bestTime: "April-May, September-October",
            stay: "1-2 days",
            image: "https://images.unsplash.com/photo-1513805959325-2c4b65d05e81?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            description: "The Great Wall of China is a series of fortifications made of stone, brick, tamped earth, wood, and other materials. It was built to protect Chinese states from invasions.",
            youtubeUrl: "https://www.youtube.com/embed/23oH5NEvRkY",
            whereToStay: "• Luxury: Brickyard Retreat\n• Mid-range: Commune by the Great Wall\n• Budget: Beijing Downtown Backpackers",
            travelTips: "• Visit Mutianyu section for fewer crowds\n• Wear comfortable hiking shoes\n• Carry water and sunscreen\n• Avoid weekends and holidays",
            entryFee: "¥45-65 depending on section",
            openingHours: "7:30 AM to 5:30 PM",
            nearbyAttractions: "Forbidden City, Summer Palace, Temple of Heaven"
        },
        {
            id: 6,
            name: "Machu Picchu",
            location: "Peru",
            city: "Cusco",
            country: "Peru",
            bestTime: "May to September",
            stay: "2-3 days",
            image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            description: "Machu Picchu is a 15th-century Inca citadel located in the Eastern Cordillera of southern Peru on a mountain ridge. It is the most familiar icon of Inca civilization.",
            youtubeUrl: "https://www.youtube.com/embed/lNIEZ61PyG0",
            whereToStay: "• Luxury: Belmond Sanctuary Lodge\n• Mid-range: Sumaq Machu Picchu Hotel\n• Budget: Hostal Machu Picchu",
            travelTips: "• Book tickets months in advance\n• Acclimatize to altitude in Cusco first\n• Hire a local guide for history\n• Start early to avoid crowds",
            entryFee: "$45-70 depending on circuit",
            openingHours: "6:00 AM to 5:30 PM",
            nearbyAttractions: "Sacred Valley, Rainbow Mountain, Ollantaytambo"
        },
        {
            id: 7,
            name: "Pyramids of Giza",
            location: "Egypt",
            city: "Giza",
            country: "Egypt",
            bestTime: "October to April",
            stay: "1-2 days",
            image: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            description: "The Giza pyramid complex includes the Great Pyramid of Giza, the Pyramid of Khafre, and the Pyramid of Menkaure. They were built during the Fourth Dynasty of the Old Kingdom.",
            youtubeUrl: "https://www.youtube.com/embed/miL2uPfeQAA",
            whereToStay: "• Luxury: Marriott Mena House\n• Mid-range: Le Méridien Pyramids\n• Budget: Pyramids View Inn",
            travelTips: "• Visit early morning or late afternoon\n• Hire a certified guide\n• Beware of camel ride scams\n• Carry cash for tickets",
            entryFee: "200 EGP (main area)",
            openingHours: "8:00 AM to 5:00 PM",
            nearbyAttractions: "Sphinx, Egyptian Museum, Khan el-Khalili"
        },
        {
            id: 8,
            name: "Statue of Liberty",
            location: "New York, USA",
            city: "New York",
            country: "USA",
            bestTime: "April-June, September-October",
            stay: "1 day",
            image: "https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            description: "The Statue of Liberty is a colossal neoclassical sculpture on Liberty Island in New York Harbor within New York City. It was a gift from France to the United States.",
            youtubeUrl: "https://www.youtube.com/embed/usHRc7G0gVo",
            whereToStay: "• Luxury: The Ritz-Carlton\n• Mid-range: M Social Hotel\n• Budget: HI NYC Hostel",
            travelTips: "• Book ferry tickets online in advance\n• Security check takes time\n• Crown access requires separate ticket\n• Best photos from Battery Park",
            entryFee: "$24.50 for adults (ferry included)",
            openingHours: "8:30 AM to 4:00 PM",
            nearbyAttractions: "Ellis Island, Battery Park, One World Observatory"
        },
        {
            id: 9,
            name: "Sydney Opera House",
            location: "Australia",
            city: "Sydney",
            country: "Australia",
            bestTime: "September-November, March-May",
            stay: "2-3 days",
            image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            description: "The Sydney Opera House is a multi-venue performing arts centre at Sydney Harbour. It's one of the 20th century's most famous buildings and a UNESCO World Heritage Site.",
            youtubeUrl: "https://www.youtube.com/embed/CEPA-0S1s7o",
            whereToStay: "• Luxury: Park Hyatt Sydney\n• Mid-range: Sir Stamford at Circular Quay\n• Budget: Sydney Harbour YHA",
            travelTips: "• Take a guided tour for backstage access\n• Book show tickets in advance\n• Visit at sunset for best photos\n• Combine with Harbour Bridge visit",
            entryFee: "$42 for guided tour",
            openingHours: "9:00 AM to 5:00 PM",
            nearbyAttractions: "Sydney Harbour Bridge, Royal Botanic Garden, The Rocks"
        },
        {
            id: 10,
            name: "Eiffel Tower",
            location: "Paris, France",
            city: "Paris",
            country: "France",
            bestTime: "April-June, September-October",
            stay: "1 day",
            image: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            description: "The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France. It is named after engineer Gustave Eiffel, whose company designed and built the tower.",
            youtubeUrl: "https://www.youtube.com/embed/ziLDDsdvF2w",
            whereToStay: "• Luxury: Shangri-La Hotel Paris\n• Mid-range: Hotel Eiffel Turenne\n• Budget: Hotel de la Paix",
            travelTips: "• Book tickets online to skip lines\n• Visit at night for light show\n• Second floor has best views\n• Avoid peak hours (11am-3pm)",
            entryFee: "€10-26 depending on access",
            openingHours: "9:30 AM to 11:45 PM",
            nearbyAttractions: "Champ de Mars, Seine River, Trocadéro Gardens"
        }
    ];

    // ========== MOBILE MENU ==========
    const mobileMenu = document.getElementById('mobileMenu');
    const navLinks = document.getElementById('navLinks');
    
    mobileMenu.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        this.querySelector('i').classList.toggle('fa-bars');
        this.querySelector('i').classList.toggle('fa-times');
    });
    
    // ========== RENDER DESTINATIONS ==========
    const destinationsGrid = document.getElementById('destinationsGrid');
    
    function renderDestinations() {
        destinationsGrid.innerHTML = '';
        
        destinations.forEach((dest, index) => {
            const card = document.createElement('div');
            card.className = 'destination-card';
            card.style.animationDelay = `${index * 0.1}s`;
            
            card.innerHTML = `
                <img src="${dest.image}" alt="${dest.name}" class="destination-img">
                <div class="destination-content">
                    <h3><i class="fas fa-map-marker-alt"></i> ${dest.name}</h3>
                    <div class="destination-info">
                        <div class="info-item">
                            <i class="fas fa-location-dot"></i>
                            <span>${dest.location}</span>
                        </div>
                        <div class="info-item">
                            <i class="fas fa-calendar-alt"></i>
                            <span>${dest.bestTime}</span>
                        </div>
                        <div class="info-item">
                            <i class="fas fa-bed"></i>
                            <span>${dest.stay}</span>
                        </div>
                    </div>
                    <p>${dest.description}</p>
                    <div class="destination-buttons">
                        <button class="explore-btn" data-id="${dest.id}">
                            <i class="fas fa-search"></i> Explore ${dest.name}
                        </button>
                    </div>
                </div>
            `;
            
            destinationsGrid.appendChild(card);
        });
        
        // Add event listeners to explore buttons
        document.querySelectorAll('.explore-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const id = parseInt(this.getAttribute('data-id'));
                openExploreModal(id);
            });
        });
    }
    
    // ========== SEARCH FUNCTIONALITY ==========
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    
    // Initialize search with welcome message
    displaySearchMessage("Type to search destinations...");
    
    // Show search results on input
    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase().trim();
        
        if (query.length === 0) {
            displaySearchMessage("Type to search destinations...");
            return;
        }
        
        // Filter destinations based on query
        const filtered = destinations.filter(dest => {
            // Search in multiple fields
            const searchText = `
                ${dest.name.toLowerCase()}
                ${dest.location.toLowerCase()}
                ${dest.city.toLowerCase()}
                ${dest.country.toLowerCase()}
                ${dest.description.toLowerCase()}
            `;
            
            return searchText.includes(query);
        });
        
        displaySearchResults(filtered);
    });
    
    // Show search results when search box is focused
    searchInput.addEventListener('focus', function() {
        const query = this.value.toLowerCase().trim();
        
        if (query.length === 0) {
            displaySearchMessage("Type to search destinations...");
        } else {
            const filtered = destinations.filter(dest => {
                const searchText = `
                    ${dest.name.toLowerCase()}
                    ${dest.location.toLowerCase()}
                    ${dest.city.toLowerCase()}
                    ${dest.country.toLowerCase()}
                    ${dest.description.toLowerCase()}
                `;
                
                return searchText.includes(query);
            });
            
            displaySearchResults(filtered);
        }
    });
    
    function displaySearchMessage(message) {
        searchResults.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <p>${message}</p>
            </div>
        `;
        searchResults.style.display = 'block';
    }
    
    function displaySearchResults(results) {
        if (results.length === 0) {
            searchResults.innerHTML = `
                <div class="no-results">
                    <i class="fas fa-map-marker-slash"></i>
                    <p>No destinations found. Try searching by name, city, or country.</p>
                </div>
            `;
            searchResults.style.display = 'block';
            return;
        }
        
        let html = '';
        results.forEach(dest => {
            html += `
                <div class="search-result-item" data-id="${dest.id}">
                    <img src="${dest.image}" alt="${dest.name}" class="result-img">
                    <div class="result-info">
                        <h4>${dest.name}</h4>
                        <p class="result-location"><i class="fas fa-map-marker-alt"></i> ${dest.location}</p>
                        <p><i class="fas fa-calendar-alt"></i> Best Time: ${dest.bestTime}</p>
                        <p><i class="fas fa-bed"></i> Recommended Stay: ${dest.stay}</p>
                    </div>
                </div>
            `;
        });
        
        searchResults.innerHTML = html;
        searchResults.style.display = 'block';
        
        // Add click event to search results
        document.querySelectorAll('.search-result-item').forEach(item => {
            item.addEventListener('click', function() {
                const id = parseInt(this.getAttribute('data-id'));
                searchInput.value = '';
                searchResults.style.display = 'none';
                
                // Open explore modal
                openExploreModal(id);
                
                // Scroll to top
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        });
    }
    
    // Close search results when clicking outside
    document.addEventListener('click', function(e) {
        if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
            searchResults.style.display = 'none';
        }
    });
    
    // ========== EXPLORE MODAL ==========
    const exploreModal = document.getElementById('exploreModal');
    const closeExploreModal = document.getElementById('closeExploreModal');
    const exploreModalTitle = document.getElementById('exploreModalTitle');
    const exploreModalBody = document.getElementById('exploreModalBody');
    
    function openExploreModal(id) {
        const dest = destinations.find(d => d.id === id);
        if (!dest) return;
        
        exploreModalTitle.textContent = `${dest.name} - Complete Travel Guide`;
        
        exploreModalBody.innerHTML = `
            <div class="modal-details-grid">
                <div class="detail-box">
                    <h4><i class="fas fa-info-circle"></i> Basic Information</h4>
                    <p><strong>Location:</strong> ${dest.location}</p>
                    <p><strong>City:</strong> ${dest.city}</p>
                    <p><strong>Country:</strong> ${dest.country}</p>
                    <p><strong>Best Time to Visit:</strong> ${dest.bestTime}</p>
                    <p><strong>Recommended Stay:</strong> ${dest.stay}</p>
                    <p><strong>Entry Fee:</strong> ${dest.entryFee}</p>
                    <p><strong>Opening Hours:</strong> ${dest.openingHours}</p>
                </div>
                
                <div class="detail-box">
                    <h4><i class="fas fa-hotel"></i> Where to Stay</h4>
                    <p>${dest.whereToStay.replace(/\n/g, '<br>')}</p>
                </div>
            </div>
            
            <div class="detail-box">
                <h4><i class="fas fa-lightbulb"></i> Travel Tips</h4>
                <p>${dest.travelTips.replace(/\n/g, '<br>')}</p>
            </div>
            
            <div class="detail-box">
                <h4><i class="fas fa-map-signs"></i> Nearby Attractions</h4>
                <p>${dest.nearbyAttractions}</p>
            </div>
            
            <div class="youtube-button-container">
                <a href="${dest.youtubeUrl}" target="_blank" class="youtube-btn">
                    <i class="fab fa-youtube"></i> Watch YouTube Video
                </a>
            </div>
            
            <div class="video-container">
                <iframe src="${dest.youtubeUrl}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            
            <div class="detail-box">
                <h4><i class="fas fa-book-open"></i> Description</h4>
                <p>${dest.description}</p>
            </div>
        `;
        
        exploreModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        
        // Scroll to top of modal
        exploreModal.scrollTop = 0;
    }
    
    closeExploreModal.addEventListener('click', () => {
        exploreModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    exploreModal.addEventListener('click', (e) => {
        if (e.target === exploreModal) {
            exploreModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // ========== FEEDBACK MODAL ==========
    const feedbackBtn = document.getElementById('feedbackBtn');
    const feedbackModal = document.getElementById('feedbackModal');
    const closeFeedbackModal = document.getElementById('closeFeedbackModal');
    const feedbackForm = document.getElementById('feedbackForm');
    const destinationSelect = document.getElementById('destinationSelect');
    
    // Populate destination select
    destinations.forEach(dest => {
        const option = document.createElement('option');
        option.value = dest.id;
        option.textContent = `${dest.name}, ${dest.location}`;
        destinationSelect.appendChild(option);
    });
    
    feedbackBtn.addEventListener('click', () => {
        feedbackModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });
    
    closeFeedbackModal.addEventListener('click', () => {
        feedbackModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    feedbackModal.addEventListener('click', (e) => {
        if (e.target === feedbackModal) {
            feedbackModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    feedbackForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const destId = destinationSelect.value;
        const destName = destinationSelect.options[destinationSelect.selectedIndex].text;
        const rating = document.querySelector('input[name="rating"]:checked');
        const experience = document.getElementById('experience').value;
        
        if (!rating) {
            alert('Please select a rating');
            return;
        }
        
        // Show success message
        alert(`Thank you ${name}! Your feedback about ${destName} has been submitted successfully.`);
        
        // Reset form
        feedbackForm.reset();
        
        // Close modal
        feedbackModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // ========== SMOOTH SCROLLING ==========
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                navLinks.classList.remove('active');
                mobileMenu.querySelector('i').classList.remove('fa-times');
                mobileMenu.querySelector('i').classList.add('fa-bars');
            }
        });
    });
    
    // ========== INITIALIZE ==========
    renderDestinations();
    
    // Animate cards on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.destination-card').forEach(card => {
        observer.observe(card);
    });
});