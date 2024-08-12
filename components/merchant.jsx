//Merchant responding to the `paymentmethodchange` event
//from the Payment Request API by updating the 
//payment details with a `PaymentDetailsUpdate` object
request.addEventListener("paymentmethodchange", e => {
    if (e.methodName === "ecobankpay") {
        //Apply GHS 10 discount for example
        const discount = {
            label: "special discount",
            amount: {
                currency: "GHS",
                //The value being string complies the spec
                value: "-10.00"
            }
        };
        let total = 0;
        details.displayItems.push(discount);
        for (let item of details.displayItems) {
            total += parseFloat(item.amount.value);
        }
        //Convert the number back to string
        details.total.amount.value = total.toString();
        }
        //Pass a promise to `updateWith()`
        //and send updated payment details
        e.updateWith(details);
    
});