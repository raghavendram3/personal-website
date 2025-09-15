// src/components/ProfilePage.jsx

import React from 'react';

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="flex flex-col sm:flex-row items-center justify-between mb-12">
          <div className="flex items-center space-x-6">
            {/* Replace with your actual photo URL */}
            <img
              src="https://randomwalker.org/avatar.jpg"
              alt="Raghavendra Meena"
              className="w-32 h-32 rounded-lg object-cover border-2 border-accent"
            />
            <div>
              <h1 className="text-4xl font-bold text-white">Raghavendra Meena</h1>
              <p className="mt-2 text-xl text-gray-300">
                PhD Candidate — Biobased Chemistry & Technology, Wageningen University & Research
              </p>
              <p className="mt-1 text-gray-400">
                Computational materials scientist · DFT · MD · Catalyst design for biomass conversion
              </p>
            </div>
          </div>
          <nav className="mt-8 sm:mt-0">
            <ul className="flex space-x-4">
              <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
              <li><a href="#research" className="text-gray-400 hover:text-white">Research</a></li>
              <li><a href="#teaching" className="text-gray-400 hover:text-white">Teaching</a></li>
              <li><a href="#talks" className="text-gray-400 hover:text-white">Talks</a></li>
              <li><a href="#publications" className="text-gray-400 hover:text-white">Publications</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </nav>
        </header>

        {/* About */}
        <section id="about" className="mb-12">
          <h2 className="text-3xl font-semibold text-white">About</h2>
          <p className="mt-4 text-gray-300 leading-relaxed">
            I am a PhD candidate at Wageningen University & Research in the Netherlands. My passion lies in employing computational tools from chemistry, physics, and materials science to understand fundamental processes and design efficient catalysts for biomass conversion and sustainable chemistry. My work involves methods like Density Functional Theory (DFT), molecular dynamics (MD), micro-kinetic modelling, and machine learning to speed up discovery and gain interpretable insights.  
          </p>
          <p className="mt-4 text-gray-300 leading-relaxed">
            Before my PhD, I completed a BS-MS in Chemistry & Physics at IISER Pune, India; and a Master’s thesis at Sorbonne Université, France, where I studied the magnetic properties of narrow zigzag graphene nanoribbons using ab initio and quantum Monte Carlo methods.  
          </p>
        </section>

        {/* Research */}
        <section id="research" className="mb-12 bg-gray-800 p-6 rounded-lg">
          <h2 className="text-3xl font-semibold text-white">Research</h2>
          <p className="mt-4 text-gray-300 leading-relaxed">
            My PhD research is under the supervision of Prof. Guanna Li, Prof. Han Zuilhof, and Prof. Harry J. Bitter. I’m working on multiscale modelling of supported metal catalysts for carbohydrate upgrading and related biomass-conversion reactions. Key focuses include:
          </p>
          <ul className="mt-4 list-disc list-inside space-y-2 text-gray-300">
            <li>Mechanistic insights using DFT, dynamics, and micro-kinetic modelling.</li>
            <li>Design of transition metal carbides & oxy-carbides; identification of descriptors for catalytic activity and selectivity.</li>
            <li>Use of machine learning to accelerate simulations and predict catalyst behaviour.</li>
            <li>Projects such as mechano-catalytic conversion of plastic waste under ambient conditions.</li>
          </ul>
        </section>

        {/* Teaching */}
        <section id="teaching" className="mb-12">
          <h2 className="text-3xl font-semibold text-white">Teaching</h2>
          <ul className="mt-4 space-y-3 text-gray-300">
            <li><strong>Course:</strong> Computational Chemistry — Wageningen University, 2024</li>
            <li><strong>Workshop:</strong> Hands-on DFT & Materials Simulation Bootcamp, 2023</li>
            <li><strong>Guest Lecture:</strong> Catalysis & Biomass Conversion — Sorbonne Université, 2022</li>
            {/* Add more teaching experience as needed */}
          </ul>
        </section>

        {/* Talks */}
        <section id="talks" className="mb-12 bg-gray-800 p-6 rounded-lg">
          <h2 className="text-3xl font-semibold text-white">Talks & Presentations</h2>
          <ul className="mt-4 space-y-3 text-gray-300">
            <li>
              “Multiscale Modelling of Transition Metal Carbides for Biomass Conversion” — Catalysis Symposium, Wageningen, 2024
            </li>
            <li>
              “Descriptor Discovery in Mechano-catalysis” — European Conference on Materials, 2023
            </li>
            <li>
              “Magnetic Ground States in Graphene Nanoribbons: QMC vs DFT” — Seminar, Sorbonne Université, 2020
            </li>
            {/* More talks */}
          </ul>
        </section>

        {/* Publications */}
        <section id="publications" className="mb-12">
          <h2 className="text-3xl font-semibold text-white">Publications</h2>
          {/* PDF Embed: Replace `pdfUrl` with actual PDF link */}
          <div className="mt-6">
            <iframe
              src="https://research.wur.nl/pub/pdf/XXXXXX.pdf"
              title="Selected Publications PDF"
              className="w-full h-[600px] border rounded-lg"
            >
              {/* Fallback */}
              <p>Your browser does not support iframes.</p>
            </iframe>
          </div>
          <ul className="mt-6 space-y-3 text-gray-300">
            <li>
              <strong>Toward the Rational Design of More Efficient Mo₂C Catalysts for Hydrodeoxygenation</strong> — <em>ACS Catalysis</em>, 2023. <a className="text-accent underline" href="https://pubs.acs.org/doi/10.1021/acscatal.3c03728" target="_blank" rel="noopener noreferrer">Read more</a>
            </li>
            <li>
              <strong>Rationalizing Catalytic Performances of Mo/W-(Oxy)Carbides for Hydrodeoxygenation Reaction</strong> — <em>ChemCatChem</em>, 2025. <a className="text-accent underline" href="https://doi.org/10.1002/cctc.202500659" target="_blank" rel="noopener noreferrer">Read more</a>
            </li>
            <li>
              <strong>Surface-Activated Mechano-Catalysis for Ambient Conversion of Plastic Waste</strong> — <em>J. Am. Chem. Soc.</em> (coauthor)
            </li>
            <li>
              <strong>Magnetic properties of zigzag graphene nanoribbons</strong> — Master’s work (Sorbonne Université)
            </li>
            {/* Add more items */}
          </ul>
        </section>

        {/* Contact */}
        <section id="contact" className="mb-12 bg-gray-800 p-6 rounded-lg">
          <h2 className="text-3xl font-semibold text-white">Contact</h2>
          <div className="mt-4 text-gray-300 space-y-2">
            <div><strong>Email:</strong> <a href="mailto:raghavendra.meena@wur.nl" className="text-accent hover:underline">raghavendra.meena@wur.nl</a></div>
            <div><strong>CV / Website:</strong> <a href="https://randomwalker.org" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">randomwalker.org</a></div>
            <div className="flex space-x-4 mt-4">
              <a href="https://github.com/yourusername" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://scholar.google.com/citations?user=YOUR_ID" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">Google Scholar</a>
              <a href="https://www.linkedin.com/in/yourprofile" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-sm pt-12">
          © {new Date().getFullYear()} Raghavendra Meena — Wageningen University & Research
        </footer>
      </div>
    </div>
  );
};

export default ProfilePage;
