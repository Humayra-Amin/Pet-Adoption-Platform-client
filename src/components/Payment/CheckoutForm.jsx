import useAxiosSecure from "@/hooks/useAxiosSecure";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";

const CheckoutForm = () => {
    const [error, setError] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    

    useEffect(() => {
        axiosSecure.post('/create-payment-intent')
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement)

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        })

        if (error) {
            console.log('payment error', error);
            setError(error.message);
        }
        else {
            console.log('payment method', paymentMethod);
            setError('')
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            <CardElement className="container mx-auto my-5">
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            </CardElement>

            <button className="btn inline-flex items-center mt-4 px-6 py-2 text-sm font-medium text-center my-5 lg:ml-32 text-white bg-green-700 rounded-lg hover:bg-green-800 robotoSlab" type="submit" disabled={!stripe}>
                Pay
            </button>
            <p className="text-red-600">{error}</p>
        </form>
    );
};

export default CheckoutForm;