/* eslint-disable react/prop-types */

function ProfileImageValidate({ validImageUrl, handlerImageError, user }) {
  return (
    <div>
      {validImageUrl ? (
        <img
          className="size-8 rounded-full"
          src={user.photoURL}
          onError={handlerImageError}
        />
      ) : (
        <button className="text-2xl size-8 rounded-full bg-orange-500 text-white">
          {user.displayName[0]}{" "}
        </button>
      )}
    </div>
  );
}

export default ProfileImageValidate;
