import type { PropsWithChildren } from 'react';
import ProtectedRoute from '@/components/protected/user';

export default function WithProtected<T>(WrappedComponent: React.FC<T>) {
  return function ProtectedComponent(props: PropsWithChildren<T>) {
    return (
      <ProtectedRoute>
        <WrappedComponent {...props}>{props.children}</WrappedComponent>
      </ProtectedRoute>
    );
  };
}
