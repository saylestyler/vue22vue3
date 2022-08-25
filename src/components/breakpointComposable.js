import { ref, onMounted, onUnmounted, computed } from 'vue'

export function useBreakpoint() {
  // make windowWidth be reactive
  const windowWidth = ref(window.innerWidth)

  function update() {
    windowWidth.value = window.innerWidth
  }

  onMounted(() => window.addEventListener('resize', update))
  onUnmounted(() => window.removeEventListener('resize', update))

  const sm = computed(() => windowWidth.value < 960)
  const lg = computed(() => windowWidth.value > 1900)

  return { sm, lg }
}
