import { LightningElement, api, wire,track } from 'lwc';
//  import { datatabClass } from 'lightning/uiRecordApi';
import datatabClass from '@salesforce/apex/datatabClass.datatabClass1';
// import datatabClass1 from '@salesforce/apex/SumAmount.datatabClass2';
export default class OpportunityTable extends LightningElement {
    
   @api recordId;
   @track error;
   @track accList;
   total;
   total1;

   @wire(datatabClass,{accountId:'$recordId'})

    wiredAccounts({data,error}){

        if(data){

            this.accList = data;
            this.bcc = data;
            //  this.ccc = data;
            this.errors = undefined;
        
            
            this.calculateTotal();
    
            }
        

        else if(error){

            this.errors = error;
            this.accList = undefined;
            // this.bcc = undefined;

        }
       
    }
    calculateTotal(){
        let sum=0;
        let sum1=0;
        for(var key in this.bcc){
            sum += this.bcc[key].Amount;
            sum1 +=this.bcc[key].Probability;
         
        }
        // function bcc(Amount){
        // return Amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g,',');
        // }
            

        this.total = sum;
        this.total1 = sum1;
        
    }


}
