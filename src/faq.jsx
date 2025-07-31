import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

  // faq.js - Vanilla JavaScript version
export function createFAQSection() {
  const faqData = [
    {
      question: "What is a hackathon?",
      answer: "A hackathon is a collaborative event where teams of developers, designers, and entrepreneurs come together to build innovative projects in a limited time frame. It's a great opportunity to learn new skills, meet like-minded people, and bring your creative ideas to life!"
    },
    {
      question: "Who can participate?",
      answer: "Our hackathon is open to students of all skill levels from high school to graduate school. Whether you're a complete beginner or an experienced developer, there's a place for you! We welcome participants from all backgrounds and disciplines."
    },
    {
      question: "Do I need a team?",
      answer: "Not at all! You can participate solo, come with a pre-formed team, or find teammates once you arrive. We'll help match you with others who share similar interests or complementary skills."
    },
    {
      question: "What should I bring?",
      answer: "Bring your laptop, charger, any hardware you want to work with, and a learner's attitude! We'll provide the coffee, [meals, snacks, drinks, and swag] ??."
    },
    {
      question: "Is there a cost to participate?",
      answer: "The participation fee is $50. We cover [meals, snacks, swag, and all event activities]??. Please contact us if you'd like to participate, but cost is an issue."
    },
    {
      question: "What kind of projects can I build?", 
      answer: "Anything you can imagine! Projects can be web apps, mobile apps, hardware hacks, games, AI/ML projects, or even music and poetry. We'll have several tracks and sponsor challenges with specific themes, but creativity is encouraged."
    },
    {
      question: "What if I'm a beginner?",
      answer: "Perfect! Hackathons are great learning experiences. We'll have mentors available throughout the event, beginner-friendly workshops, and plenty of resources to help you get started."    },
    {
      question: "What are the prizes?",
      answer: "[We have prizes for overall winners, track-specific categories, sponsor challenges, and special recognition awards. Prizes include cash awards, tech gadgets, internship opportunities, and exclusive swag. But remember, the real prize is the experience and connections you'll make!]??"
    }
  ];

  // Create FAQ container
  const faqContainer = document.createElement('div');
  faqContainer.className = 'max-w-4xl mx-auto p-6';
  
  // Create header
  const header = document.createElement('div');
  header.className = 'text-center mb-8';
  header.innerHTML = `
    <h2 class="text-4xl font-bold text-white hover:text-blue-300 mb-4">
      FAQ
    </h2>
  `;
  
  // Create FAQ items container
  const faqList = document.createElement('div');
  faqList.className = 'grid grid-cols-2 md:grid-cols-2 gap-10';
  
  // Create FAQ items
  faqData.forEach((item, index) => {
    const faqItem = document.createElement('div');
    faqItem.className = 'max-w-md mx-autorounded-lg overflow-hidden transition-shadow duration-200 m-2';
    
    // Create question button
    const questionButton = document.createElement('button');
    questionButton.className = 'w-full px-4 py-3 text-left transition-colors duration-200 flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset';
    questionButton.innerHTML = `
      <h3 class="text-lg font-normal text-white hover:text-blue-300 pr-4">
        ${item.question}
      </h3>
      <div class="flex-shrink-0">
        <svg class="w-5 h-5 text-white hover:text-blue-300 chevron" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    `;
    
    // Create answer container
    const answerContainer = document.createElement('div');
    answerContainer.className = 'px-6 pb-5 bg-gray-50 border-t border-gray-100 hidden';
    answerContainer.innerHTML = `
      <div class="pt-4">
        <p class="text-gray-700 leading-relaxed pl-6 text-left">
          ${item.answer}
        </p>
      </div>
    `;
    
    // Add click functionality
    questionButton.addEventListener('click', () => {
      const isHidden = answerContainer.classList.contains('hidden');
      const chevron = questionButton.querySelector('.chevron');
      
      if (isHidden) {
        answerContainer.classList.remove('hidden');
        chevron.style.transform = 'rotate(180deg)';
      } else {
        answerContainer.classList.add('hidden');
        chevron.style.transform = 'rotate(0deg)';
      }
    });
    
    faqItem.appendChild(questionButton);
    faqItem.appendChild(answerContainer);
    faqList.appendChild(faqItem);
  });
  
  // Create contact section
  const contactSection = document.createElement('div');
  contactSection.className = 'mt-8 text-center';
  contactSection.innerHTML = `
    <p class="text-white hover:text-blue-300 mb-4">
      Still have questions? Contact us at hello@[INSERTNAME]hackathon.com
    </p>
    <br><br>
   
  `;
  
  // Assemble the complete FAQ section
  faqContainer.appendChild(header);
  faqContainer.appendChild(faqList);
  faqContainer.appendChild(contactSection);
  
  return faqContainer;
}