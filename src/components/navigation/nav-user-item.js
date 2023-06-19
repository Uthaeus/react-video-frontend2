import { NavLink } from 'react-router-dom';

import defaultImage from '../../assets/images/space.png';

function NavUserItem({ user }) {
  let image = user.avatar ? `http://localhost:4000${user.avatar.url}` : defaultImage;

  return (
    <NavLink to='/userpage' className={({isActive}) => isActive ? 'nav-user-item item-active' : 'nav-user-item'}>
      <img src={image} alt={user.username} width='90%' />
      <span className='user-item-username'>{user.username}</span>
    </NavLink>
  );
}

export default NavUserItem;