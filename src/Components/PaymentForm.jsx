import React, { useEffect, useState } from 'react';

const PaymentForm = () => {
    const [paymentFormInstance, setPaymentFormInstance] = useState(null);

    useEffect(() => {
        const initializePaymentForm = () => {
            if (window.SqPaymentForm) {
                try {
                    const paymentForm = new window.SqPaymentForm({
                        applicationId: "sandbox-sq0idb-OaKRIgzAE2iqL6n-1HLEHw",
                        locationId: "LPAX9KM4N79ZY",
inputClass: 'sq-input',
                    inputStyles: [{
                        fontSize: '16px',
                        padding: '16px',
                        color: '#373F4A',
                        backgroundColor: 'transparent',
                        lineHeight: '24px',
                        placeholderColor: '#CCC',
                        _webkitFontSmoothing: 'antialiased',
                        _mozOsxFontSmoothing: 'grayscale'
                    }],
                    cardNumber: {
                        elementId: 'sq-card-number',
                        placeholder: 'Card Number'
                    },
                    cvv: {
                        elementId: 'sq-cvv',
                        placeholder: 'CVV'
                    },
                    expirationDate: {
                        elementId: 'sq-expiration-date',
                        placeholder: 'MM/YY'
                    },
                    postalCode: {
                        elementId: 'sq-postal-code',
                        placeholder: 'Postal'
                    },                    });
                    paymentForm.build();
                    setPaymentFormInstance(paymentForm);
                } catch (error) {
                    console.error('Error initializing payment form:', error);
                }
            } else {
                console.log('Square SDK not loaded yet, retrying in 1 second...');
                setTimeout(initializePaymentForm, 1000);
            }
        };

        initializePaymentForm();

        return () => {
            if (paymentFormInstance) {
                paymentFormInstance.destroy();
            }
        };
    }, []);

    const handlePayment = () => {
        if (paymentFormInstance) {
            paymentFormInstance.requestCardNonce();
        } else {
            console.error('Payment form not initialized');
        }
    };

    return (
        <div>
            <div id="sq-card-number"></div>
            <div id="sq-cvv"></div>
            <div id="sq-expiration-date"></div>
            <div id="sq-postal-code"></div>
            <button onClick={handlePayment}>Pay</button>
        </div>
    );
};

export default PaymentForm;












































