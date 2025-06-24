document.addEventListener('DOMContentLoaded', function () {
    // Add saluting class to make the men salute after they line up
    setTimeout(() => {
        document.querySelector('.man1').classList.add('saluting');
        document.querySelector('.man2').classList.add('saluting');
        document.querySelector('.man3').classList.add('saluting');
        document.querySelector('.man4').classList.add('saluting');
        document.querySelector('.man5').classList.add('saluting');
    }, 6000);

    // Stop walking animations when men line up
    setTimeout(() => {
        const arms = document.querySelectorAll('.left-arm');
        const legs = document.querySelectorAll('.left-leg, .right-leg');

        arms.forEach(arm => {
            arm.style.animation = 'none';
            arm.style.transform = 'rotate(0deg)';
        });

        legs.forEach(leg => {
            leg.style.animation = 'none';
            leg.style.transform = 'rotate(0deg)';
        });
    }, 5000);
    createParticles();
    setTimeout(() => {
        createIndiaMap();
    }, 2000); // Start map creation sooner for simultaneous animation
});

// Create floating particles
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        // Random positioning
        const size = Math.random() * 3 + 1;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;

        // Random opacity
        particle.style.opacity = Math.random() * 0.5 + 0.1;

        // Random animation delay and duration
        const duration = Math.random() * 15 + 10;
        const delay = Math.random() * 10;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;


        particlesContainer.appendChild(particle);
    }
}

// Function to create and animate the India map
function createIndiaMap() {

    const indiaSvg = document.querySelector('.india-map');

    const stateData = {
        'IN-AN': {
            name: 'Andaman and Nicobar Islands',
            description: 'A union territory consisting of 572 islands in the Bay of Bengal.'
        },
        'IN-AP': {
            name: 'Andhra Pradesh',
            description: 'A state in the southeastern coastal region of India.'
        },
        'IN-AR': {
            name: 'Arunachal Pradesh',
            description: 'A state in northeastern India, also referred to as the "Land of the Rising Sun".'
        },
        'IN-AS': {
            name: 'Assam',
            description: 'A state in northeastern India known for its tea plantations and silk.'
        },
        'IN-BR': {
            name: 'Bihar',
            description: 'A state in eastern India bordering Nepal, known for its ancient heritage.'
        },
        'IN-CH': {
            name: 'Chandigarh',
            description: 'A union territory and capital of the states of Punjab and Haryana.'
        },
        'IN-CT': {
            name: 'Chhattisgarh',
            description: 'A state in central India known for its dense forests and tribal population.'
        },
        'IN-DD': {
            name: 'Daman and Diu',
            description: 'A former union territory on the western coast of India.'
        },
        'IN-DL': {
            name: 'Delhi',
            description: 'National Capital Territory and home to India\'s capital New Delhi.'
        },
        'IN-DN': {
            name: 'Dadra and Nagar Haveli',
            description: 'A union territory in western India.'
        },
        'IN-GA': {
            name: 'Goa',
            description: 'India\'s smallest state known for its beaches, nightlife, and architecture.'
        },
        'IN-GJ': {
            name: 'Gujarat',
            description: 'A state on the western coast of India with a long maritime history.'
        },
        'IN-HP': {
            name: 'Himachal Pradesh',
            description: 'A northern Indian state in the Himalayas, known for its scenic mountain views.'
        },
        'IN-HR': {
            name: 'Haryana',
            description: 'A northern state surrounding New Delhi on three sides.'
        },
        'IN-JH': {
            name: 'Jharkhand',
            description: 'A state in eastern India carved out of Bihar in 2000.'
        },
        'IN-JK': {
            name: 'Jammu and Kashmir',
            description: 'A northern region known for its mountainous landscape.'
        },
        'IN-KA': {
            name: 'Karnataka',
            description: 'A state in southwest India with a tech hub in Bangalore.'
        },
        'IN-KL': {
            name: 'Kerala',
            description: 'A state on India\'s tropical Malabar Coast known for its backwaters and beaches.'
        },
        'IN-LA': {
            name: 'Ladakh',
            description: 'A union territory established in 2019, known for its high-altitude landscape.'
        },
        'IN-LD': {
            name: 'Lakshadweep',
            description: 'A tropical archipelago of 36 atolls and coral reefs in the Laccadive Sea.'
        },
        'IN-MH': {
            name: 'Maharashtra',
            description: 'A state spanning west-central India, home to Mumbai.'
        },
        'IN-ML': {
            name: 'Meghalaya',
            description: 'A state in northeastern India known as the "abode of clouds".'
        },
        'IN-MN': {
            name: 'Manipur',
            description: 'A state in northeastern India with diverse cultures and landscapes.'
        },
        'IN-MP': {
            name: 'Madhya Pradesh',
            description: 'A state in central India known as the "heart of India".'
        },
        'IN-MZ': {
            name: 'Mizoram',
            description: 'A state in northeastern India with rolling hills and valleys.'
        },
        'IN-NL': {
            name: 'Nagaland',
            description: 'A mountainous state in northeast India known for its tribal culture.'
        },
        'IN-OR': {
            name: 'Odisha',
            description: 'An eastern state formerly known as Orissa, known for its tribal cultures and temples.'
        },
        'IN-PB': {
            name: 'Punjab',
            description: 'A state in northwest India known for its fertile lands and vibrant culture.'
        },
        'IN-PY': {
            name: 'Puducherry',
            description: 'A union territory and former French colony on the southeast coast.'
        },
        'IN-RJ': {
            name: 'Rajasthan',
            description: 'India\'s largest state known for its desert landscapes and grand palaces.'
        },
        'IN-SK': {
            name: 'Sikkim',
            description: 'A northeastern state in the Himalayas bordering Tibet, Bhutan, and Nepal.'
        },
        'IN-TG': {
            name: 'Telangana',
            description: 'A state in southern India formed in 2014, with Hyderabad as its capital.'
        },
        'IN-TN': {
            name: 'Tamil Nadu',
            description: 'A state in southern India known for its Tamil culture and Hindu temples.'
        },
        'IN-TR': {
            name: 'Tripura',
            description: 'A state in northeast India bordered by Bangladesh on three sides.'
        },
        'IN-UP': {
            name: 'Uttar Pradesh',
            description: 'India\'s most populous state, located in the northern-central part of the country.'
        },
        'IN-UT': {
            name: 'Uttarakhand',
            description: 'A state in northern India carved out of Uttar Pradesh, known for its Himalayan landscapes.'
        },
        'IN-WB': {
            name: 'West Bengal',
            description: 'An eastern state with a cultural heritage and home to Kolkata.'
        }
    };


    setTimeout(function () {
        // Get all path elements (states/regions)
        const paths = document.querySelectorAll('.india-map path');
        const stateInfo = document.querySelector('.state-info');

        console.log('Found ' + paths.length + ' path elements');

        // Animate states appearing one by one
        const animateStates = () => {

            const shuffledPaths = Array.from(paths);
            for (let i = shuffledPaths.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffledPaths[i], shuffledPaths[j]] = [shuffledPaths[j], shuffledPaths[i]];
            }

            const centralStates = ['IN-MP', 'IN-UP', 'IN-CT', 'IN-JH'];
            const northStates = ['IN-JK', 'IN-HP', 'IN-PB', 'IN-UT', 'IN-HR', 'IN-DL', 'IN-RJ'];
            const eastStates = ['IN-BR', 'IN-WB', 'IN-OR', 'IN-AS', 'IN-ML', 'IN-MN', 'IN-NL', 'IN-TR', 'IN-MZ', 'IN-AR', 'IN-SK'];
            const westStates = ['IN-GJ', 'IN-MH', 'IN-GA', 'IN-DD', 'IN-DN'];
            const southStates = ['IN-KA', 'IN-TG', 'IN-AP', 'IN-TN', 'IN-KL', 'IN-PY'];
            const islands = ['IN-AN', 'IN-LD'];


            shuffledPaths.forEach(path => {
                path.setAttribute('fill', '#4189e6');
                path.setAttribute('stroke', 'rgba(255, 255, 255, 0.3)');
                path.setAttribute('stroke-width', '0.5px');
                path.style.opacity = '0';
            });


            const animateWithDelay = (path, delay, group) => {
                setTimeout(() => {
                    path.style.animation = `stateAppear 0.8s ease forwards, statePulse 3s ease ${group === 'center' ? '1.5s' : '2.5s'} infinite`;
                }, delay);
            };

            // Base delay between state animations
            const baseDelay = 80;
            let currentDelay = 0;

            // Animate central states first
            shuffledPaths.forEach(path => {
                const stateId = path.getAttribute('id');
                if (centralStates.includes(stateId)) {
                    animateWithDelay(path, currentDelay, 'center');
                    currentDelay += baseDelay;
                }
            });

            // Then north states
            currentDelay += 200;
            shuffledPaths.forEach(path => {
                const stateId = path.getAttribute('id');
                if (northStates.includes(stateId)) {
                    animateWithDelay(path, currentDelay, 'north');
                    currentDelay += baseDelay;
                }
            });

            // Then west states
            currentDelay += 100;
            shuffledPaths.forEach(path => {
                const stateId = path.getAttribute('id');
                if (westStates.includes(stateId)) {
                    animateWithDelay(path, currentDelay, 'west');
                    currentDelay += baseDelay;
                }
            });

            // Then east states
            currentDelay += 100;
            shuffledPaths.forEach(path => {
                const stateId = path.getAttribute('id');
                if (eastStates.includes(stateId)) {
                    animateWithDelay(path, currentDelay, 'east');
                    currentDelay += baseDelay;
                }
            });

            // Then south states
            currentDelay += 100;
            shuffledPaths.forEach(path => {
                const stateId = path.getAttribute('id');
                if (southStates.includes(stateId)) {
                    animateWithDelay(path, currentDelay, 'south');
                    currentDelay += baseDelay;
                }
            });

            // Finally islands
            currentDelay += 200;
            shuffledPaths.forEach(path => {
                const stateId = path.getAttribute('id');
                if (islands.includes(stateId)) {
                    animateWithDelay(path, currentDelay, 'islands');
                    currentDelay += baseDelay;
                }
            });

            // Any remaining states
            shuffledPaths.forEach(path => {
                const stateId = path.getAttribute('id');
                if (!centralStates.includes(stateId) &&
                    !northStates.includes(stateId) &&
                    !eastStates.includes(stateId) &&
                    !westStates.includes(stateId) &&
                    !southStates.includes(stateId) &&
                    !islands.includes(stateId)) {
                    animateWithDelay(path, currentDelay, 'other');
                    currentDelay += baseDelay;
                }
            });
        };

        // Start animation
        animateStates();


        paths.forEach(path => {
            path.addEventListener('click', function () {
                console.log('Path clicked: ' + this.id);

                paths.forEach(p => {
                    p.classList.remove('selected');
                    if (p !== this) {
                        p.setAttribute('fill', '#4189e6');
                        p.style.filter = 'none';
                    }
                });

                this.classList.add('selected');
                this.setAttribute('fill', '#ff9800');
                this.style.filter = 'drop-shadow(0 0 8px rgba(255, 152, 0, 0.6))';

                // Get the state ID from the path ID
                const stateId = this.id;

                // Update state info
                if (stateData[stateId]) {
                    stateInfo.innerHTML = `
                                <div class="info-title">${stateData[stateId].name}</div>
                                <div class="info-description">${stateData[stateId].description}</div>
                            `;
                } else {
                    stateInfo.innerHTML = `
                                <div class="info-title">${this.getAttribute('title') || 'Unknown Region'}</div>
                                <div class="info-description">Information not available for this region.</div>
                            `;
                }
            });


            path.addEventListener('mouseenter', function () {
                if (!this.classList.contains('selected')) {
                    this.setAttribute('fill', '#64b5f6');
                    this.style.filter = 'drop-shadow(0 0 5px rgba(100, 181, 246, 0.6))';
                }
            });

            path.addEventListener('mouseleave', function () {
                if (!this.classList.contains('selected')) {
                    this.setAttribute('fill', '#4189e6');
                    this.style.filter = 'none';
                }
            });
        });

        console.log('Event listeners added to all paths');
    }, 500);  // 500ms delay to ensure SVG is loaded
}