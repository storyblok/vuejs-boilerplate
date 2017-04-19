<template>
  <div>
    <component :blok="story.content" :is="story.content.component"></component>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        story: {
          content: {
            body: []
          }
        }
      }
    },
    created () {
      window.storyblok.init({
        accessToken: 'Iw3XKcJb6MwkdZEwoQ9BCQtt'
      })

      window.storyblok.on('change', () => {
        this.getStory('draft')
      })

      window.storyblok.pingEditor(() => {
        if (window.storyblok.isInEditor()) {
          this.getStory('draft')
        } else {
          this.getStory('published')
        }
      })
    },
    methods: {
      getStory (version) {
        window.storyblok.get({
          slug: this.$route.params.slug,
          version: version
        }, (data) => {
          this.story = {
            content: {
              body: []
            }
          }
          this.$nextTick(() => {
            this.story = data.story
          })
        })
      }
    }
  }
</script>

