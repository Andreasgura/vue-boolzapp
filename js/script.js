import { contacts } from "./data.js";

const dt = luxon.DateTime;

const {createApp} = Vue;
createApp({
    data() {
      return {
        contacts,
        activeMessageId : 0,
      }
    },
    methods : {
      selectContact(id){
        this.activeMessageId = this.contacts.findIndex((el)=> el.id === id)
        console.log(this.activeMessageId);
        return this.activeMessageId
      } 
      },
  mounted () { 
            
    }
  }).mount('#app');