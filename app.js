const { createApp } = Vue

    let app = createApp({
        data() {
        return {
            title: 'Display Random User'
        }
        }
    })

    app.component('container-div', {
        template: `
            <div :class="subClass">
                <img :src="picture" :alt="firstName" :class="gender">
                <h2>{{ firstName }} {{ lastName }}</h2>
                <h3>{{ email }}</h3>
                <button :class="gender" @click="getUser">Get Random User</button>
            </div>
        `,
        data() {
            return{
                firstName: "Joel",
                lastName: "Khamala",
                email: "jwanyoa@gmail.com",
                picture: "https://randomuser.me/api/portraits/men/74.jpg",
                gender: "male",
                subClass: "sub-container"

            }
        },
        methods: {
            async getUser(){
                const res = await fetch("https://randomuser.me/api")
                const { results } = await res.json()
                
                this.firstName = results[0].name.first
                this.lastName = results[0].name.last
                this.email = results[0].email
                this.gender = results[0].gender
                this.picture = results[0].picture.large
            }
        }
    })
    
    app.mount('#app')