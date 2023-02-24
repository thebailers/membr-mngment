import { DocumentData } from "firebase/firestore";

import { Navigate } from "react-router-dom";

const ProtectedRoute = ({
  user,
  children,
}: {
  user: DocumentData | null | undefined;
  children: React.ReactElement;
}) => {
  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  return children;
};

export default ProtectedRoute;
