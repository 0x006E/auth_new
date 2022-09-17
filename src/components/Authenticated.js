import { useSnackbar } from "react-simple-snackbar";
import Dashboard from "../pages/Dashboard.js";
import Questionnare from "../pages/Questionnare.js";
import useStore from "../store";

function Authenticated() {
  // eslint-disable-next-line no-unused-vars
  const [open, _] = useSnackbar();
  const user = useStore((state) => state.user);

  const name = user.providerData[0].displayName;
  const questionnareCompleted = false;
  return (
    <div>
      {questionnareCompleted ? (
        <Dashboard name={name} />
      ) : (
        <Questionnare name={name} />
      )}
      {/* <button onClick={() => logout()}>Logout</button> */}
    </div>
    // <div className="text-2xl font-bold">
    //   You are now authenticated
    //   <pre className="text-xs font-normal overflow-hidden break-all whitespace-pre-wrap">
    //     {JSON.stringify(user.providerData, null, 2)}
    //   </pre>
    //   <Button
    //     onClick={() => {
    //       logout()
    //         .then(() => {
    //           open("Successfully logged out");
    //         })
    //         .catch((error) => {
    //           open(error.message);
    //         });
    //     }}
    //   >
    //     Logout
    //   </Button>
    // </div>
  );
}
export default Authenticated;
