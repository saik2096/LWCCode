import { LightningElement, api, wire,track } from 'lwc';
//  import { datatabClass } from 'lightning/uiRecordApi';
import datatabClass from '@salesforce/apex/datatabClass.datatabClass1';
export default class OpportunityTable extends LightningElement {
    
   @api recordId
    @track error;
   @track accList;

   @wire(datatabClass,{accountId:'$recordId'})

    wiredAccounts({data,error}){

        if(data){

            this.accList = data;

            this.errors = undefined;

        }

        else if(error){

            this.errors = error;

            this.accList = undefined;

        }

    }
}