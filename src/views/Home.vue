<script setup>
import gradPic from '../assets/gradpic.png'
</script>

<template>
  <section id="home" class="flex items-center justify-center min-h-screen bg-base-light px-6">
    <!-- Wrapper -->
    <div class="flex flex-col md:flex-row items-center gap-16 max-w-6xl">
      
      <!-- Profile Picture with Monochrome Frame -->
      <div class="flex-shrink-0 relative">
        <div class="p-2 rounded-full bg-[#F0F0F0] shadow-md">
          <img 
            :src="gradPic" 
            alt="Graduation Picture" 
            class="w-72 h-72 rounded-full object-cover border-8 border-white"
          />
        </div>
      </div>

      <!-- Intro Text -->
      <div>
        <h1 class="text-5xl font-bold text-[#333333] mb-6">
          Hi, I'm Billyjoe
        </h1>
        <p class="text-xl text-[#707070] max-w-lg mb-8">
            I’m learning web development and enjoy building small projects to improve my skills. 
            Thank you for visiting my portfolio.
        </p>

        <!-- Social Links -->
        <div class="flex gap-8 text-3xl">
          <a href="https://github.com/billyjoeempaynado" target="_blank" class="text-[#707070] hover:text-[#333333] transition">
            <i class="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" class="text-[#707070] hover:text-[#333333] transition">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="mailto:billyjoeempaynado@email.com" class="text-[#707070] hover:text-[#333333] transition">
            <i class="fas fa-envelope"></i>
          </a>
        </div>
      </div>

    </div>
  </section>

  <!-- Projects Section -->
    <section id="projects" class="flex flex-col items-center justify-center min-h-screen bg-base-light px-6">
      <!-- Section Heading -->
      <div class="max-w-6xl w-full text-center mb-12">
        <h2 class="text-3xl font-bold mb-4">Projects</h2>
      </div>

      <!-- Grid Container -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        <!-- Example Project Card -->
        <div class="bg-white rounded-lg shadow-md p-6">
          <h3 class="font-bold text-xl mb-2">CNN Securities</h3>
          <p class="text-[#707070]"> A beginner-friendly web app for investing in the Philippine Stock Exchange,
             offering tools and guidance to help users start their investment journey.</p>
              <a href="https://cnnsecurities.netlify.app/" target="_blank" class="mt-4 inline-block text-blue-500 hover:underline text-sm">
                Visit App
              </a>
        </div>

        <div class="bg-white rounded-lg shadow-md p-6">
          <h3 class="font-bold text-xl mb-2">Project 2</h3>
          <p class="text-[#707070]">Short description of your project.</p>
        </div>

        <div class="bg-white rounded-lg shadow-md p-6">
          <h3 class="font-bold text-xl mb-2">Project 3</h3>
          <p class="text-[#707070]">Short description of your project.</p>
        </div>

        <!-- Add more cards here -->
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="w-full min-h-screen flex flex-col items-center justify-center bg-[#333333] text-white px-6 scroll-mt-20 py-16">
      
      <!-- Heading -->
      <div class="max-w-2xl w-full text-center mb-12">
        <h2 class="text-3xl font-bold mb-4">Contact</h2>
        <p class="text-lg text-[#B0B0B0]">Feel free to reach out via the form below or connect through my social links.</p>
      </div>

      <!-- Social Links -->
      <div class="flex gap-8 mt-12 text-2xl">
        <a href="https://github.com/billyjoeempaynado" target="_blank" class="hover:text-blue-500 transition">
          <i class="fab fa-github"></i>
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" class="hover:text-blue-500 transition">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="mailto:billyjoeempaynado@email.com" class="hover:text-blue-500 transition">
          <i class="fas fa-envelope"></i>
        </a>
      </div>

    </section>

</template>
