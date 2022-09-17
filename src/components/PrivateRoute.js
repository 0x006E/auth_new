import { Navigate } from "react-router-dom";
import useStore from "../store";

function PrivateRoute({ children }) {
  const user = useStore((state) => state.user);
  const auth = user !== null ? true : false;

  return auth ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
