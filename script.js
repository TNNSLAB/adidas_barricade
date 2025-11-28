// --- DATA ---
const shoeHistory = [
  {
    id: 'v1',
    year: 2000,
    name: 'Barricade Original',
    description: "The silhouette that started it all. Marat Safin debuted these durability monsters, setting a new standard for hard court stability.",
    features: [],
    imageSeed: 'barricade2000'
  },
  {
    id: 'v2',
    year: 2001,
    name: 'Barricade II',
    description: "Refining the beast. The second iteration improved breathability without sacrificing the legendary toughness required for the pro tour.",
    features: [],
    imageSeed: 'barricade2001'
  },
  {
    id: 'v3',
    year: 2003,
    name: 'Barricade III',
    description: "A lighter chassis for a faster game. The B3 introduced a more streamlined look while maintaining the 'brick wall' defense.",
    features: [],
    imageSeed: 'barricade2003'
  },
  {
    id: 'v4',
    year: 2006,
    name: 'Barricade IV',
    description: "Complete lockdown. The B4 became a club player favorite for its unmatched longevity on concrete courts.",
    features: [],
    imageSeed: 'barricade2006'
  },
  {
    id: 'v5',
    year: 2008,
    name: 'Barricade V',
    description: "The icon of the modern era. Worn by Novak Djokovic early in his dominance, blending agility with armor.",
    features: [],
    imageSeed: 'barricade2008'
  },
  {
    id: 'v6',
    year: 2010,
    name: 'Barricade 6.0',
    description: "Sleek evolution. Moving away from the bulky aesthetics, the 6.0 brought a sharper, faster profile to the court.",
    features: [],
    imageSeed: 'barricade2010'
  },
  {
    id: 'v7',
    year: 2012,
    name: 'Barricade 7.0',
    description: "The choice of champions. Andy Murray wore these to his first major title. Known for immediate comfort out of the box.",
    features: [],
    imageSeed: 'barricade2012'
  },
  {
    id: 'v8',
    year: 2013,
    name: 'Barricade 8',
    description: "Ventilation revolution. The introduction of the Kurim upper provided a unique grid-like structure for airflow and flexibility.",
    features: [],
    imageSeed: 'barricade2013'
  },
  {
    id: 'v9',
    year: 2015,
    name: 'Barricade 2015',
    description: "The chassis returns. A return to a more robust chassis system, offering maximum stability for aggressive baseline grinders.",
    features: [],
    imageSeed: 'barricade2015'
  },
  {
    id: 'v10',
    year: 2017,
    name: 'Barricade 2017 Boost',
    description: "Energy injection. For the first time, Boost technology was integrated into the heel, saving joints on hard courts.",
    features: [],
    imageSeed: 'barricade2017'
  },
  {
    id: 'v11',
    year: 2022,
    name: 'Barricade 2022',
    description: "The seamless warrior. Using a forged mesh upper, it provided dynamic support that moved with the foot during slides.",
    features: [],
    imageSeed: 'barricade2022'
  },
  {
    id: 'v12',
    year: 2024,
    name: 'Barricade Reborn',
    description: "The legend returns after a hiatus. Featuring a bold 'ADIDAS' branding on the medial side and a new torsion system.",
    features: [],
    imageSeed: 'barricade2024'
  },
  {
    id: 'v13',
    year: 2025,
    name: 'Barricade 13',
    description: "Refining the rebirth. Smoother transitions and a more adaptable upper make this the most playable Barricade yet.",
    features: [],
    imageSeed: 'barricade2025'
  },
  {
    id: 'v14',
    year: 2025,
    name: 'Barricade Future',
    description: "The next generation. A concept of pure kinetic energy transfer and ultra-lightweight composite durability.",
    features: [],
    imageSeed: 'barricade2025'
  }
];

// --- RENDERING ---
const app = document.getElementById('app');

// 1. Hero Section
function renderHero() {
  return `
    <section class="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-brand-black">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-800/20 via-black to-black opacity-50 pointer-events-none"></div>
      
      <div class="z-10 text-center px-4">
        <p class="reveal-on-scroll text-brand-red font-bold tracking-[0.5em] text-sm md:text-base mb-4 uppercase">
          Control the Court
        </p>
        
        <h1 class="reveal-on-scroll delay-100 font-display text-6xl md:text-9xl font-bold uppercase tracking-tighter text-white mix-blend-difference">
          Barricade
          <br />
          <span class="text-stroke-white text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-700">
            Legacy
          </span>
        </h1>

        <p class="reveal-on-scroll delay-200 mt-8 text-neutral-400 max-w-lg mx-auto text-sm md:text-lg leading-relaxed">
          Defining stability and durability on the court for a quarter of a century. 
          From the year 2000 to the future of 2025.
        </p>
      </div>

      <div class="absolute bottom-12 z-10 text-neutral-500 flex flex-col items-center gap-2 animate-bounce">
        <span class="text-[10px] tracking-widest uppercase">Explore the timeline</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
      </div>
    </section>
  `;
}

// 2. Timeline Cards
function renderCards() {
  return `
    <div class="relative z-10 pb-20">
      ${shoeHistory.map((shoe, index) => {
        const isEven = index % 2 === 0;
        return `
          <section class="shoe-card min-h-[80vh] flex items-center justify-center py-20 relative px-4 md:px-12">
            <div class="container mx-auto flex flex-col items-center gap-12 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}">
              
              <!-- Image Side -->
              <div class="w-full md:w-1/2 relative group parallax-wrapper" data-speed="0.05">
                <div class="reveal-on-scroll relative aspect-[4/3] overflow-hidden rounded-sm border border-neutral-800 bg-brand-gray/50">
                  <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-30"></div>


                  
                  <img 
                    src="./images/${index + 1}.png" 
                    alt="${shoe.name}"
                    class="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  
                  <div class="absolute top-4 left-4 z-20 bg-brand-red text-white px-3 py-1 text-xs font-bold tracking-widest uppercase shadow-xl">
                    ${shoe.year}
                  </div>
                </div>
              </div>

              <!-- Content Side -->
              <div class="w-full md:w-1/2 space-y-6 md:px-12 parallax-wrapper" data-speed="-0.03">
                <div class="reveal-on-scroll delay-100 space-y-2">
                  <h2 class="text-neutral-500 font-mono text-sm tracking-wider">VERSION ${index + 1 < 10 ? '0' + (index + 1) : index + 1}</h2>
                  <h3 class="font-display text-4xl md:text-6xl font-bold uppercase text-white leading-none">
                    ${shoe.name}
                  </h3>
                </div>

                <div class="reveal-on-scroll delay-200 h-0.5 w-12 bg-brand-red"></div>

                <p class="reveal-on-scroll delay-200 text-neutral-400 text-lg leading-relaxed">
                  ${shoe.description}
                </p>

                <ul class="reveal-on-scroll delay-300 grid grid-cols-1 gap-2 pt-4">
                  ${shoe.features.map(feature => `
                    <li class="flex items-center text-sm text-neutral-300">
                      <svg class="w-4 h-4 text-brand-red mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                      ${feature}
                    </li>
                  `).join('')}
                </ul>
              </div>
            </div>
            
            <!-- Timeline Line -->
            <div class="absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-neutral-800 to-transparent -z-10 hidden md:block"></div>
          </section>
        `;
      }).join('')}
    </div>
  `;
}

// 3. Footer
function renderFooter() {
  return `
    <footer class="py-12 bg-black border-t border-neutral-900 text-center relative z-20">
      <div class="container mx-auto px-4">
        <h2 class="font-display text-2xl uppercase tracking-widest text-neutral-600 mb-4">
          IMPOSSIBLE IS NOTHING
        </h2>
        <p class="text-neutral-800 text-xs uppercase tracking-wider">
          Made with love for the lovers of Tennis
        </p>
      </div>
    </footer>
  `;
}

// Initialize App
app.innerHTML = renderHero() + renderCards() + renderFooter();

// --- ANIMATIONS & INTERACTION ---

// 1. Scroll Progress Bar
const progressBar = document.getElementById('scroll-progress');
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  progressBar.style.width = `${scrollPercent}%`;
});

// 2. Intersection Observer for Fade-Ins
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));

// 3. Parallax Effect (Vanilla JS optimized)
const parallaxItems = document.querySelectorAll('.parallax-wrapper');

let ticking = false;

function updateParallax() {
  const scrollTop = window.scrollY;
  const windowHeight = window.innerHeight;
  
  parallaxItems.forEach(item => {
    const speed = parseFloat(item.getAttribute('data-speed')) || 0;
    const rect = item.getBoundingClientRect();
    // Check if element is roughly in view to avoid unnecessary calcs
    if (rect.top < windowHeight && rect.bottom > 0) {
      const yPos = (scrollTop - (rect.top + scrollTop - windowHeight / 2)) * speed;
      item.style.transform = `translateY(${yPos}px)`;
    }
  });
  
  ticking = false;
}

window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(updateParallax);
    ticking = true;
  }
});