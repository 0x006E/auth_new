import { useSnackbar } from "react-simple-snackbar";
import { logout } from "../api";
import useStore from "../store";
import Button from "./Button";

function Authenticated() {
  // eslint-disable-next-line no-unused-vars
  const [open, _] = useSnackbar();
  const user = useStore((state) => state.user);

  return (
    <div className="text-2xl font-bold">
      You are now authenticated
      <pre className="text-xs font-normal overflow-hidden break-all whitespace-pre-wrap">
        {JSON.stringify(user.providerData, null, 2)}
      </pre>
      <Button
        onClick={() => {
          logout()
            .then(() => {
              open("Successfully logged out");
            })
            .catch((error) => {
              open(error.message);
            });
        }}
      >
        Logout
      </Button>
    </div>
  );
}

export default Authenticated;
