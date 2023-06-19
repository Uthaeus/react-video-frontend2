import defaultImage from '../../assets/images/space.png';

function NavUserItem({ user }) {
  let image = user.avatar ? `http://localhost:4000${user.avatar.url}` : defaultImage;

  return (
    <div className="nav-user-item">
      <img src={image} alt={user.username} width='90%' />
      <span className='user-item-username'>{user.username}</span>
    </div>
  );
}

export default NavUserItem;