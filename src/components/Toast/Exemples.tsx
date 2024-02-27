import React from 'react';
import Button from '../Button';
import { Row } from '../Layout';
import { useToast } from '../../hooks';

export const AllVariants = () => {
  const { addToast } = useToast();

  const handleInfoToast = () => {
    addToast({
      message: 'This is a info toast',
      type: 'info',
    });
  };

  const handleSuccessToast = () => {
    addToast({ message: 'This is a success toast', type: 'success' });
  };

  const handleWarningToast = () => {
    addToast({ message: 'This is a warning toast', type: 'warning' });
  };

  const handleErrorToast = () => {
    addToast({ message: 'This is a error toast', type: 'error' });
  };

  return (
    <Row>
      <Button size="md" type="Primary" onClick={handleInfoToast}>
        <span>Show Info Toast</span>
      </Button>

      <Button size="md" type="Secondary" onClick={handleSuccessToast}>
        <span>Show Success Toast</span>
      </Button>

      <Button size="md" type="Default" onClick={handleWarningToast}>
        <span>Show Warning Toast</span>
      </Button>

      <Button size="md" type="Danger" onClick={handleErrorToast}>
        <span>Show Error Toast</span>
      </Button>
    </Row>
  );
};

export const InfoToast = () => {
  const { addToast } = useToast();

  const handleInfoToast = () => {
    addToast({ message: 'This is a info toast', type: 'info' });
  };

  return (
    <Button size="md" type="Primary" onClick={handleInfoToast}>
      <span>Show Info Toast</span>
    </Button>
  );
};

export const SuccessToast = () => {
  const { addToast } = useToast();

  const handleSuccessToast = () => {
    addToast({ message: 'This is a success toast', type: 'success' });
  };

  return (
    <Button size="md" type="Secondary" onClick={handleSuccessToast}>
      <span>Show Success Toast</span>
    </Button>
  );
};

export const WarningToast = () => {
  const { addToast } = useToast();

  const handleWarningToast = () => {
    addToast({ message: 'This is a warning toast', type: 'warning' });
  };

  return (
    <Button size="md" type="Default" onClick={handleWarningToast}>
      <span>Show Warning Toast</span>
    </Button>
  );
};

export const ErrorToast = () => {
  const { addToast } = useToast();

  const handleErrorToast = () => {
    addToast({ message: 'This is a error toast', type: 'error' });
  };

  return (
    <Button size="md" type="Danger" onClick={handleErrorToast}>
      <span>Show Error Toast</span>
    </Button>
  );
};

export const BlackToast = () => {
  const { addToast } = useToast();

  const handleErrorToast = () => {
    addToast({
      message: 'This is a black toast',
      type: 'black',
    });
  };

  return (
    <Button size="md" type="Base" onClick={handleErrorToast}>
      <span>Show Black Toast</span>
    </Button>
  );
};

export const DefaultToast = () => {
  const { addToast } = useToast();

  const handleErrorToast = () => {
    addToast({
      message:
        "This is a default toast, just in case you don't specify any kinda of type, it will assume this form",
    });
  };

  return (
    <Button size="md" type="Base" onClick={handleErrorToast}>
      <span>Show Default Toast</span>
    </Button>
  );
};
