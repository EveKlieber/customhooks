import { useToggle } from "./hooks/useToggle";
export const PageUseToggle = () => {
  const [userIsOnline, toggleUserIsOnline] = useToggle(false); // wir erhalen ein Array mit Boolean und func
  const [serverIsDown, toggleServerIsDown] = useToggle(false);

  return (
    <div className="page_useToggle">
      <h2>Use Toggle</h2>

      <div className="userIsOnline">
        <div className="buttonArea">
          {userIsOnline ? <p>User is online.</p> : <p>User is offline.</p>}
          <button onClick={() => toggleUserIsOnline()}>
            Toggle User Status
          </button>
          <button onClick={() => toggleUserIsOnline(true)}>
            Make user online
          </button>
          <button onClick={() => toggleUserIsOnline(false)}>
            Make user offline
          </button>
        </div>
      </div>

      <div className="serverIsDown">
        <div className="buttonArea">
          {serverIsDown ? <p>Warning: Server is down !</p> : <p>Server is online.</p>}
          <button onClick={() => toggleServerIsDown()}>
            Toggle Server Status
          </button>
          <button onClick={() => toggleServerIsDown(true)}>
            Bring server down
          </button>
          <button onClick={() => toggleServerIsDown(false)}>
            Bring server up
          </button>
        </div>
      </div>
      
    </div>
  );
};
