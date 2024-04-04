import { contacts } from "./data.js";

const dt = luxon.DateTime;

const {createApp} = Vue;
createApp({
    data() {
      return {
        contacts,
        activeContactId : 1,
      }
    },
    methods : {
      selectContact(id){
        this.activeContactId = this.contacts.findIndex((el)=> el.id === id)
        console.log(this.activeContactId);
        return this.activeContactId
      } 
      },
    computed : {
      activeContact(){
        return this.contacts.find((el)=> el.id === this.activeContactId) 
        },

    },
    mounted () { 
            
    }
  }).mount('#app');