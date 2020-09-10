export const TYPE = "findTasks";

const findTasks = (id) => ({ type: TYPE, payload: id});

export default findTasks;