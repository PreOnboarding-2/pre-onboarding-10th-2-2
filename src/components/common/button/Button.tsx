import React from 'react'
import { CommonProps } from '../../../types/common/CommonProps';
import ButtonUI from './Button.style';

const Button = ({ children, ...props }: CommonProps) => <ButtonUI {...props}>{children}</ButtonUI>

export default Button;
