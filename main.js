var app = new Vue({
    el: '#app',
    data: {
        images: [
            {
                url: 'https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?cs=srgb&dl=clouds-country-daylight-371633.jpg&fm=jpg',
                alt: 'prima foto'
            },
            {
                url: 'https://static.photocdn.pt/images/articles/2017/04/28/iStock-646511634.jpg',
                alt: 'seconda foto'
            },
            {
                url: 'https://cdn.mos.cms.futurecdn.net/FUE7XiFApEqWZQ85wYcAfM.jpg',
                alt: 'terza foto'
            },
            {
                url: 'https://static.photocdn.pt/images/articles/2017/04/28/iStock-546424192.jpg',
                alt: 'quarta foto'
            }
        ],
        idx: 0
    },
    mounted() {
        let that = this;

        document.addEventListener('keyup', function(e) {
            if (e.key === 'ArrowLeft')
                that.prev();
            if (e.key === 'ArrowRight')
                that.next();
        });
    },
    methods: {
        prev() {
            this.idx--;
            // If idx becomes negative -> idx = last item of the array
            if (this.idx < 0)
                this.idx = this.images.length - 1;
        },
        next() {
            this.idx++;
            // If idx exceed the last item of the array -> idx = 0
            if (this.idx >= this.images.length)
                this.idx = 0;
        },
        getIdx(i) {
            this.idx = i;
        }
    }
});
Vue.config.devtools = true;