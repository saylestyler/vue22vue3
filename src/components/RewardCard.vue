<template>
  <div style="border: 5px solid blue">
    <img :src="url" />
    <p>{{ formattedText }}</p>
  </div>
  <br>
  <div style="border: 2px solid pink">
    <h3>breakpoint detector</h3>
    <span>The screen is currently {{ sm ? 'small' : 'large' }}</span>
  </div>
</template>



<script setup>
// normally would import the mixin and pass the
// values from its computed properties directly in the template
// instead, we will call import the composable and
// deconstruct its return arguments
import { useReward } from './rewardComposable'
import { useBreakpoint } from './breakpointComposable'

const reward =  {
  size: Math.random() > 0.5 ? 'large' : 'small',
  src: 'https://picsum.photos',
  thumbnail: 'an amazing caption chad von chadwick'
}

const { url, formattedText } = useReward(reward)
const { sm } = useBreakpoint(reward)
</script>
