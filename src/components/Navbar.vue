<template>
  <nav class="bg-white shadow p-4 flex justify-between fixed top-0 w-full z-50">
    <h1 class="text-xl font-bold">My Portfolio</h1>
    <ul class="flex space-x-4">
      <li>
        <a href="#home"
           @click.prevent="scrollTo('home')"
           :class="{'text-gray-400 font-bold': activeSection === 'home'}">
          Home
        </a>
      </li>
      <li>
        <a href="#projects"
           @click.prevent="scrollTo('projects')"
           :class="{'text-gray-400 font-bold': activeSection === 'projects'}">
          Projects
        </a>
      </li>
      <li>
        <a href="#contact"
           @click.prevent="scrollTo('contact')"
           :class="{'text-gray-400 font-bold': activeSection === 'contact'}">
          Contact
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      activeSection: 'home'
    }
  },
  methods: {
    scrollTo(sectionId) {
      const el = document.getElementById(sectionId)
      if (el) {
        const headerOffset = 80 // adjust for sticky navbar
        const elementPosition = el.getBoundingClientRect().top + window.scrollY
        const offsetPosition = elementPosition - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    },
    handleScroll() {
      const sections = ['home', 'projects', 'contact']
      const scrollPos = window.scrollY + 100 // add offset for navbar

      for (let id of sections) {
        const section = document.getElementById(id)
        if (section) {
          const top = section.offsetTop
          const bottom = top + section.offsetHeight
          if (scrollPos >= top && scrollPos < bottom) {
            this.activeSection = id
          }
        }
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
