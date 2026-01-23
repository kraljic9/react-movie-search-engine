import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  function backToMain() {
    navigate("/");
  }

  return (
    <>
      <h1>404 Page Not Found</h1>
      <p>If you wish to go back click the button below.</p>
      <button onClick={backToMain}>Main Page</button>
    </>
  );
}

export default NotFound;
