"use strict";

export const filterBeasts = (beastList, filters) => {
  const { searchTerm, horns } = filters || {};
  console.log({ beastList, filters });
  return beastList.filter((beast) => {
    if (!searchTerm.length && horns === "All") return true;
    const fuzzySearchPattern = searchTerm
      .split(" ")
      .map((term) => {
        return term
          .replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
          .replace(/./g, "(?=.*$&)");
      })
      .join("");
    const regex = new RegExp(fuzzySearchPattern, "i");
    const isSearchTermMatch =
      !searchTerm.length ||
      regex.test(beast.title) ||
      regex.test(beast.description);
    const isHornsMatch = horns === "All" || beast.horns === parseInt(horns);

    return isSearchTermMatch && isHornsMatch;
  });
};

export const filterUniqueHornCounts = (beastList) => {
  return [
    "All",
    ...Array.from(new Set(beastList.map(({ horns }) => horns))).sort(
      (a, b) => a - b
    ),
  ];
};
