import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import { CldImage } from 'next-cloudinary';

const Profile = ({ user }) => {
  let localUser = user['profile/user_metadata'];
  return (
    <>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <CldImage
            width="300"
            height="500"
            alt={localUser.name}
            src={localUser.user_metadata.profile_photo}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{localUser.name}</h2>
          <p>{localUser.email}</p>
        </div>
      </div>
    </>
  );
};

export default withPageAuthRequired(Profile);
