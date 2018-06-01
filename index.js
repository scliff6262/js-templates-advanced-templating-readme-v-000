Handlebars.registerHelper('comment_body', function(){
  if(this.state === 'closed'){
    return new Handlebars.Safestring(this.body)
  } else {
    return new Handlebars.Safestring("<strong>" + this.body + "</strong>")
  }
})

function loadIssues(){
  const template = Handlebars.compile(document.getElementById("issue-template").innerHTML)

  const result = template(issues)

  document.getElementsByTagName("main")[0].innerHTML += result
}
