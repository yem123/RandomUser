import { useState } from "react";

export default function UserCard({ user }, { loading }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const dot = (title) =>
    title !== "Mr" && title !== "Ms" && title !== "Mrs" ? title : `${title}.`;

  return (
    <div>
      {!loading && user && (
        <div
          className={`user-data ${imageLoaded ? "visible" : "hidden"} ${
            user.gender === "male" ? "mal" : "fem"
          }`}
        >
          <img
            src={user.picture.large}
            alt="User Avatar"
            className="user-image"
            onLoad={handleImageLoad}
          />
          <div className="user-details">
            <h2>{`${dot(user.name.title)} ${user.name.first} ${
              user.name.last
            }`}</h2>
            <p>
              <strong>Phone:</strong> {user.phone}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Location:</strong>{" "}
              {`${user.location.city}, ${user.location.country}`}
            </p>
            <p>
              <strong>Year_of_birth:</strong> {user.dob.date.substring(0, 4)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
