import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK)
const Payment = () => {
    return (
        <div>
            <div className="hero h-[400px]" style={{ backgroundImage: 'url(https://static.vecteezy.com/system/resources/previews/005/175/047/non_2x/make-payment-word-concepts-banner-money-transfer-transaction-mobile-banking-digital-wallet-presentation-website-isolated-lettering-typography-idea-linear-icons-outline-illustration-vector.jpg' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div>
                        <h1 className="text-4xl md:text-5xl lg:text-9xl text-black font-bold text-center playfair mt-[55px] md:mt-[100px] lg:mt-[100px]">Donations</h1>
                    </div>
                </div>
            </div>

            <Elements stripe={stripePromise}>
                <CheckoutForm></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;