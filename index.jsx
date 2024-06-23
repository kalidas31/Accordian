import React, { useState } from "react";
import data from "./data";
import "./styles.css";
export default function Accordian() {
  const [selected, setselected] = useState(null);
  const [enablemultiselection, setenablemultiselection] = useState(false);
  const [multiple, setmultiple] = useState([]);
  function handlesingleselection(getcurrentid) {
    setselected(getcurrentid === selected ? null : getcurrentid);
  }
  function handlemultiselection(getcurrentid) {
    let cpymultiple = [...multiple];
    const findindexofcurrentid = cpymultiple.indexOf(getcurrentid);
    if (findindexofcurrentid === -1) cpymultiple.push(getcurrentid);
    else cpymultiple.splice(findindexofcurrentid, 1);
    setmultiple(cpymultiple);
  }
  return (
    <div className="wrapper">
      <button onClick={()=>setenablemultiselection(!enablemultiselection)}>
        Enable Multi Selection
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataitem) => (
            <div className="item">
              <div
                onClick={
                  enablemultiselection
                    ? ()=> handlemultiselection(dataitem.id)
                    :()=> handlesingleselection(dataitem.id)
                }
                className="title"
              >
                <h3>{dataitem.question}</h3>
                <span>+</span>
              </div>

              {selected === dataitem.id || multiple.indexOf(dataitem.id)!==-1 ? (
                <div className="content">{dataitem.answer}</div>
              ) : null}
              
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
}
