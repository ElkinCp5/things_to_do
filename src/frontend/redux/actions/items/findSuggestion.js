export const TYPE = "findSuggestion";

const findSuggestion = (text) => ({ type: TYPE, payload: text});

export default findSuggestion;