<template>
  <div class="flex flex-col justify-between h-screen">
    <header class="md:flex md:flex-row md:p-4">
      <div>
        <Logo />
      </div>
      <nav class="mx-auto text-center text-blue-900">
        <nuxt-link :to="switchLocalePath('en')">English</nuxt-link>
        <nuxt-link :to="switchLocalePath('tr')">Turkish</nuxt-link>
        <nuxt-link :to="localePath('index', 'en')">EN</nuxt-link>
        <nuxt-link :to="localePath('index', 'tr')">TR</nuxt-link>
        <nuxt-link :to="localePath('index')">{{ $t('home') }}</nuxt-link>
        <nuxt-link :to="localePath('about')">{{ $t('about') }}</nuxt-link>
        <NuxtLink to="/">HOME</NuxtLink>
        <NuxtLink to="/about/">ABOUT</NuxtLink>
        <NuxtLink to="/blk-collection/">BLK COLLECTION</NuxtLink>
        <NuxtLink to="/showreel">SHOWREEL</NuxtLink>
        <NuxtLink to="/contact/">CONTACT</NuxtLink>
      </nav>
      <div class="text-center">
        <a href="https://www.facebook.com/BLKJeansWear">F</a>
        <a href="https://twitter.com/BLKJeansWear">T</a>
        <a href="https://instagram.com/blkjeans/">I</a>
      </div>
    </header>
    <Nuxt />
    <footer>
      <p>Copyright</p>
    </footer>
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
header {
  background-color: #c6eaf5;
  background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%232f5c5a' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
}
</style>
