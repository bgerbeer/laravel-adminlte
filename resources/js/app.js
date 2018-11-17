// require('./bootstrap');
// require('jquery');
global.$ = global.jQuery = require('jquery');
require('bootstrap3');
require('admin-lte');

// window.Vue = require('vue');
// Vue.component('example-component', require('./components/ExampleComponent.vue'));
/*
const app = new Vue({
    el: '#app'
});
*/


// Admin LTE Sidebar
$('.sidebar-toggle').on('click',function(){
    var cls =  $('body').hasClass('sidebar-collapse');
    if(cls == true){
        $('body').removeClass('sidebar-collapse');
    } else {
        $('body').addClass('sidebar-collapse');
    }
});
