import React from "react";
import "../App.css";

const Form = (props: any) => {
  return (
    <form
      className="rounded-md shadow-md p-3 w-screen h-1/6 max-h-1/4 min-h-1/6 glass fixed bottom-3"
      id="add-task"
    >
      <div id="content">
        <label htmlFor="TaskTitle">What is our plan, captain?</label>
        <br />
        <input
          placeholder="Type something smart here..."
          typeof="text"
          name="TaskTitle"
          required
        ></input>
        <br />
        <label htmlFor="TaskType">Who can I blame later?</label>
        <br />
        <select name="TaskType" id="group-select">
          <option value="personal">Nah, only I am capable of such!</option>
          <option value="work">
            Need to be done so I get some of that juicy money.
          </option>
          <option value="studies">
            Urgh, why did I applied for the university?
          </option>
          <option value="other">
            Whatever, more tasks I have — cooler I look.
          </option>
        </select>
        <br />
        <div>{props.children}</div>
        <button
          type="submit"
          className="bg-black hover:bg-white hover:text-black transition font-semibold py-2 px-4 rounded"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
