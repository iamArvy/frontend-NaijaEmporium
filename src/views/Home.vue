<script setup>
import AppLayout from '@/layouts/AppLayout.vue'
import HeroSection from '@/components/HeroSection.vue'
import BrandMarquee from '@/components/BrandMarquee.vue'
import ProductListSection from '@/components/ProductListSection.vue'
import Testimonial from '@/components/TestimonialSection.vue'
</script>

<template>
  <AppLayout>
    <HeroSection />
    <BrandMarquee class="full-width" />
    <ProductListSection title="New Arrivals" />
    <ProductListSection title="Top Selling" />
    <Categories />
    <!-- <Testimonial /> -->
  </AppLayout>
</template>
