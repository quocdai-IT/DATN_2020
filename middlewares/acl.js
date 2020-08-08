const rules = {
  KT: "KT",
  GV: "GV",
};

const ACL = [
  { method: "get", path: "/xemthi", rules: [rules.KT] },
  { method: "get", path: "/xemthi/public", rules: [rules.KT] },
  { method: "get", path: "/draf", rules: [rules.GV, rules.KT] },
  {method : "post", path: "/draf", rules: [rules.GV]},
  {method: "get", path: '/xemthi/accept', rules: [rules.KT]}
];

module.exports = ACL;
