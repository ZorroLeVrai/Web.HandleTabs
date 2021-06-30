function openTab(evt)
{
  openTabWithTargetElement(evt.currentTarget);
}

function openTabWithTargetElement(evtTarget)
{
  //hide all elements with class="tab-content"
  for (let element of document.getElementsByClassName("tab-content"))
  {
    element.style.display = "none";
  }

  //de-activate all tab labels (tab links)
  for (let element of document.getElementsByClassName("tab-label"))
  {
    element.classList.remove("active");
  }

  // get the current id
  let contentId = evtTarget.id.split('-')[0];

  //show the current tab
  document.getElementById(contentId).style.display = "block";

  //set an "active" class to the button that opened the tab
  evtTarget.classList.add("active");
}

//select the JAVA tab by default
openTabWithTargetElement(document.getElementById("JAVA-label"));