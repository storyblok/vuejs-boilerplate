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
        accessToken: 'akYA0RB4BzCPUoRfjIvUdQtt'
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
