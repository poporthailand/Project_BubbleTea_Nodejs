const app = Vue.createApp({
    data(){
        return {
            show: true,
            url: 'http://google.com',
            books : [
                {title: 'The Final Empire',age: 45, img: 'assets/1.png', isFav : true},
                {title: 'final',age: 30, img: 'assets/2.png', isFav : false},
                
                
            ]
            
        }
    },
    methods:{
        toggleShowBooks(){
            this.show = !this.show
        },
        handleEvent(e, data){
            console.log(e, e.type)
            if (data){
                console.log(data)
            }
        },
        handleMousemove(e){
            this.x = e.offsetX
            this.y = e.offsetY
        },
        toggleFav(book){
            book.isFav = !book.isFav
            console.log(book)
        }
    },
    computed:{
        filteredBook(){
            return this.books.filter((book) => book.isFav)
        }
    }
})



app.mount('#apps')