import { LightningElement, track } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import RepoObj_OBJECT from '@salesforce/schema/RepoObj__c';
import Name from '@salesforce/schema/RepoObj__c.Name';
import Website from '@salesforce/schema/RepoObj__c.Website__c';
export default class On_Or_off_button extends LightningElement {
    objectApiName = RepoObj_OBJECT;
    fields = [Name,Website];
    handleSuccess(event) {
        const toastEvent = new ShowToastEvent({
            message : "Record ID:"+event.detail.id,
            FirstName: "Lisa",
            LastName: "Jones",
            Email: "ljones@developer.com"
        });
        this.dispatchEvent(toastEvent);
    }
    @track showField = false;
    @track fieldValue = '';
    handleToggleChange(event) {
        this.showField = event.target.checked;
    }
}