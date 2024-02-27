import React, { ReactNode } from 'react';
import {
  ModalBody,
  ModalContainer,
  ModalHeader,
  ModalOverlay,
  ModalTitle,
} from './styles';
import Button from '../Button';
import { IoMdClose } from 'react-icons/io';

interface ModalProps {
  size?: number;
  isOpen: boolean;
  onClose: () => void;
  title?: ReactNode;
  footer?: ReactNode;
  children: JSX.Element | JSX.Element[];
}

export default function Modal({
  isOpen,
  size = 10,
  onClose,
  title,
  footer,
  children,
}: ModalProps) {
  return (
    <ModalOverlay isOpen={isOpen}>
      <ModalContainer size={size}>
        <ModalHeader>
          {title && <ModalTitle>{title}</ModalTitle>}
          <Button type="Text" onClick={onClose}>
            <IoMdClose />
          </Button>
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
        {footer}
      </ModalContainer>
    </ModalOverlay>
  );
}
