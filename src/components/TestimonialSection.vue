<script setup>
import Ratings from './Ratings.vue'
</script>

<template>
<section>
    <div class="header">
        <h1>Our Happy Customers</h1>
        <div class="controller"></div>
    </div>
    <div class="testimonies">
        <article>
            <Ratings :rating="3"/>
            <h2></h2>
            <p></p>
        </article>
    </div>
</section>
</template>