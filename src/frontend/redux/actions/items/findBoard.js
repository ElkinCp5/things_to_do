export const TYPE = "findBoard";

const findBoard = (text) => ({ type: TYPE, payload: text});

export default findBoard;