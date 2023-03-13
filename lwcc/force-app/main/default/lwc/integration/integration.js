import { LightningElement,api } from 'lwc';
import sendTemplateMessage from '@salesforce/apex/WhatsaAppController.sendTemplateMessage';
export default class Integration extends LightningElement {
    @api recordId;
    onSendMessageTemplate(){
       
        sendTemplateMessage({contactId : this.recordId})
        .then(result =>{
            window.alert("Message sent successfully");
         
        })
        .catch(error =>{
            window.alert("Message failed");
        })
    }
}