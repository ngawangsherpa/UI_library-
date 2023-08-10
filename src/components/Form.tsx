import React from "react";

const Form = () => {
  return (
    <form className="space-y-4">
      <label className="block">
        Name: <input className="border rounded w-full py-2 px-3" type="text" />
      </label>
      <label className="block">
        Email:{" "}
        <input className="border rounded w-full py-2 px-3" type="email" />
      </label>
      <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
        Submit
      </button>
    </form>
  );
};

export default Form;
