<template>
  <div class="teaser">
    <!--
    The _editable attribute makes the next
    DOM-element clickable so the sidebar can
    show the right component.
    -->
    <div v-editable="blok" class="teaser__inner">
      <h1>
        <!--
        You can access every attribute you
        define in the schema in the blok variable
        -->
        {{blok.headline}}
        </h1>
        <h2>
          You can create new components like this - to create your own set of components.
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>
