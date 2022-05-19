import React, { SyntheticEvent, useState } from 'react';
import { geocode } from '../utils/geocoding';
import { Btn } from '../common/Button';
import './AddForm.css';

export const AddForm = () => {
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState(null);
  const [form, setForm] = useState({
    name: '',
    description: '',
    address: '',
    price: 0,
    url: '',
  });

  const updateForm = (key: string, value: any) => {
    setForm((form) => ({
      ...form,
      [key]: value,
    }));
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    setLoading(true);
    try {
      const { lat, lon } = await geocode(form.address);

      const res = await fetch('http://localhost:3001/ads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...form,
          lat,
          lon,
        }),
      });

      const data = await res.json();

      setId(data.id);
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h2>Your announcement is being added to the map...</h2>;
  }

  if (id) {
    return (
      <p>
        Your announcement {form.name} has been added to the map with ID: {id}
      </p>
    );
  }

  return (
    <form className='add-form' onSubmit={handleSubmit}>
      <h2>Add your announcement</h2>
      <p>
        <label>
          Nazwa:{' '}
          <input
            type='text'
            name='name'
            required
            maxLength={99}
            value={form.name}
            onChange={(e) => updateForm('name', e.target.value)}
          />
        </label>
      </p>
      <p>
        <label>
          Description:{' '}
          <textarea
            name='description'
            maxLength={99}
            value={form.description}
            onChange={(e) => updateForm('description', e.target.value)}
          />
        </label>
      </p>
      <p>
        <label>
          Price:{' '}
          <input
            type='number'
            name='name'
            required
            maxLength={99}
            value={form.price}
            onChange={(e) => updateForm('price', Number(e.target.value))}
          />
          <small>Leave 0 if you do not want to display the price</small>
        </label>
      </p>
      <p>
        <label>
          Address URL:{' '}
          <input
            type='text'
            name='url'
            maxLength={99}
            value={form.url}
            onChange={(e) => updateForm('url', e.target.value)}
          />
        </label>
      </p>
      <p>
        <label>
          Address on map:{' '}
          <input
            type='text'
            name='address'
            maxLength={99}
            value={form.address}
            onChange={(e) => updateForm('address', e.target.value)}
          />
        </label>
      </p>
      <Btn text='Save announcement' />
    </form>
  );
};
