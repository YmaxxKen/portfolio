const { createApp } = Vue;

createApp({
    data() {
        return {
            // Profile Data
            profile: {
                name: "Kenny Soriano",
                title: "Bachelor of Science in Computer Science",
                image: "assets/images/1x1.jpg",
                contacts: [
                    { type: 'email', icon: 'fas fa-envelope', value: 'kennysoriano2003@gmail.com' },
                    { type: 'phone', icon: 'fas fa-phone', value: '+63 921 585 5690' },
                    { type: 'location', icon: 'fas fa-map-marker-alt', value: 'Quezon City, Philippines' }
                ]
            },
            
            // Skills Data
                skills: [
            { name: 'UI/UX Design', icon: 'fas fa-pencil-ruler' },          // design-related
            { name: 'User Research', icon: 'fas fa-users' },                 // user-focused
            { name: 'Problem Solving', icon: 'fas fa-lightbulb' },           // idea/solution
            { name: 'Team Collaboration', icon: 'fas fa-handshake' },       // teamwork
            { name: 'Critical Thinking', icon: 'fas fa-brain' },             // thinking/brain
            { name: 'Wireframing & Prototyping', icon: 'fas fa-vector-square' }, // UI wireframe icon
        ],


            brandImages: [
                { src: 'assets/images/Cat.png', alt: 'Brand Styling 1' },
                { src: 'assets/images/HomeHiveBranding.png', alt: 'Brand Styling 2' },
                { src: 'assets/images/EcoAlert.png', alt: 'Brand Styling 3' },
                { src: 'assets/images/CKMJ.png', alt: 'Brand Styling 4' },
                { src: 'assets/images/Jeffix.png', alt: 'Brand Styling 5' },
                { src: 'assets/images/AllAboutPets.png', alt: 'Brand Styling 6' }
               
            ],
            
            // Tech Stack Data
            categories: [
                { id: 'all', name: 'All' },
                { id: 'Programming', name: 'Programming' },
                { id: 'T&P ', name: 'Programming Tools & Platforms' },
                { id: 'D&DT', name: 'Document & Design Tools' },
                { id: 'Frameworks', name: 'Frameworks' },
                { id: 'Libraries', name: 'Libraries' }
            ],
techStack: [
    { name: 'HTML5', icon: 'fab fa-html5', category: 'Programming' },
    { name: 'CSS3', icon: 'fab fa-css3-alt', category: 'Programming' },
    { name: 'JavaScript', icon: 'fab fa-js', category: 'Programming' },
    { name: 'Vue.js', icon: 'fab fa-vuejs', category: 'Frameworks' },
    { name: 'MySQL', icon: 'fas fa-database', category: 'Programming' },
    { name: 'PHP', icon: 'fas fa-server', category: 'Programming' },
    { name: 'Bootstrap', icon: 'fab fa-bootstrap', category: 'Libraries' },
    { name: 'Python', icon: 'fab fa-python', category: 'Programming' },
    { name: 'Java', icon: 'fab fa-java', category: 'Programming' },
    { name: 'jQuery', icon: 'fas fa-code', category: 'Libraries' },
    { name: 'Miro', icon: 'fas fa-vector-square', category: 'D&DT' },
    { name: 'Figma', icon: 'fab fa-figma', category: 'D&DT' },
    { name: 'Office 365', icon: 'fas fa-file-alt', category: 'D&DT' },
    { name: 'Canva', icon: 'fas fa-paint-brush', category: 'D&DT' },
    { name: 'Visual Studio', icon: 'fas fa-code', category: 'T&P ' },
    { name: 'XAMPP', icon: 'fas fa-server', category: 'T&P ' },
    { name: 'Hostinger', icon: 'fas fa-globe', category: 'T&P ' },
    { name: 'Git', icon: 'fab fa-git-alt', category: 'T&P ' }

]
,


            activeCategory: 'all',
            
            // Education Data
            education: [
                { 
                    year: '2022 - 2026', 
                    degree: 'Bachelor of Science in Computer Science', 
                    school: 'STI College - Novalices',
                    description: 'Relevant Courses: Web Development, Data Structures, Databases, UI/UX Design, Cybersecurity Fundamentals, Information Security, Data Privacy and ISO/IEC Standards'
                },
                { 
                    year: '2021 - 2022', 
                     degree: 'Bachelor of Science in Computer Science', 
                     school: 'STI College - Calamba',
                    description: 'Relevant Courses: Java Programming, Microsoft Office Tools, and Front-End Basic Fundamentals'
                },
            ],
            
            // Projects Data
          projects: [
    {
        id: 1,
        title: "HomeHive",
        image: "assets/images/HomeHiveBanner.png",
        shortDescription: "A Rental Property Management System with AI-Powered Predictive Maintenance and Data-Driven Decision Making.",
        description: "A web-based platform that connects tenants with available apartments while providing property owners with essential management tools.HomeHive features an easy-to-use and user-friendly design to improve the rental experience for every renter.",
        features: [
            "User authentication with role-based access (Tenant, Property Owner, Admin)",
            "Property listing and management with image uploads",
            "Rental application system with approval and rejection workflow",
            "Real-time messaging between tenants and property owners",
            "Search and filter properties by location, type, and price range",
            "Digital and Editable Contract Making",
            "Admin panel for property and user verification"
        ],
        tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
     technologies: [
  "PHP",
  "MySQL / Supabase",
  "HTML5",
  "CSS3", 
  "JavaScript",
  "Leaflet (Map API)",
  "PayPal Sandbox API",
],
        github: "",
        liveDemo: ""
    },
             {
    id: 2,
    title: "All About Pets",
    image: "https://images.pexels.com/photos/1909802/pexels-photo-1909802.jpeg",
    shortDescription: "A client-based system developed for an existing pet care business.",
    description: "All About Pets is a client-based system proposed for an existing pet care business. The project focuses on helping veterinarians and staff manage pet health records digitally, including prescriptions and medical history. It was designed to improve record organization, support pet health monitoring, and provide better service to pet owners through a simple and reliable system.",
    features: [
        "Developed for an existing pet care business (client-based)",
        "Digital pet health records management",
        "Digital prescription creation and storage",
        "Pet medical history tracking",
        "Pet health status monitoring",
        "User-friendly interface for clinic staff and pet owners"
    ],
    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    github: "",
    liveDemo: ""
}

            ],
            
            // Achievements Data
            achievements: [
                {
                    title: "AWS Certified Developer",
                    image: "https://images.unsplash.com/photo-1589256469067-ea99122bbdc4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
                    description: "Amazon Web Services Certification for developing and maintaining applications on the AWS platform. Awarded in 2022."
                },
                {
                    title: "Google Code Jam Finalist",
                    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
                    description: "Top 1000 out of 50,000+ participants in Google's international coding competition. Achieved in 2021."
                },
                {
                    title: "React Advanced Certification",
                    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80",
                    description: "Advanced React patterns and performance optimization certification from React Training. Completed in 2020."
                },
                {
                    title: "Best Hackathon Project",
                    image: null,
                    description: "First place in Silicon Valley Hackathon 2019 for developing an innovative health-tech application."
                }
            ],
            currentSlide: 0,
            
            // Social Links
            socialLinks: [
                { name: 'Facebook', icon: 'fab fa-facebook', url: 'https://web.facebook.com/soriano.kenny' },
                { name: 'LinkedIn', icon: 'fab fa-linkedin-in', url: 'https://www.linkedin.com/in/kenny-soriano-8351182b6' },
                { name: 'Email', icon: 'fa-solid fa-envelope', url: 'mailto:kennysoriano2003@gmail.com' }
            ],
            
            // Current Year for Footer
            currentYear: new Date().getFullYear(),
            
            // Auto Slide Interval
            slideInterval: null
        }
    },
    
    computed: {
        filteredTechStack() {
            if (this.activeCategory === 'all') {
                return this.techStack;
            }
            return this.techStack.filter(tech => tech.category === this.activeCategory);
        }
    },
    
    methods: {
        // Tech Stack Methods
        setCategory(category) {
            this.activeCategory = category;
        },
        
        techHoverIn(event, tech) {
            const icon = event.currentTarget.querySelector('i');
            if (icon) {
                icon.style.transform = 'scale(1.2)';
            }
        },
        
        techHoverOut(event, tech) {
            const icon = event.currentTarget.querySelector('i');
            if (icon) {
                icon.style.transform = 'scale(1)';
            }
        },
        
        // Skill Hover Methods
        skillHoverIn(event, skill) {
            const icon = event.currentTarget.querySelector('.skill-icon');
            if (icon) {
                icon.style.transform = 'rotate(15deg) scale(1.1)';
                icon.style.backgroundColor = 'var(--black)';
                icon.style.color = 'var(--white)';
            }
        },
        
        skillHoverOut(event, skill) {
            const icon = event.currentTarget.querySelector('.skill-icon');
            if (icon) {
                icon.style.transform = 'rotate(0) scale(1)';
                icon.style.backgroundColor = 'var(--white)';
                icon.style.color = 'var(--black)';
            }
        },
        
        // Project Methods
        openProjectModal(project) {
            const modalContent = `
                <div class="project-modal-content">
                    <div class="project-modal-details">
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                        
                        <div class="project-features">
                            <h4>Key Features:</h4>
                            <ul>
                                ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                            </ul>
                        </div>
                        
                        <div class="project-features">
                            <h4>Technologies Used:</h4>
                            <p>${project.technologies.join(', ')}</p>
                        </div>
                    </div>
                </div>
            `;
            
            Swal.fire({
                title: project.title,
                html: modalContent,
                showConfirmButton: false,
                showCloseButton: true,
                width: '900px',
                customClass: {
                    popup: 'project-modal'
                },
                didOpen: () => {
                    const closeButton = Swal.getCloseButton();
                    closeButton.innerHTML = '&times;';
                    closeButton.style.fontSize = '24px';
                    closeButton.style.color = 'var(--black)';
                    closeButton.style.background = 'none';
                    closeButton.style.border = 'none';
                    closeButton.style.top = '15px';
                    closeButton.style.right = '15px';
                }
            });
        },
        
        projectHoverIn(event) {
            event.currentTarget.style.transform = 'translateY(-10px)';
        },
        
        projectHoverOut(event) {
            event.currentTarget.style.transform = 'translateY(0)';
        },
        
        // Achievement Slider Methods
        nextSlide() {
            this.currentSlide = (this.currentSlide + 1) % this.achievements.length;
        },
        
        prevSlide() {
            this.currentSlide = (this.currentSlide - 1 + this.achievements.length) % this.achievements.length;
        },
        
        goToSlide(index) {
            this.currentSlide = index;
        },
        
        startAutoSlide() {
            this.slideInterval = setInterval(() => {
                this.nextSlide();
            }, 5000);
        },
        
        stopAutoSlide() {
            if (this.slideInterval) {
                clearInterval(this.slideInterval);
            }
        }
    },
    
    mounted() {
        // Start auto-sliding achievements
        this.startAutoSlide();
    },
    
    beforeUnmount() {
        // Clean up interval
        this.stopAutoSlide();
    }
}).mount('#app');