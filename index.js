function loadIssue(){
  const issue = {
    state: "closed",
    number: 5,
    created_at: "2016-03-31 16:23:13 UTC",
    body: "Instructions say Get /team and POST /newteam. Rspec wants GET/newteam and POST/team."
  }

  const template = Handlebars.compile(document.getElementById("issue-template").innerHTML)
}
