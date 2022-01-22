import React, { useState, useEffect } from "react";

const ProfileStatusWithHooks = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <>
      {!editMode && (
        <div>
          <b>Status</b> :{" "}
          <span onDoubleClick={activateEditMode}>{props.status || "No"}</span>
        </div>
      )}
      {editMode && (
        <div>
          <input
            autoFocus
            onChange={onStatusChange}
            onBlur={deactivateEditMode}
            value={status}
          ></input>
        </div>
      )}
    </>
  );
};

export default ProfileStatusWithHooks;
