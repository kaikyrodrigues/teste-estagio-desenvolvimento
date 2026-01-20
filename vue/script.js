const createApp = Vue.createApp;

const app = createApp({});

app.component('meu-componente', {
    template:`
        <div>
            <h2>Digite algo:</h2>

            <input type="text" v-model="texto">

            <p>{{texto}}</p>
        
        </div>
    `,
    data(){
        return{
            texto: ''
        }
    } 
        
    
})

app.mount('#app')
