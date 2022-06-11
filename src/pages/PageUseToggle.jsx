import { useToggle } from './hooks/useToggle';
export const PageUseToggle = () => {
		const [userIsOnline, toggleUserIsOnline] = useToggle(false); // wir erhalen ein Array mit Boolean und func


  return (
    <div className="page_useToggle">
      <h2>Use Toggle</h2>
      <div className="buttonArea">
        {userIsOnline ? <p>User is online.</p> : <p>User is offline.</p>}
        <button onClick={() => toggleUserIsOnline()}>Toggle User Status</button>
        <button onClick={() => toggleUserIsOnline(true)}>Make user online</button>
        <button onClick={() => toggleUserIsOnline(false)}>Make user offline</button>
      </div>
    </div>
  );
};
