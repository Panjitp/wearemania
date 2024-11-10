document.addEventListener('DOMContentLoaded', function() {
            // Register ScrollTrigger plugin
            gsap.registerPlugin(ScrollTrigger);
        
            // Smooth parallax for news-main
            gsap.from(".news-main", {
                y: 80,  // Start 80px below
                opacity: 0,  // Start from transparent
                duration: 1.5,  // Longer duration for smooth effect
                ease: "power3.out",  // Smooth easing curve
                scrollTrigger: {
                    trigger: ".news-main",
                    start: "top 85%",  // Start animation a bit earlier
                    toggleActions: "play none none reverse",  // Animate when in view, reverse when out
                }
            });
        
            // Smooth parallax for each news-card
            gsap.utils.toArray(".news-card").forEach((card, i) => {
                gsap.from(card, {
                    y: 50,  // Start 50px below
                    opacity: 0,  // Start from transparent
                    duration: 1.3,  // Duration longer for smoother transition
                    ease: "power3.out",  // Smooth easing for a subtle effect
                    scrollTrigger: {
                        trigger: card,
                        start: "top 90%",  // Trigger earlier for smoother appearance
                        toggleActions: "play none none reverse",  // No scrub, for smooth reveal
                    },
                    delay: i * 0.2,  // Stagger the animation of each card
                });
            });
        });
        

        document.addEventListener('DOMContentLoaded', function() {
            const header = document.querySelector('header');
            
            gsap.registerPlugin(ScrollTrigger);
            
            // Header scroll animation with smoother transition
            ScrollTrigger.create({
                start: "top top",
                end: 99999,
                toggleClass: { targets: header, className: "scrolled" },
                onUpdate: (self) => {
                    if (self.direction === 1 && window.scrollY > 10) {
                        gsap.to(header, {
                            height: "50px",
                            backgroundColor: "#4a90e2", // Mengubah warna saat digulir
                            opacity: 0.95,
                            duration: 0.4, // Menambah durasi transisi
                            ease: "power2.out"
                        });
                    } else if (window.scrollY <= 10) {
                        gsap.to(header, {
                            height: "65px",
                            backgroundColor: "#d0e2ff",
                            opacity: 1,
                            duration: 0.4,
                            ease: "power2.out"
                        });
                    }
                }
            });
        });
        

        document.addEventListener('DOMContentLoaded', function() {
            const nav = document.querySelector('nav');
            const animationDiv = document.querySelector('.animation');
            
            nav.addEventListener('mouseover', (event) => {
                if (event.target.tagName === 'A') {
                    const parentRect = nav.getBoundingClientRect();
                    const linkRect = event.target.getBoundingClientRect();
                    const leftPosition = linkRect.left - parentRect.left;
            
                    animationDiv.style.left = `${leftPosition}px`;
                    animationDiv.style.width = `${linkRect.width}px`;
                }
            });
            
            nav.addEventListener('mouseleave', () => {
                animationDiv.style.left = '0';
                animationDiv.style.width = '100px';
            });
        });
        

        function updateLiveTime() {
            const timeDisplay = document.getElementById('live-time');
            const now = new Date();
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            timeDisplay.textContent = `Waktu: ${hours}:${minutes}:${seconds}`;
        }

        // Memperbarui waktu setiap detik
        setInterval(updateLiveTime, 1000);

        const cards = gsap.utils.toArray(".stat-card");

        // Ukuran layar (viewport width)
        const screenWidth = window.innerWidth;
    
        // Loop animasi untuk setiap stat-card
        cards.forEach((card, i) => {
            gsap.fromTo(card, 
                { x: screenWidth },  // Mulai dari luar layar sebelah kanan tanpa opacity
                { 
                    x: -screenWidth,              // Bergerak keluar ke kiri hingga keluar layar
                    duration: 20,                 // Meningkatkan durasi agar pergerakan lebih lambat
                    ease: "linear",
                    repeat: -1,                   // Animasi berulang terus-menerus
                    delay: i * 0.8,               // Mengurangi jarak antara elemen
                    onRepeat: function() {        // Memastikan konten pertama kembali memulai gerakan setelah selesai
                        gsap.set(card, { x: screenWidth });
                    }
                });
        });

        // Dark mode toggle
        const darkModeToggle = document.getElementById('darkModeToggle');
        const body = document.body;

        darkModeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
        });

        // Header scroll effect
        const header = document.querySelector('header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        

    document.addEventListener('DOMContentLoaded', function() {
    gsap.registerPlugin(ScrollTrigger);

    // Efek perbesar (zoom) yang lebih halus dengan skala terbatas
    gsap.to('.hero', {
        backgroundPosition: '0% 100%', // Pergerakan latar belakang saat di-scroll
        scale: 1, // Sedikit memperbesar (batasi agar tidak menyebabkan overflow)
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1.5, // Mengikuti pergerakan scroll
        }
    });

    // Smooth appearance for text
    gsap.to('.hero-content h1', { 
        opacity: 1, 
        y: 0, 
        duration: 2, 
        delay: 0.5, 
        ease: "power2.out" 
    });
    gsap.to('.hero-content p', { 
        opacity: 1, 
        y: 0, 
        duration: 2, 
        delay: 0.7, 
        ease: "power2.out" 
    });
    gsap.to('.hero-content .btn', { 
        opacity: 1, 
        y: 0, 
        duration: 2, 
        delay: 0.9, 
        ease: "power2.out" 
    });
});

// Inisialisasi efek Tilt pada kartu fitur
document.addEventListener('DOMContentLoaded', function() {
    const featureCards = document.querySelectorAll('.feature-card');
    VanillaTilt.init(featureCards, {
        max: 15, // Derajat kemiringan maksimum
        speed: 400, // Kecepatan transisi
        glare: true, // Tambahkan efek kilau
        "max-glare": 0.3 // Maksimum efek kilau
    });
});


        

        gsap.registerPlugin(ScrollTrigger);

        // Animasi untuk setiap feature-card
        gsap.utils.toArray('.feature-card').forEach((card, index) => {
        
          // Animasi ketika digulir ke bawah (muncul dari bawah ke atas)
          ScrollTrigger.create({
            trigger: card,
            start: 'top 65%', // Memulai animasi saat bagian atas elemen mencapai 80% dari viewport
            end: 'top 15%',   // Mengakhiri animasi saat bagian atas elemen mencapai 10% dari viewport
            toggleActions: 'play none none reverse', // Memainkan animasi masuk dan keluar
            scrub: 1,  // Menambah scrub untuk memperhalus transisi
            onEnter: () => gsap.fromTo(card, 
              { opacity: 0, y: 130 },  // Muncul dari bawah (posisi awal di bawah)
              { opacity: 1, y: 0, duration: 1.4, ease: "power3.out" }  // Animasi halus ke posisi normal
            ),
            onLeaveBack: () => gsap.to(card, 
              { opacity: 0, y: 130, duration: 1.2, ease: "power3.out" }  // Menghilang ke bawah saat digulir kembali ke bawah
            )
          });
        
          // Animasi ketika digulir ke atas (muncul dari atas ke bawah)
          ScrollTrigger.create({
            trigger: card,
            start: 'top 10%', // Memulai animasi saat bagian atas elemen mencapai 90% dari viewport
            end: 'top 10%', // Mengakhiri animasi saat elemen keluar dari viewport
            toggleActions: 'play none none reverse', // Memastikan elemen muncul dan menghilang dengan benar
            scrub: 1,  // Menambah scrub untuk memperhalus transisi
            onEnterBack: () => gsap.fromTo(card, 
              { opacity: 0, y: -150},  // Muncul dari atas (posisi awal di atas)
              { opacity: 1, y: 0, duration: 1.4, ease: "power3.out" }  // Animasi halus ke posisi normal
            ),
            onLeave: () => gsap.to(card, 
              { opacity: 0, y: -150, duration: 1.2, ease: "power3.out" }  // Menghilang ke atas saat digulir ke atas
            )
          });
        
        });

        // News cards animations
        gsap.utils.toArray('.news-card').forEach((card, index) => {
            gsap.to(card, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                scrollTrigger: {
                    trigger: card,
                    start: 'top bottom-=100',
                    toggleActions: 'play none none reverse'
                },
                delay: index * 0.2
            });
        });

        

        // News click functionality
        document.querySelectorAll('.news-card').forEach(card => {
            card.addEventListener('click', function() {
                const mainNews = document.getElementById('mainNews');
                const currentMainNews = {
                    img: mainNews.querySelector('img').src,
                    title: mainNews.querySelector('h3').textContent,
                    content: mainNews.querySelector('p').textContent
                };

                // Simpan informasi berita pendamping yang diklik
                const imgSrc = this.getAttribute('data-img');
                const title = this.getAttribute('data-title');
                const content = this.getAttribute('data-content');

                // Tukar berita utama dengan berita yang diklik
                mainNews.querySelector('img').src = imgSrc;
                mainNews.querySelector('h3').textContent = title;
                mainNews.querySelector('p').textContent = content;

                // Perbarui berita pendamping dengan berita utama sebelumnya
                this.querySelector('img').src = currentMainNews.img;
                this.querySelector('h4').textContent = currentMainNews.title;
                this.setAttribute('data-img', currentMainNews.img);
                this.setAttribute('data-title', currentMainNews.title);
                this.setAttribute('data-content', currentMainNews.content);
            });
        });