import {  React } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { formatPrice } from '../src/utils/helpers';
import GooglePayButton from "@google-pay/button-react";
import {
  getAllCarts,
  removeFromCart,
  toggleCartQty,
  clearCart,
  getCartTotal,
} from "./store/cartSlice";

const Payment = ({x}) => {
       const dispatch = useDispatch();
       const carts = useSelector(getAllCarts);
       const { itemsCount, totalAmount} = useSelector((state) => state.cart);
  
  return (
    <div className="payment">
      <GooglePayButton
        environment="TEST"
        paymentRequest={{
          apiVersion: 2,
          apiVersionMinor: 0,
          allowedPaymentMethods: [
            {
              type: "CARD",
              parameters: {
                allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                allowedCardNetworks: ["MASTERCARD", "VISA"],
              },
              tokenizationSpecification: {
                type: "PAYMENT_GATEWAY",
                parameters: {
                  gateway: "example",
                  gatewayMerchantId: "exampleGatewayMerchantId",
                },
              },
            },
          ],
          merchantInfo: {
            merchantId: "12345678901234567890",
            merchantName: "Demo Merchant",
          },
          transactionInfo: {
            totalPriceStatus: "FINAL",
            totalPriceLabel: "Total",
            totalPrice:"10",
            currencyCode: "USD",
            countryCode: "US",
          },
          shippingAddressRequired: true,
          callbackIntents: ["SHIPPING_ADDRESS", "PAYMENT_AUTHORIZATION"],
        }}
        onLoadPaymentData={(paymentRequest) => {
              alert('Payment success', paymentRequest);

          console.log("Success", paymentRequest);
        }}
       
        onPaymentAuthorized={(paymentData) => {
          console.log("Payment Authorised Success", paymentData);
          return { transactionState: "SUCCESS" };
        }}
        onPaymentDataChanged={(paymentData) => {
          console.log("On Payment Data Changed", paymentData);
          return {};
        }}
        existingPaymentMethodRequired="false"
        buttonColor="black"
        buttonType="Buy"
      />
    </div>
  );
};

export default Payment;
