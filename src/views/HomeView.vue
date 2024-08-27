<script setup>
import AppLayout from '@/components/layouts/AppLayout.vue'
import HeroSection from '@/components/HeroSection.vue'
import BrandMarquee from '@/components/BrandMarquee.vue'
import ProductListSection from '@/components/ProductListSection.vue'
</script>

<template>
  <AppLayout>
    <HeroSection />
    <BrandMarquee class="full-width" />
    <ProductListSection title="New Arrivals" />
    <hr />
    <ProductListSection title="Top Selling" />
    <Categories />
    <div class="brands"></div>
    <section>
      <h1>Discover the latest fashion trends</h1>
    </section>
    <section></section>
    <section></section>
    <section></section>
    <h1>Hello</h1>
  </AppLayout>
</template>
