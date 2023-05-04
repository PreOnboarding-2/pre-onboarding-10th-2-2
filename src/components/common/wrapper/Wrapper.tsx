import React from 'react'
import { CommonProps } from '../../../types/common/CommonProps';
import WrapperUI from './Wrapper.style';

const Wrapper = ({ children, ...props }: CommonProps) => <WrapperUI {...props}>{children}</WrapperUI>;

export default Wrapper;
