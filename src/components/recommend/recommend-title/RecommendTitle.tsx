import React from 'react'
import RecommendTitleUI from './RecommendTitle.style';
import { CommonProps } from '../../../types/common/CommonProps';

const RecommendTitle = ({ children, ...props }: CommonProps) => <RecommendTitleUI {...props}>{children}</RecommendTitleUI>;

export default RecommendTitle;
