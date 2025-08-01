import './style.css'
import { createFAQSection } from './faq.jsx'


document.querySelector('#app').innerHTML = `
  <!-- Background Image -->
  <div class="hero-bg-container">
    <img class="bg-image" src="./landing_canva_2.png" alt="Landing Image">
  </div>
  <!-- Hero Section -->
  <div class="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative">
    <!-- Navigation -->
    <nav class="flex justify-between items-center p-6 relative z-10">
      <div class="text-white text-5xl font-bold;"> 
        <span class="blue-ventures">Blue Ventures</span><span class="title-text"> Hackathon 2025</span>
      </div>
      <div class="space-x-6">
        <a href="#about" class="text-white hover:text-blue-300">About&nbsp;&nbsp;&nbsp;</a>
        <a href="#schedule" class="text-white hover:text-blue-300">Schedule&nbsp&nbsp;&nbsp;</a>
        <a href="#faq" class="text-white hover:text-blue-300">FAQ&nbsp;&nbsp;&nbsp;</a>
        <button class="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-semibold">
          Register Now
        </button>
      </div>
    </nav>

    
  <br><br><br>
  <!-- Hero Content -->
    <div class="flex items-center justify-left min-h-[80vh] text-center px-4 relative z-10 ">
      <div style="margin-left: 400px;">
        <div class="spacer-div-margin"></div>
        <div class="flex space-x-4">
          <button class="button-landing hover:bg-blue-900 text-white px-10 py-6 rounded-full text-lg border-2px;">
            <p style="font-weight: bold; margin-top: -3px; margin-bottom: -3px;">Register Now!</p>
          </button>
          <div class="horizontal-spacer"></div>
          <button href="#about" class="button-landing hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg">
            <p style="font-weight: normal; margin-top: -3px; margin-bottom: -3px">Learn More</p>
          </button>
        </div>
        <br>
      </div>
    </div>
  </div>

  <!-- Color Info Block -->
  <div id="about"class="hero-bg-container; height: 80%;">
    <img class="bg-image" src="./color_take_3.png" alt="Color Info Block">
  </div>

  
  <!-- About Section -->
  <div class="spacer-div-margin"></div>
  <br><br><br><br><br><br><br><br><br><br><br><br>
  <div class="bg-gray-900 py-20">
    <div class="max-w-4xl mx-auto px-4 text-left smaller-text-container">
      <h2 class="text-4xl font-bold text-white mb-8">About</h2>
      <br>
      <p1 class="text-2xl text-gray-300 mb-12 text-left">
        Join us this summer for our <span style="color: #5270ff;">first-ever</span> week-long innovation challenge.
        Over seven days, you and your team will build a functional prototype with real-world applications.
        <br><br>
        This isn't your typical weekend hackathon. Our extended format allows for deeper research and development. 
        Work daily with experienced industry mentors who will guide you from concept to working demo.
        <br><br>
        Whether you're a seasoned programmer or just starting out, 
        this is your chance to build industry connections, learn from experts, and bring your ideas to life.
      </p>
    </div>
    <br><br>
    <div class="max-w-4xl mx-auto px-4 text-left smaller-text-container">
      <h1 class="text-4xl font-bold text-white mb-8">Event Highlights</h1>
      <br>
      <p2 class="text-2xl text-gray-300 mb-12 text-left">
        <span style="color:#595da8; margin-right: 10px;"> ~ %</span>
          <span style="color:rgb(114, 115, 123);">7 days</span> of intensive development (Mon-Sun, 9AM-9PM)<br>
        <span style="color:#595da8; margin-right: 10px;"> ~ %</span>
          <span style="color: #5270ff;">Daily mentorship</span> from industry experts<br>
        <span style="color:#595da8; margin-left: 10px; margin-right: 10px;">>></span>
          <span style="color:rgb(141, 158, 244);">3 challenge tracks</span> with real problem statements<br>
        <span style="color:#595da8; margin-left: 10px; margin-right: 10px;">>></span>
          <span style="color:rgb(90, 205, 247);">Free access</span> to premium APIs, hardware, and cloud credits<br>
        <span style="color:#595da8; margin-left: 23px; margin-right: 10px;">$ </span>
          <span style="color:rgb(69, 72, 91);">Live demos</span> to investors and potential employers<br>
      </p2>
    </div>
  </div>

  <!-- Schedule -->
  <br><br><br>
  <div class="separator">
    <div class="diagonal-12"></div>
  </div>
  <br><br><br>

  <!-- Schedule -->
  <div id="schedule" class="bg-gray-800 py-20">
    <div class="max-w-3xl mx-auto px-4">
      <h1 class="text-4xl font-bold text-white text-center mb-12">Event Timeline</h1>
      
      <div class="space-y-4">
        <!-- Registration Deadline -->
        <div class="bg-gray-700 p-4 rounded-lg text-center">
          <div class="flex items-center justify-center mb-2">
            <h3 class="text-xl font-bold text-white">September 7th - Last day to register!</h3>
          </div>
        </div>
        
        <!-- Saturday -->
        <div class="bg-gray-700 p-4 rounded-lg text-center">
          <div class="flex items-center justify-center mb-2">
            <h3 class="text-xl font-bold text-white">Saturday, September 8th - Day 1</h3>
          </div>
          <p class="text-gray-400 mb-2">Hackathon begins</p>
          <div class="text-gray-300 text-sm">
            <!-- Space for event details -->
          </div>
        </div>
        
        <!-- Sunday -->
        <div class="bg-gray-700 p-4 rounded-lg text-center">
          <div class="flex items-center justify-center mb-2">
            <h3 class="text-xl font-bold text-white">Sunday, September 9th - Day 2</h3>
          </div>
          <p class="text-gray-400 mb-2">Day 2 of hacking</p>
          <div class="text-gray-300 text-sm">
            <!-- Space for event details -->
          </div>
        </div>
        
        <!-- Monday -->
        <div class="bg-gray-700 p-4 rounded-lg text-center">
          <div class="flex items-center justify-center mb-2">
            <h3 class="text-xl font-bold text-white">Monday, September 10th - Day 3</h3>
          </div>
          <p class="text-gray-400 mb-2">Day 3 of hacking</p>
          <div class="text-gray-300 text-sm">
            <!-- Space for event details -->
          </div>
        </div>
        
        <!-- Tuesday -->
        <div class="bg-gray-700 p-4 rounded-lg text-center">
          <div class="flex items-center justify-center mb-2">
            <h3 class="text-xl font-bold text-white">Tuesday, September 11th - Day 4</h3>
          </div>
          <p class="text-gray-400 mb-2">Day 4 of hacking</p>
          <div class="text-gray-300 text-sm">
            <!-- Space for event details -->
          </div>
        </div>
        
        <!-- Wednesday -->
        <div class="bg-gray-700 p-4 rounded-lg text-center">
          <div class="flex items-center justify-center mb-2">
            <h3 class="text-xl font-bold text-white">Wednesday, September 12th - Day 5</h3>
          </div>
          <p class="text-gray-400 mb-2">Day 5 of hacking</p>
          <div class="text-gray-300 text-sm">
            <!-- Space for event details -->
          </div>
        </div>
        
        <!-- Thursday -->
        <div class="bg-gray-700 p-4 rounded-lg text-center">
          <div class="flex items-center justify-center mb-2">
            <h3 class="text-xl font-bold text-white">Thursday, September 13th - Day 6</h3>
          </div>
          <p class="text-gray-400 mb-2">Day 6 of hacking</p>
          <div class="text-gray-300 text-sm">
            <!-- Space for event details -->
          </div>
        </div>
        
        <!-- Friday -->
        <div class="bg-gray-700 p-4 rounded-lg text-center">
          <div class="flex items-center justify-center mb-2">
            <h3 class="text-xl font-bold text-white">Friday, September 14th - Day 7</h3>
          </div>
          <p class="text-gray-400 mb-2">Final day of hacking</p>
          <div class="text-gray-300 text-sm">
            <!-- Space for event details -->
          </div>
        </div>
        
        <!-- Demo Day -->
        <div class="bg-gray-700 p-4 rounded-lg text-center">
          <div class="flex items-center justify-center mb-2">
            <h3 class="text-xl font-bold text-white">Saturday, September 15th - Demo Day</h3>
          </div>
          <p class="text-gray-400 mb-2">Judge and demo day</p>
          <div class="text-gray-300 text-sm">
            <!-- Space for event details -->
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div class="spacer-div-margin"></div>

  <!-- Project Tracks -->
  <div id="areas" class="bg-gray-900 py-20">
    <div class="max-w-6xl mx-auto px-4">
      <h1 class="text-4xl font-bold text-white text-center mb-12 font-size: 3em">Project Tracks</h1>
      <br><br>
      <div class="grid grid-cols-3 gap-8">
        <div class="bg-gray-800 p-8 rounded-lg">
          <img src="./ai_brain_2.png" alt="Brain AI" class="w-1/2 h-1/2"> 
          <h3 class="text-2xl font-bold text-white mb-4">AI</h3>
          <p class="text-gray-300 mb-4">Artificial intelligence, machine learning, <br> & large language models</p>
          <br>
          <div class="text-sm text-blue-400">
            <strong>Coaches:</strong> ??
          </div>
        </div>

        <div class="bg-gray-800 p-8 rounded-lg">
          <img src="./robotics_2.png" alt="Graphing Robot" class="w-1/3 h-1/2"> 
          <h3 class="text-2xl font-bold text-white mb-4">Robotics</h3>
          <p class="text-gray-300 mb-4">Robotics, hardware, IoT <br>(some equipment available)</p>
          <br>
          <div class="text-sm text-blue-400">
            <strong>Coaches:</strong> ??
          </div>
        </div>
        
        <div class="bg-gray-800 p-8 rounded-lg">
          <img src="./architecture_2.png" alt="Web Abstract" class="w-1/2 h-1/2"> 
          <h3 class="text-2xl font-bold text-white mb-4">Other</h3>
          <p class="text-gray-300 mb-4">Biology, chemistry, music, art, etc.
            <br>Interdisciplinary applications of your choice!</p>
          <br>
          <div class="text-sm text-green-400">
            <strong>Coaches:</strong> ??
          </div>
        </div>

        
      </div>
      <br><br>
      <div class="text-center mt-8">
        <p class="text-gray-400">Specific project tracks and coaches may be added based on participant interest.
        <br> You are welcome to propose a project track!</p>
      </div>
    </div>
  </div>
  <br><br>

  <!-- Organizers Section -->
  <div class="bg-gray-900 py-20">
    <div class="max-w-6xl mx-auto px-4">
      <h1 class="text-4xl font-bold text-white text-center mb-12">Mentors</h1>
      <br><br><br><br>
      <div class="grid grid-cols-4 gap-5 items-center justify-items-center">
        <div class="max-w-6xl mx-auto px-4 ">
          <img src="./dave_3.png" alt="Dave Wang" class="headshot"> 
          <br><br>
          <p1 style="font-weight: bold;">Dave Wang</p1>
          <p>Senior Software Engineer, Cisco</p>
        </div>
        <div class="max-w-6xl mx-auto px-4">
          <img src="./tao.png" alt="Tao Hong" class="headshot"> 
          <br><br>
          <p1 style="font-weight: bold;">Tao Hong</p1>
          <p>ML Engineer, Synopsys</p>
        </div>
        <div class="max-w-6xl mx-auto px-4">
          <img src="./jiangqi.png" alt="Jiangqi Ying" class="headshot"> 
          <br><br>
          <p1 style="font-weight: bold;">Jiangqi Ying</p1>
          <p>CEO, Chinese American Network (CAN)</p>
        </div>
        <div class="max-w-6xl mx-auto px-4">
          <img src="./jingwen.png" alt="Jingwen Wang" class="headshot"> 
          <br><br>
          <p1 style="font-weight: bold;">Jingwen Wang</p1>
          <p>System Architect, Apple</p>
        </div>      
      </div>
    </div>
  </div>

  <div class="spacer-div-margin"></div>
  <!-- Sponsors Section -->
  <div class="bg-gray-900 py-20">
    <div class="max-w-6xl mx-auto px-4">
      <h2 class="text-4xl font-bold text-white text-center mb-12">Partners & Sponsors</h2>
      
      <div class="grid grid-cols-4 gap-5 items-center justify-items-center">
        <img src="./beshton_software_logo.png" alt="Beshton Software Logo" class="logo-beshton logo-black"> 
        <img src="./panbotica.png" alt="Panbotica Logo" class="logo-panbotica logo-black">
        <p>More coming soon! [ALUMNI GROUPS ETC]</p>
      </div>
    </div>
  </div>

  <!-- CTA Section -->
  <div class="bg-black py-20">
    <div class="max-w-4xl mx-auto px-4 text-center">
      <h1 class="text-4xl font-bold text-white mb-6">Ready to Join Our Innovation Challenge?</h2>
      <p class="text-xl text-gray-400 mb-8">Connect with great mentors. Transform your ideas into reality. Shape what's next. <br>Secure your spot for $50.</p>
      <div class="mt-6 text-gray-500">
        Registration closes September 7th.
      </div>
      <br>
      <button class="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white px-12 py-4 rounded-full text-xl font-bold">
        Enroll Now
      </button>
      
    </div>
  </div>
  <br><br>

  <!-- FAQ -->
  <div id="faq"></div>

  <!-- Footer -->
  <footer class="bg-gray-900 py-12">
    <div class="max-w-6xl mx-auto px-4">
      <div class="grid grid-cols-4 gap-8">
        <div>
          <h3 class="text-white font-bold mb-4 font-size:1.5em;">Blue Ventures Hackathon 2025</h3>
          <p class="text-gray-400">Empowering youth through technology and innovation</p>
        </div>
        <div>
          <h4 class="text-white font-semibold mb-4">Quick Links</h4>
          <div class="space-y-2">
            <a href="#about" class="text-gray-400 hover:text-white block">About</a>
            <a href="#participants" class="text-gray-400 hover:text-white block">Participants</a>
            <a href="#areas" class="text-gray-400 hover:text-white block">Project Areas</a>
            <a href="#schedule" class="text-gray-400 hover:text-white block">Schedule</a>
          </div>
        </div>
        <div>
          <h4 class="text-white font-semibold mb-4">Contact</h4>
          <div class="space-y-2 text-gray-400">
            <div>hello@[INSERT NAME]hackathon.com</div>
            <div>Registration form coming soon!</div>
          </div>
        </div>
        <div>
          <h4 class="text-white font-semibold mb-4">Format</h4>
          <div class="space-y-2">
            <div class="text-gray-400">Mountain View + Remote</div>
            <div class="text-gray-400">Hybrid Experience</div>
          </div>
        </div>
      </div>
      <br>
      <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <br>
        © 2025 [Insert Name] Hackathon. All rights reserved.
      </div>
    </div>
  </footer>
  
`

const faqElement = createFAQSection();
document.querySelector('#faq').appendChild(faqElement);