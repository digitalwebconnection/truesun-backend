import { Navigate } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: Props) {
  const isAuth = localStorage.getItem('adminAuth') === 'true';
  if (!isAuth) return <Navigate to="/admin" replace />;
  return <>{children}</>;
}
