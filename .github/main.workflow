workflow "Security" {
  resolves = ["npm audit"]
  on = "push"
}

action "npm audit" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  runs = "npm audit"
}