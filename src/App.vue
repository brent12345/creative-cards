<template>
<div class="container">
  <div class="row">
    <div class="col-sm-12">
      <nav-header @pageWasChanged="currentPage = $event"></nav-header>
      <!--{{ currentPage }}-->
      <div id="instructions" class="text-center italic">
        <div class="row">
          <div class="col-sm-6">
            <p>
              <em>&larr; Make changes in the edit card below:</em>
            </p>
            </div>
          <div class="col-sm-6">
            <p>
              <em>And they will show on the card! &rarr;</em>
            </p>
          </div>
        </div>
        </div>
      <transition
      appear
      appear-active-class="custom-appear-active-class"
      name="fade"
      mode="out-in"
      @enter="enter">
       <keep-alive>
      <component v-bind:is="currentPage"></component>
      </keep-alive>
      </transition>
       <cc-footer>
        <p class="text-center" slot="app-name">&copy; {{ appName }}</p>
        <nav>
          <ul class="nav justify-content-center">
              <li class="nav-item"><a class="nav-link">Home</a></li>
              <li class="nav-item"><a class="nav-link">About Us</a></li>
              <li class="nav-item"><a class="nav-link">Contact Us</a></li>
          </ul>
        </nav>
      </cc-footer>
    </div>
  </div>
</div>
</template>

<script>
import FirebaseConfig from './firebaseConfig.js'
import Header from './components/Header.vue'
import CardFront from './components/card/CardFront.vue'
import CardInsideLeft from './components/card/CardInsideLeft.vue'
import CardInsideRight from './components/card/CardInsideRight.vue'
import CardBack from './components/card/CardBack.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'app',
  data () {
    return {
        currentPage: 'cardFront',
        appName: 'Creative Cards'
    }
  },
  methods: {
    enter(el, done) {
      //console.log(el)
      document.getElementById('instructions').style.display = "none";
    }
  },
  components: {
    navHeader: Header,
    cardFront: CardFront,
    CardInsideLeft: CardInsideLeft,
    CardInsideRight: CardInsideRight,
    CardBack: CardBack,
    ccFooter: Footer
  }
}
</script>

<style>
 body {
   font-family: Verdana, Geneva, sans-serif;
   color: #333;
 }

 h1 {
   margin-top: 10px;
 }

 a{
   cursor: pointer;
 }

 .fade-enter, .fade-leave-to {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity .5s;

}

.custom-appear-active-class {
  transition: opacity 1s;
}

.fade-leave-active {
  transition: opacity .5s;

}

.custom-enter-active {
  animation: scale-in 0.5s;
}

.custom-leave-active {
  animation: scale-out 0.5s;
}

@keyframes scale-in {
  0% {transform: scale(0); }
  100% {transform: scale(1); }
}

@keyframes  scale-out {
    0% {transform: scale(1); }
  100% {transform: scale(0); }
}

</style>
