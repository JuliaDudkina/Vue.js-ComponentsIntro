const app = Vue.createApp({
    data(){
        return{
            friends:[
                {
                    id: 'manuel',
                    name: 'Manuel Lorenz',
                    phone: '01234 5678 991',
                    email: 'fhdkj@fjdhfjg.com'
                },
                {
                    id: 'julie',
                    name: 'Juliae Jones',
                    phone: '09873 584 221',
                    email: 'juliadd@frthl.com'
                }
            ],
        }
    },
});
// Reusable pieces of HTML with the same logic
// use dash! custom components
app.component('friend-contact', {
    template: `
    <li>
      <h2>{{ friend.name }}</h2>
      <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show'}} Details</button>
      <ul v-if="detailsAreVisible">
        <li><strong>Phone:</strong> {{ friend.phone }}</li>
        <li><strong>Email:</strong> {{ friend.email }}</li>
      </ul>
    </li>
    `,
    data(){
        return{
            detailsAreVisible: false,
            friend: {
                id: 'manuel',
                name: 'Manuel Lorenz',
                phone: '01234 5678 991',
                email: 'fhdkj@fjdhfjg.com'
            },
        }
    },
    methods:{
        toggleDetails(){
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
});

app.mount('#app');