module.exports = function comparer(otherArray) {
  return function (current) {
    return (
      otherArray.filter((other) => {
        return other.title == current.title;
      }).length == 0
    );
  };
};
