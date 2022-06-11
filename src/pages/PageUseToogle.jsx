import { useState } from 'react';

export const PageUseToggle = () => {
		const [userIsOnline, setUserIsOnline] = useState(false)

		const toggleUserIsOnline = () => {
			const _userIsOnline = userIsOnline ? false : true;
			setUserIsOnline(_userIsOnline); // Idee von Edward Variable wie useState mit underline
		}


  return (
    <div className="page_useToggle">
      <h2>Use Toggle</h2>
      <div className="buttonArea">
        {userIsOnline ? <p>User is online.</p> : <p>User is offline.</p>}
        <button onClick={toggleUserIsOnline}>Toggle User Status</button>
      </div>
    </div>
  );
};
