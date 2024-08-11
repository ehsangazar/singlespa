import React, { Fragment } from "react";
import { getProcurement } from "../utils/api.js";
import { Link } from "react-router-dom";

export default function procurementList({ procurement, loadingprocurement, selectPerson }) {
  return (
    <div>
      <Fragment>
        {procurement.map((person, index) => {
          let borderClass = "border-b";
          if (index === 0) {
            borderClass = "border-t border-b";
          } else if (index + 1 === procurement.length) {
            borderClass = "";
          }
          return (
            <Link
              key={person.name}
              className={`h-12 flex items-center ${borderClass} border-white cursor-pointer no-underline`}
              to={`/procurement/${window.encodeURIComponent(person.id)}`}
            >
              {person.name}
            </Link>
          );
        })}
        {loadingprocurement && <div>Loading ...</div>}
      </Fragment>
    </div>
  );
}
