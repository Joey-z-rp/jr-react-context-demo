import React from 'react';

import UserAvatar from './UserAvatar';
import { withUser } from './UserContext';

const UserStats = ({ user }) => (
    <div className="user-stats">
        <div>
            <UserAvatar user={user} />
            {user.name}
        </div>
        <div className="stats">
            <div>{user.followers} Followers</div>
            <div>Following {user.following}</div>
        </div>
    </div>
);

export default withUser(UserStats);
