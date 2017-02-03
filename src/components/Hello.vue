<template>
  <div class="hello">
    <button v-on:click="update">update</button>
    <button v-on:click="changeThing">change</button>
    <h1>{{ thing1 }}</h1>
  </div>
</template>

<script>
import Tag from '../models/Tag'
import SubTag from '../models/SubTag'
import _ from 'lodash'
import g from 'genesis-object'

var origin = g(function(){
          var test = "test";
          var self = {
              id:"10asdf",
              thing1:1,
              thing2:2,
              getId:function(){
                console.log(test);
              },
              changeThing: function(){
                self.thing1 = 10;
              }
          }
          return self
      }, []);
var thing = g(function(){
          var test = "testies";
          var self = {
              id:1,
              item:1,
              getTest:function(){
                console.log(test);
              }
          }
          return self
      }, [origin]);
var gObj = g(function(){
          var self = {
              model:"vod",
              query: '',
              vods:thing,
              changeModel: function(){
                self.model = "updated"
              }
          }
          return self
      });


var ctrl = thing.create();
    

var t = Tag.create({time:{min:"10"}, subs:[{imadude:"youradude"}]});
var o = Tag.create({time:{min:"20"}});
// console.log(t);
export default {
  name: 'hello',
  data () {
    return thing.create()
  },
  methods:{
    update:function(){
      this.thing1 = "new tame"
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
