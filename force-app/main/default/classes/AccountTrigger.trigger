trigger AccountTrigger on Account (before insert, before update, after insert, after update) {

    if (Trigger.isBefore) {
        if (Trigger.isInsert) {
            // Runs before record is inserted
            for (Account acc : Trigger.new) {
                acc.Description = 'Created from trigger';
                System.debug('Setting description for new Account: ' + acc.Name);
            }
        }

        if (Trigger.isUpdate) {
            // Runs before record is updated
            //go away
            for (Account acc : Trigger.new) {
                if (acc.Name != Trigger.oldMap.get(acc.Id).Name) {
                    acc.Description = 'Name was updated';
                }
            }
        }
    }

    if (Trigger.isAfter) {
        if (Trigger.isInsert) {
            // Runs after record is inserted
            System.debug('Account Inserted: ' + Trigger.new);
        }

        if (Trigger.isUpdate) {
            // Runs after record is updated
            System.debug('Account Updated: ' + Trigger.new);
        }
    }
}
