import { ref, computed } from "vue";

// reward is passed here from the component
// but could be state object as well
export function useReward(reward) {
  const baseSource = ref(reward.src);
  const thumbnailUnformatted = ref(reward.thumbnail);
  const size = ref(reward.size);

  const url = computed(() =>
    size.value === "large" ? `${baseSource.value}/300` : `${baseSource.value}/150`
  );
  const formattedText = computed(() =>
    capitalize(thumbnailUnformatted)
  );

  return { url, formattedText };
}

export const capitalize = value => {
  if (typeof value !== 'string') {
    return ''
  }
  return value[0].toUpperCase() + value.slice(1).toLowerCase()
}
