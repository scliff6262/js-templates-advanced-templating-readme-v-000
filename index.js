function loadIssue(){
  /*
    const issue = {
    state: "closed",
    number: 5,
    created_at: "2016-03-31 16:23:13 UTC",
    body: "Instructions say GET /team and POST /newteam. Rspec wants GET/newteam and POST/team."
  }
*/
  const template = Handlebars.compile(document.getElementById("issue-template").innerHTML)
  for(let i = 0; i < issues.length; i++){
    const result = template(issues[i])

    document.getElementsByTagName("main")[0].innerHTML += result
  }
}
