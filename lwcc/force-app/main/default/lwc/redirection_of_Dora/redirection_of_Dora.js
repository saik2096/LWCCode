import { LightningElement,api } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';
export default class DashboardRedirect extends NavigationMixin(LightningElement) {
//    @api recordId;
    // console.log('test1'+NavigateToReports);
     
       navigateToReports() {
    console.log('...'+NavigationMixin);
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Report',
                actionName: 'home'
            },
        });
    }
            // Navigation to web page 
            navigateToDashboard() {
        this[NavigationMixin.Navigate]({
            type: "standard__objectPage",
            attributes: {
            objectApiName: 'Opportunity',
            actionName: 'new'
            },
        });
    }
    navigateToDashboard1() {
        this[NavigationMixin.Navigate]({
            type: "standard__objectPage",
            attributes: {
            objectApiName: 'Contact',
            actionName: 'new'
            
            },
        });
    }
    navigateToWebPage() {
        this[NavigationMixin.Navigate]({
            "type": "standard__webPage",
            "attributes": {
                "url": "https://lwcsrs1-dev-ed.develop.lightning.force.com/lightning/n/Redirection"
            }
        });
    }
    get options() {
        return [
            { label: 'Staging', value: 'staging' },
            { label: 'Production', value: 'production' },
        ];
    }
}