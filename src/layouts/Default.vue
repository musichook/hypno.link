<template>
  <div>

    <g-link to="/" class="text-black">
      <div class="logo">
        <div class="logo__l">hypno</div>
        <div class="logo__m"></div>
        <div class="logo__r">link</div>
      </div>
    </g-link>

    <slot/>
  </div>
</template>

<script>
import config from '~/.temp/config.js';

export default {
  computed: {
    config () {
      return config
    }
  }
}
</script>

<style lang="sass">
</style>


