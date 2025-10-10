import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import { NavLink } from "react-router-dom";
import { Button } from "antd";

let User = ({ user, followingInProgress, unfollow, follow }) => {
  return (
    <div className={styles.user}>
      <span>
        <div>
          <NavLink to={"/profile/" + user.id}>
            <img
              src={user.photos.small != null ? user.photos.small : userPhoto}
              className={styles.userPhoto}
            />
          </NavLink>
        </div>
        <div></div>
      </span>
      <span>
        {user.followed ? (
          <Button
            disabled={followingInProgress.some((id) => id === user.id)}
            onClick={() => {
              unfollow(user.id);
            }}
          >
            Unfollow
          </Button>
        ) : (
          <Button
            style={{ backgroundColor: "#5865f2" }}
            type="primary"
            disabled={followingInProgress.some((id) => id === user.id)}
            onClick={() => {
              follow(user.id);
            }}
          >
            Follow
          </Button>
        )}
        <div>{user.name}</div>
        <div>{user.status}</div>
      </span>
    </div>
  );
};

export default User;
