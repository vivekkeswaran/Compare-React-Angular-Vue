<template>
<div id="app">
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item">
                Sample Template With Vue
            </a>

            <button class="button navbar-burger" v-on:click="toggleNav" v-bind:class="{ 'is-active': isActive }">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
        <div class="navbar-menu"  v-bind:class="{ 'is-active': isActive }">
            <div class="navbar-end">
                <router-link to="/" class="nav-item r-item">Home</router-link>
                <router-link to="faq" class="nav-item r-item">Features</router-link>
                <router-link to="faq" class="nav-item r-item">About</router-link>
                <router-link to="faq" class="nav-item r-item">FAQ</router-link>

                <div class="navbar-item">
                  <div class="field is-grouped">
                    <p class="control">
                      <a class="button is-primary">
                        <span class="icon">
                          <i class="fa fa-sign-in" aria-hidden="true"></i>
                        </span>
                        <span>Join Now</span>
                      </a>
                    </p>
                  </div>
                </div>
            </div>
        </div>
    </nav>

    <router-view>

    </router-view>

    <footer class="footer is-primary">
      <div class="container">
        <div class="columns">
          <div class="column">
            <p>And this right here is a spiffy footer, where you can put stuff.</p>
          </div>
          <div class="column has-text-right">
            <a class="icon" href="#"><i class="fa fa-facebook"></i></a>
            <a class="icon" href="#"><i class="fa fa-twitter"></i></a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
 name: 'app',
  data: function() {
    return {
      isActive: false
    }
  },
  methods: {
    toggleNav: function() {
      this.isActive = !this.isActive;
    }
  }
}
</script>

<style lang="sass">
@import '../node_modules/bulma/bulma.sass'
@import 'mq'

.navbar
  background-color: #383838
  a:hover
    color: gray
    background-color: #383838

.navbar-brand a
  color: #fff
  font-weight: bold

a.r-item
  color:#C1C1C1
  padding: 0.8rem 1.75rem
  +mobile
    color: gray
    &:hover
      background-color: #F1F1F1

.navbar-burger span
    background-color: #C1C1C1

footer
  background-color: $primary !important
  color: #fff

  .icon
    color: #fff
    margin-left: 20px
</style>
