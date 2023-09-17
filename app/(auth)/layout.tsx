import { PropsWithChildren } from 'react';

const AuthLayout = ({ children }: PropsWithChildren) => {
  return <div className='flex-1 flex flex-col items-center justify-center gap-8 p-4'>{children}</div>;
};

export default AuthLayout;