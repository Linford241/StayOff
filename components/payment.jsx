//Create a new PaymentRequest object
const request = new PaymentRequest ([{
    supportedMethods: 'ecobankmobile/pay.com',
    supportedMethods: 'gcb/pay.com',
    supportedMethods: 'calbankmobile/pay.com',
    supportedMethods: 'cbgmobile/pay.com',
    supportedMethods: 'paypal/pay.com',
    supportedMethods: 'stripe/pay.com'
}], {
    total: {
        label: 'Amount due',
        amount: {value: '10', currency: 'USD'}
    }
});