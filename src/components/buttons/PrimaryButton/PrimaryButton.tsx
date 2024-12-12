import React from 'react';
import styled from 'styled-components';

const PrimaryButtonBase = styled.button`
  height: 30px;
  min-width: 96px;
  font-weight: 600;
  border-radius: 4px;
  background: #27a98b;
  padding: 0 26px;
  font-size: 12px;
  color: #ffffff;

  &:hover {
    background: #227a66;
  }

  &:disabled {
    cursor: not-allowed;
    background: #f2eeee;
  }
`;

interface PrimaryButtonProps {
  loading: boolean;
  disabled: boolean;
  children: any;
}

export const PrimaryButton: React.FC<any> = ({
  loading,
  children,
  disabled,
  ...props
}: PrimaryButtonProps) => {
  return (
    <PrimaryButtonBase {...props} disabled={loading || disabled}>
      {loading ? 'Loading...' : children}
    </PrimaryButtonBase>
  );
};
