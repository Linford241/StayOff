/* How the service worker handles incoming frontend messages
*/
self.addEventListener("message", async (e) => {
    let details;
    try {
        switch (e.data.type) {
            //......//
            case 'PAYMENT METHOD CHANGED':
                const newMethod = e.data.paymentMethod;
                const newDetails = e.data.methodDetails;
                // Ensure no sensitive information is
                //passed in `newDetails`.
                //Inform the merchant of the payment method change
                //Notify the merchant of the payment method change
            
                details = await payment_request_event.changePaymentMethod(newMethod, newDetails);
               //Provided the new payment details,
               // send a message back to the frontend to 
              //update the UI
              postMessage('UPDATE_REQUEST', details);
              break;
        }
    } catch (error) {
        console.error(error);
    }
});


