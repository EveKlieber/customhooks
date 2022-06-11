export const PageUseToggle = () => {
  const userIsOnline = true;

  return (
    <div className="page_useToggle">
      <h2>Use Toggle</h2>
      <div className="buttonArea">
        {userIsOnline ? <p>User is online.</p> : <p>User is offline.</p>}
        <button>Toggle User Status</button>
      </div>
    </div>
  );
};
