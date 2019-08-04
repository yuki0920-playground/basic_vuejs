var app = new Vue({
  el: '#app',
  mouted: function(){
    console.log(this.$refs.hello)
  }
})