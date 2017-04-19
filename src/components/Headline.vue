<template>
  <h1 v-editable="blok">{{blok.text}}</h1>
</template>

<script>
export default {
  props: ['blok']
}
</script>
