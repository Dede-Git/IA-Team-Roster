import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { createFighter, updateFighter } from '../../api/fighterData';

const initialState = {
  image: '',
  first_name: '',
  last_name: '',
  favorite: false,
};

export default function FighterForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (obj.firebaseKey) {
      setFormInput(obj);
    }
  }, [obj]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.firebaseKey) {
      updateFighter(formInput)
        .then(() => router.push('/'));
    } else {
      const payload = { ...formInput, uid: user.uid };
      createFighter(payload).then(({ name }) => {
        const patchPayloadFBK = { firebaseKey: name };
        updateFighter(patchPayloadFBK).then(() => {
          router.push('/');
        });
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-white mt-5">{obj.firebaseKey ? 'Update' : 'Create'} Fighter</h2>

      {/* First Name Input  */}
      <FloatingLabel controlId="floatingInput1" label="Fighter First Name" className="mb-3">
        <Form.Control type="text" placeholder="Enter first name" name="first_name" value={formInput.first_name} onChange={handleChange} required />
      </FloatingLabel>

      {/* Last Name Input  */}
      <FloatingLabel controlId="floatingInput2" label="Fighter Last Name" className="mb-3">
        <Form.Control type="text" placeholder="Enter last name" name="last_name" value={formInput.last_name} onChange={handleChange} required />
      </FloatingLabel>

      {/* Image Input  */}
      <FloatingLabel controlId="floatingInput3" label="Fighter Image" className="mb-3">
        <Form.Control type="url" placeholder="Enter an image url" name="image" value={formInput.image} onChange={handleChange} required />
      </FloatingLabel>

      {/* Email Input  */}
      {/* <FloatingLabel controlId="floatingInput4" label="Author Email" className="mb-3">
        <Form.Control type="email" placeholder="Enter Email" name="email" value={formInput.email} onChange={handleChange} required />
  </FloatingLabel> */}

      {/* A WAY TO HANDLE UPDATES FOR TOGGLES, RADIOS, ETC  */}
      <Form.Check
        className="text-white mb-3"
        type="switch"
        id="favorite"
        name="favorite"
        label="Lead Goat?"
        checked={formInput.favorite}
        onChange={(e) => {
          setFormInput((prevState) => ({
            ...prevState,
            favorite: e.target.checked,
          }));
        }}
      />

      {/* SUBMIT BUTTON  */}
      <Button type="submit">{obj.firebaseKey ? 'Update' : 'Create'} Fighter</Button>
    </Form>
  );
}

FighterForm.propTypes = {
  obj: PropTypes.shape({
    first_name: PropTypes.string,
    image: PropTypes.string,
    firebaseKey: PropTypes.string,
    last_name: PropTypes.string,
    uid: PropTypes.string,
    favorite: PropTypes.bool,
  }),
};

FighterForm.defaultProps = {
  obj: initialState,
};
