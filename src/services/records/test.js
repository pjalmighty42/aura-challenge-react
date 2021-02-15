import { init } from "Internal/store";
import * as redux from "./redux";

describe("records service", () => {
  // Config
  const store = init({ records: redux.records });
  const { dispatch, getState } = store;

  // Root reducer
  it("has records reducer", () => {
    const reducer = redux.getRecords(getState());
    expect(reducer).toEqual([]);
    expect(reducer).toHaveLength(0);
  });
});
