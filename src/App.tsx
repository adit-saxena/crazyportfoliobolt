import React from 'react';
import Card from './components/Card';
import ProjectCard from './components/ProjectCard';
import { ExternalLink } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Textured background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='53' cy='7' r='1'/%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3Ccircle cx='7' cy='53' r='1'/%3E%3Ccircle cx='53' cy='53' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center p-6 lg:p-8">
        <div className="font-meow text-4xl lg:text-5xl text-white">
          Adir
        </div>
        
        <button className="border border-gray-400 text-white px-6 py-2 rounded-full font-jakarta text-sm hover:bg-white hover:text-black transition-all duration-300">
          resume
        </button>
      </nav>

      {/* Main content */}
      <main className="relative z-10 flex flex-col items-center justify-center px-6 lg:px-8 pt-8 pb-16">
        {/* Hero text */}
        <div className="text-center mb-16 max-w-4xl">
          <div className="font-meow text-2xl lg:text-3xl text-white mb-4 italic">
            absolutely
          </div>
          
          <h1 className="font-space-grotesk text-6xl lg:text-8xl xl:text-9xl font-bold text-white mb-4 tracking-tight">
            I HATE DESIGN
          </h1>
          
          {/* Underline */}
          <div className="w-80 lg:w-96 h-1 bg-white mx-auto mb-8"></div>
          
          <div className="space-y-2 text-white font-jakarta">
            <p className="text-lg lg:text-xl italic">
              if it
            </p>
            <p className="text-xl lg:text-2xl font-medium">
              isn't as intuitive as drinking water
            </p>
            <p className="text-lg lg:text-xl italic">
              and so I...
            </p>
          </div>
        </div>

        {/* Cards section */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 mb-16 w-full max-w-6xl">
          <Card
            gradientFrom="from-orange-300"
            gradientTo="to-pink-300"
            rotation="-rotate-12 lg:-rotate-8"
            animation="animate-float-1"
          >
            <p>
              <strong>Studied Bachelor of design<br />
              at Delhi Tech Uni for 4 years</strong>
            </p>
          </Card>

          <Card
            gradientFrom="from-green-300"
            gradientTo="to-emerald-300"
            rotation="rotate-3"
            animation="animate-float-2"
          >
            <p>
              <strong>Discussed my work with<br />
              design experts from IITs</strong>
            </p>
          </Card>

          <Card
            gradientFrom="from-purple-300"
            gradientTo="to-blue-300"
            rotation="-rotate-6 lg:-rotate-5"
            animation="animate-float-3"
          >
            <p>
              <strong>(Almost) won international<br />
              design competitions</strong>
              <br /><br />
              <strong>Designed for 10 Cr+ users<br />
              across e-commerce & OTT</strong>
            </p>
          </Card>
        </div>

        {/* Bottom text */}
        <div className="text-center">
          <p className="text-gray-400 font-jakarta text-lg lg:text-xl italic">
            but that wasn't all so I...
          </p>
        </div>
      </main>

      {/* Portfolio Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Large featured project */}
            <ProjectCard
              title="Crafted digital experiences that delight users - and businesses"
              description="Crafting digital experiences that delight users - and businesses"
              tags={["Engagement +5%", "Agile Methodology"]}
              size="large"
            />
            
            {/* Smaller projects */}
            <ProjectCard
              title="Crafted digital experiences that delight users - and businesses"
              description=""
              tags={["Engagement +5%"]}
            />
            
            <ProjectCard
              title="Crafted digital experiences that delight users - and businesses"
              description=""
              tags={["Engagement +5%"]}
            />
            
            <ProjectCard
              title="Crafted digital experiences that delight users - and businesses"
              description=""
              tags={["Engagement +5%"]}
            />
            
            <ProjectCard
              title="Crafted digital experiences that delight users - and businesses"
              description=""
              tags={["Engagement +5%"]}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end">
            {/* Left side - Contact */}
            <div className="mb-8 lg:mb-0">
              <h2 className="font-space-grotesk text-2xl lg:text-3xl font-medium mb-2">
                Always open to building great products.
              </h2>
              <p className="font-space-grotesk text-2xl lg:text-3xl font-medium">
                Reach out at{' '}
                <a 
                  href="mailto:aditsaxena2004@gmail.com" 
                  className="underline hover:no-underline transition-all duration-200"
                >
                  aditsaxena2004@gmail.com
                </a>
              </p>
            </div>
            
            {/* Right side - Social links */}
            <div className="flex flex-col gap-2 text-right">
              <a 
                href="#" 
                className="font-space-grotesk text-lg hover:text-gray-300 transition-colors duration-200 flex items-center gap-2 justify-end"
              >
                Behance
                <ExternalLink size={16} />
              </a>
              <a 
                href="#" 
                className="font-space-grotesk text-lg hover:text-gray-300 transition-colors duration-200 flex items-center gap-2 justify-end"
              >
                LinkedIn
                <ExternalLink size={16} />
              </a>
              <a 
                href="#" 
                className="font-space-grotesk text-lg hover:text-gray-300 transition-colors duration-200 flex items-center gap-2 justify-end"
              >
                Instagram
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
          
          {/* Bottom text */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <p className="font-space-grotesk text-sm text-gray-400">
              Made with ❤️ by Adit (& AI)
            </p>
          </div>
        </div>
      </footer>
      {/* Ambient glow effects */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
    </div>
  );
}

export default App;