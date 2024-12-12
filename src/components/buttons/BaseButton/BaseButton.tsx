import styled from 'styled-components';

interface BaseButtonProps {
  size: 'lg' | 'sm';
}

export const BaseButton = styled.button<BaseButtonProps>`
  font-weight: 600;
  font-size: ${(props: BaseButtonProps) => (props.size === 'sm' ? '11px' : '22px')};

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;
