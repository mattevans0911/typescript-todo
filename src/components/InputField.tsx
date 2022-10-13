import React from "react";

export const InputField = () => {
  return (
    <form className="input">
      <input type="input" placeholder="Enter a Task" className="input-box" />
      <button className="input-submit" type="submit">
        Go
      </button>
    </form>
  );
};
