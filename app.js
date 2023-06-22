const app = Vue.createApp({
    data(){
        return{
            firstname: "Nurnabi",
            lastname: "Haider",
            email: "nurnabihaider13@gmail.com",
            gender: "Male",
            picture: "https://randomuser.me/api/portraits/men/10.jpg",
            
        }
    },
})

app.mount('#app')