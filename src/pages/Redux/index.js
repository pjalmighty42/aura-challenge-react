// Globals
import React, { useEffect } from "react";

// Components
import { Record } from "../../components/Record";

// Misc
import { data } from "../../components/Record/data";
import { doGetRecords } from "../../services/records";
import { useDispatch } from "react-redux";

// Component
function Redux() {
  // Hooks
  const dispatch = useDispatch();

  // Hooks - effects
  useEffect(() => {
    dispatch(doGetRecords());
    // TODO: replace data file with connected data from Redux...
  }, []);

  // Render
  return (
    <div className="aura-page aura-redux">
      <h1>Top Records of 2020</h1>

      <div className="aura-page-content">
        {data.map(record => {
          return <Record key={record.id} data={record} />;
        })}
      </div>
    </div>
  );
}

export { Redux };
