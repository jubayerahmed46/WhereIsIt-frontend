/* eslint-disable react/prop-types */

function ProfileImageValidate({ validImageUrl, handleImageError, user }) {
  return (
    <div>
      {!validImageUrl ? (
        <button className="text-2xl size-8 rounded-full bg-orange-500 text-white uppercase">
          {user?.displayName && user?.displayName[0]}
        </button>
      ) : (
        <img
          className="size-8 rounded-full"
          src={user?.photoURL}
          onError={handleImageError}
        />
      )}
    </div>
  );
}

export default ProfileImageValidate;
