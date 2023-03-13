public with sharing class WhatsaAppController {
    @AuraEnabled
    public static Boolean sendTemplateMessage(String contactId) {

        contact contactDetail = [select id,Phone from contact where Id=:contactId];
        string whatsAppNumber = '91' +contactDetail.Phone;
        system.debug('whatsAppNumber:'+whatsAppNumber);
		
        String endpoint = 'https://graph.facebook.com/v15.0/110217262008339/messages';
//to get endpoint & token follow the below steps
//https://developers.facebook.com/apps/915882512992675/whatsapp-business/wa-dev-console/?business_id=768844984588073
//https://developers.facebook.com/docs/whatsapp/sample-app-endpoints
//https://glitch.com/dashboard?group=owned&sortColumn=boost&sortDirection=DESC&page=1&showAll=false&filterDomain=

       // String apiToken = 'EAANAZCYPXyaMBANRFZAGK4ZCnZClZC7ZC2NTOR4AKjMCgqYbkL5hZAmnXWX4YTeKnIfdJXWEZAODzcn027rgNoNzG2FlzeU0lsS0LBj32MgDgqGZCNwnRIRMuKEiqKQgANc2G3rduQmsRfuZA3UiV4PqNoZA9mNuXit4zqOljS3SwR0QR1qqagOEJxhem6S1fT8CSYdwXSWzJL7HZBDIELrl3fNfYwAYCAWRuoMZD';
        String apiToken = 'EAANAZCYPXyaMBAMRQuZBNMvo3um5LO9l3zTLtJLAUJYrilvVmWXcOqwqTqZBVqOjstzxDMZCpvgup9EfajL0FXmCEBqeSGo7mdqqzIkHDHuVFMOcZBCC5l803puiwsbdZBScY5ZBPUHryiooELhFi8pzfmtZBxjopPaWwKMV1KtiNzVljYPwauL8SfJxyONhexucDMCt7FF9WLeuTa7irYGae9vIboBFsyAZD';
        HttpRequest request = new HttpRequest();
        request.setEndpoint(endpoint);
        request.setMethod('POST');
		string body = '{ "messaging_product": "whatsapp", "to": "'+whatsAppNumber +'", "type": "template", "template": { "name": "hello_sai", "language": { "code": "en_US" } } }';
		system.debug('1'+ body);
        request.setHeader('Authorization', 'Bearer ' + apiToken);
	   system.debug('2'+ apiToken);
       system.debug('3'+ request);
        request.setHeader('Content-Type', 'application/json');
        request.setBody(Body);

        Http http = new Http();
        HttpResponse response = http.send(request);

        if (response.getStatusCode() == 200) {
            String responseBody = response.getBody();
            System.debug('Response Body: ' + responseBody);
            return true;
        } else {
            System.debug('Error Response: ' + response.getStatusCode() + ' ' + response.getStatus());
            return false;
        }
    }
}
