import { FC } from 'react';

const HeaderTag: FC<{ className?: string }> = ({ className, children }) => {
  return <p className={className}>{children}</p>;
};

export default HeaderTag;
