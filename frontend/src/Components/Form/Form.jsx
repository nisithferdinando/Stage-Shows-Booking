import React, { useState } from 'react';
import { IoTicketSharp } from "react-icons/io5";
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import Modal from 'react-modal';


const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);


const CheckoutForm = ({ ticket, closeModal, resetTicket }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error, paymentIntent } = await stripe.confirmCardPayment(
      ticket.clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: ticket.name,
            email: ticket.email,
          },
        },
      }
    );

    if (error) {
      setErrorMessage(error.message);
    } else if (paymentIntent.status === 'succeeded') {
      alert('Payment successful!');
      resetTicket(); 
      closeModal(); 
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <CardElement className="p-2 border rounded-lg mb-4" />
      {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
      <button
        type="submit"
        disabled={!stripe || loading}
        className="btn-primary dark:bg-gray-700 dark:border-gray-200 px-4 py-2 bg-blue-600 text-white rounded-lg"
      >
        {loading ? "Processing..." : "Pay Now"}
      </button>
    </form>
  );
};

const Form = () => {
  const [ticket, setTicket] = useState({
    name: "",
    email: "",
    amount: 0,
    clientSecret: ""
  });
  const [ticketCount, setTicketCount] = useState(1); 
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedTicketType, setSelectedTicketType] = useState(null); 

  const handleClick = (e) => {
    const name = e.target.name;
    setTicket((previousData) => {
      return {
        ...previousData,
        [name]: e.target.value,
      };
    });
  };

  const handleTicketType = (amount) => {
    setSelectedTicketType(amount); 
    setTicketCount(1); 
    setTicket((previousData) => ({
      ...previousData,
      amount
    }));
  };

  const handleTicketCountChange = (e) => {
    const value = Math.min(Math.max(e.target.value, 1), 10); 
    setTicketCount(value);
    setTicket((previousData) => ({
      ...previousData,
      amount: selectedTicketType * value 
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:5000/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ amount: ticket.amount })
    });

    const data = await response.json();
    setTicket((previousData) => ({
      ...previousData,
      clientSecret: data.clientSecret
    }));
    
    setModalIsOpen(true);
  };

  const resetTicket = () => {
    setTicket({
      name: "",
      email: "",
      amount: 0,
      clientSecret: ""
    });
    setTicketCount(1); 
    setSelectedTicketType(null); 
  };

  return (
    <div className='mt-24 pb-20 overflow-hidden'>
      <div className='w-[90%] md:w-[80%] mx-auto pb-8 bg-white dark:bg-slate-950 border-[1.5px] text-black dark:text-white rounded-2xl shadow-md border-slate-300 drop-shadow-lg dark:border-white dark:border-[1.5px]'>
        <h1 className='text-4xl text-center mt-8 text-slate-700 dark:text-slate-200'>Quickly Book Your Slot</h1>
        <div className='flex items-center justify-center gap-8 py-4 mt-8'>
          <button 
            onClick={() => handleTicketType(20)} 
            className={`button-square flex gap-x-2 items-center p-4 rounded-lg ${selectedTicketType === 20 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`} 
          >
            <IoTicketSharp className='text-4xl' />Single - $20
          </button>
          <button 
            onClick={() => handleTicketType(35)} 
            className={`button-square flex gap-x-2 items-center p-4 rounded-lg ${selectedTicketType === 35 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`} 
          >
            <IoTicketSharp className='text-4xl' />Double - $35
          </button>
          <button 
            onClick={() => handleTicketType(90)} 
            className={`button-square flex gap-x-2 items-center p-4 rounded-lg ${selectedTicketType === 90 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`} 
          >
            <IoTicketSharp className='text-4xl' />Group - $90
          </button>
          <button 
            onClick={() => handleTicketType(150)} 
            className={`button-square flex gap-x-2 items-center p-4 rounded-lg ${selectedTicketType === 150 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`} 
          >
            <IoTicketSharp className='text-4xl' />VIP - $150
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className='flex flex-col space-y-8 justify-self-center items-start mt-8 mr-32'>
            <input 
              type='text'
              name='name'
              id='name'
              placeholder='Enter your name'
              onChange={handleClick}
              className='w-[800px] h-[50px] border dark:border-slate-100 px-4 py-2 rounded-lg dark:bg-black border-slate-400 dark:text-xl text-xl'   
            />
            <input 
              type='email'
              name='email'
              id='email'
              placeholder='Enter your email'
              onChange={handleClick}
              className='w-[800px] h-[50px] border dark:border-slate-100 px-4 py-2 rounded-lg dark:bg-black border-slate-400 text-xl' 
            />
            {selectedTicketType && (
          <div className='flex justify-start  flex-col  mt-4'>
            <input 
              type='number'
              value={ticketCount}
              onChange={handleTicketCountChange}
              min={1}
              max={10}
              className='w-[100px] h-[50px] border dark:border-slate-100 px-4 py-2 rounded-lg dark:bg-black border-slate-400 text-xl'
            />
            <span className='mt-2'>Ticket Count (Max: 10)</span>
          </div>
        )}

            <button className="btn-primary dark:bg-gray-700 dark:border-gray-200">Book Now</button>
          </div>
        </form>
        
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          contentLabel="Payment Modal"
          className="bg-white dark:bg-slate-800 dark:text-slate-200 w-[500px] h-[400px] mx-auto p-8 rounded-lg shadow-xl relative"
          overlayClassName="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center"
        >
          <h2 className="text-2xl font-bold mb-4">Complete Your Payment</h2>
          <h3 className="text-lg mb-4">Total Amount: ${ticket.amount}</h3>
          <Elements stripe={stripePromise}>
            <CheckoutForm ticket={ticket} closeModal={() => setModalIsOpen(false)} resetTicket={resetTicket}  />
          </Elements>
          <button
            onClick={() => setModalIsOpen(false)}
           className="absolute top-4 right-4 text-gray-500"
          >
            X
          </button>
        </Modal>
      </div>
    </div>
  );
};

export default Form;