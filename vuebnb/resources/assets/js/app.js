import Vue from 'vue';
// import "core-js/fn/object/assign";
import sample from './data';

var app = new Vue({
    el: '#app',
    // data: {
    //     title: sample.title,
    //     address: sample.address,
    //     about: sample.about,
    //     headerImageStyle: {'background-image': 'url(images/header.jpg)'},
    //     amenities: sample.amenities,
    //     prices: sample.prices,
    //     contracted: true,
    //     modalOpen: false
    // },
    data: Object.assign(sample, {
        headerImageStyle: {'background-image': 'url(images/header.jpg)'},
        contracted: true,
        modalOpen: false
    }),
    methods: {
        escapeKeyListener: function (evt) {
            if (evt.keyCode === 27 && this.modalOpen) {
                this.modalOpen = false;
            }
        }
    },
    watch: {
        modalOpen: function () {
            var className = 'modal-open';
            if (this.modalOpen) {
                document.body.classList.add(className);
            } else {
                document.body.classList.remove(className);
            }
        }
    },
    created: function () {
        document.addEventListener('keyup', this.escapeKeyListener);
    },
    destroyed: function () { //To avoid any memory leaks
        document.removeEventListener('keyup', this.escapeKeyListener);
    }
});