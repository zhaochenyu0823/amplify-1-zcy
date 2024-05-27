import { generateClient } from 'aws-amplify/api';
import { createInfo } from '../graphql/mutations';
import { useState } from 'react';
const CreateInfo = () => {
  const [formState, setFormState] = useState({ userId: '',name: '', phone: '', address: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();


    try {

      const client = generateClient();

      const result = await client.graphql({
        query: createInfo,
        variables: {
          input: {
            userId:formState.userId,
            name: formState.name,
            phone:formState.phone,
            address:formState.address
          }
        }
      });
      console.log(result);


      setFormState({ userId: '', name: '', phone: '', address: '' });
    } catch (err) {
      console.error('Error creating info:', err);
    }
  };

  return (
    <div>
      <h2>Create New Info</h2>
      <form onSubmit={handleSubmit}>
      <label>
          userId:
          <input type="text" name="userId" value={formState.userId} onChange={handleChange} required />
        </label>
        <label>
          Name:
          <input type="text" name="name" value={formState.name} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Phone:
          <input type="text" name="phone" value={formState.phone} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Address:
          <input type="text" name="address" value={formState.address} onChange={handleChange} required />
        </label>
        <br />
        <button type="submit">Add Info</button>
      </form>
    </div>
  );
};

export default CreateInfo;
