Vue.config.devtools = true;

new Vue({
    el: "#root",
    data: {
        items: [
            { url: 'img/01.jpg', title: 'Svezia', text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.' },
            { url: 'img/02.jpg', title: 'Gran Bretagna', text: 'Lorem ipsum' },
            { url: 'img/03.jpg', title: 'Germania', text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.' },
            { url: 'img/04.jpg', title: 'Svizzera', text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,' },
            { url: 'img/05.jpg', title: 'Paradise', text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,' }
        ],
        currentIndex: 4,

    },

    methods: {
        previousItem () {
            this.currentIndex--;

            if (this.currentIndex < 0) {
                this.currentIndex = this.items.length - 1;
            }

            return this.currentIndex
        },

        nextItem () {

            this.currentIndex++;

            if (this.currentIndex > this.items.length - 1) {
                this.currentIndex = 0;
            }

            return this.currentIndex
        }
    },


/*
   mounted() {
        setInterval(() => {
        this.nextItem()
      }, 3000);
    }
*/


});
