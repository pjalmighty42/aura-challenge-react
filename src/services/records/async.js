import { data } from "components/Record/data";

// Util
function mockFetch() {
  return () => {
    return new Promise((resolve, reject) => {
      const timeout = () => {
        const error = new Error(
          "We're having trouble retrieving that, please try again later"
        );
        error.code = 500;
        const randomDigit = Math.floor(Math.random() * 11);

        randomDigit >= 5 ? resolve(data) : reject(error);
      };

      // Return promise after timeout
      setTimeout(timeout, 2000);
    });
  };
}

// Thunk
export function doGetRecords() {
  return async dispatch => {
    try {
      const data = await dispatch(mockFetch());
      console.log(data);
      // TODO: store data in Redux...
    } catch (error) {
      console.log(error);
      // TODO: handle error state...
    }
  };
}
