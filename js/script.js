import { contacts } from "./data.js";

const dt = luxon.DateTime;

const { createApp } = Vue;
createApp({
  data() {
    return {
      contacts,
      activeContactId: 1,
      textMessage: '',
      answerMessage: 'ok',
      status: ['sent', 'received'],
      searchContactText : '',
      show : false
    }
  },
  methods: {
    selectContact(id) {
      this.activeContactId = id
      console.log(this.activeContactId);
    },
    
    sendMessage() {
      this.newObjMessage(this.textMessage, this.status[0]);
      this.newObjMessage(this.answerMessage, this.status[1])
    },
    
    

    /* fz per creare un nuovo oggetto messaggio, pusharlo nell'array dei messaggi e ripulire la casella di input */
    newObjMessage(text, status) { 
      const lastMessage = {
        date: '10/01/2020 15:30:55',
        message: text,
        status: status
      };
      this.activeContact.messages.push(lastMessage);
      this.textMessage = '';
    },
  },
  computed: {
    activeContact() {

      /*   let activeContact = null;
        this.contacts.forEach(contact => {

        });

      function find (array, funzioneInput){
        let result = null;
          for (let i = 0; i<array.length; ++i){
            if (funzioneInput(array[i])){
              result = array[i];
              break;
            }
          }
          return result;
      }

      function funzioneInput (contact){
        contact.id === 5;
      } */

      return this.contacts.find((contact) => contact.id === this.activeContactId)
    },
    searchContact(){
      let clonatedContacts = this.contacts.filter((contact)=>{
        if (this.searchContactText === ''){
          return contact
        }
        else if(contact.name.toLowerCase().includes(this.searchContactText.toLowerCase()))
        return contact
      })
      return clonatedContacts
    }
  },
  mounted() {
console.log(this.searchContact);
  }
}).mount('#app');