import { ChangeEvent, useState } from 'react';
import Button from '../Button';
import React from 'react';
import Modal from './Modal';
import { Column, Row } from '../Layout';
import { P, Small } from '../Typography';
import InputText from '../Input';
import { useForm } from '../../hooks/useForm';
import { IoMdSave } from 'react-icons/io';

export default function DefaultModal() {
  const [isOpen, setIsOpen] = useState(false);
  const { setValue, getAllValues, getUniqueValue, clearForm } = useForm({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValue(name, value);
  };

  return (
    <>
      <Button type="Primary" onClick={() => setIsOpen(true)}>
        <span>Open modal</span>
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={
          <Column
            style={{
              gap: '0rem',
            }}
          >
            <P type="lightBold">Create Account</P>
            <Small>Join our dev community</Small>
          </Column>
        }
        footer={
          <Row
            style={{
              justifyContent: 'space-between',
            }}
          >
            <Button type="Text" onClick={clearForm}>
              <span>Clear</span>
            </Button>

            <Button
              hover
              type="Primary"
              trailIcon={<IoMdSave />}
              onClick={() => console.log(getAllValues())}
            >
              <span>Save</span>
            </Button>
          </Row>
        }
      >
        <Column>
          <InputText
            name="email"
            value={getUniqueValue('email')}
            placeholder="email@provider.com"
            label="Email:"
            onChange={handleChange}
          />
          <InputText
            type="password"
            name="password"
            value={getUniqueValue('password')}
            placeholder="super secure password goes here"
            label="Password:"
            onChange={handleChange}
          />
        </Column>
      </Modal>
    </>
  );
}
