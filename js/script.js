Vue.config.devtools = true;

new Vue({
    el: "#root",
    data: {
        items: [
            { url: 'img/01.jpg', titolo: 'Svezia', text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.' },
            { url: 'img/02.jpg', titolo: 'Gran Bretagna', text: 'Lorem ipsum' },
            { url: 'img/03.jpg', titolo: 'Germania', text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.' },
            { url: 'img/04.jpg', titolo: 'Svizzera', text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,' },
            { url: 'img/05.jpg', titolo: 'Paradise', text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,' }
        ],
        currentIndex: 0,

    },
    methods: {

    }
});
