const app = Vue.createApp({
    data(){
        return{
            firstname: "",
            lastname: "",
            title:" ",
            email: "",
            gender: "",
            picture: "https://randomuser.me/api/portraits/men/10.jpg",
            age: "",
            dob:"",
            
        }
    },
    methods:{ 
       async getUser(){
        const res = await fetch('https://randomuser.me/api')
        const {results} = await res.json()

        console.log(results)
        this.title = results[0].name.title
        this.firstname = results[0].name.first
        this.lastname = results[0].name.last
        this.email = results[0].email
        this.gender = results[0].gender
        this.picture = results[0].picture.large
        this.age = results[0].dob.age
        this.dob = new Date(results[0].dob.date).toLocaleDateString('en-GB');


    },
    },
})

app.mount('#app')