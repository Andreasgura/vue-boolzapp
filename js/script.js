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
      status: ['sent', 'received']
    }
  },
  methods: {
    selectContact(id) {
      this.activeContactId = id
      console.log(this.activeContactId);
    },
    /*newObjMessage(){
      const lastMessage =  {
       date: '10/01/2020 15:30:55',
       message: this.textMessage,
       status: 'sent'
      }
      this.activeContact.messages.push(lastMessage)
      this.textMessage = ''
    */
    sendMessage() {
      this.newObjMessage(this.textMessage, this.status[0]);
      this.newObjMessage(this.answerMessage, this.status[1])
    },
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

  },
  mounted() {

  }
}).mount('#app');