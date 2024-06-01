// app/routes/DiscountForm.jsx

import { json, useLoaderData } from '@remix-run/react';
import { useState } from 'react';

export function meta() {
  return {
    title: 'Discount Form',
    description: 'Form to set up discount tiers',
  };
}

export function loader() {
  // TODO: Fetch any data needed for the form
  return json({ data: {} });
}

export default function DiscountForm() {
  const data = useLoaderData();
  const [cartValue, setCartValue] = useState('');
  const [products, setProducts] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Send a POST request to your server with the form data
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* TODO: Add form fields for cartValue and products */}
    </form>
  );
}