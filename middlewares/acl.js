const rules = {
  KT: "KT",
  GV: "GV",
};

const ACL = [
  { method: "get", path: "/xemthi", rules: [rules.KT] },
  { method: "get", path: "/xemthi/public", rules: [rules.KT] },
  { method: "get", path: "/draf", rules: [rules.GV] },
];

module.exports = ACL;
