function newItem() {
  let li = $("<li></li>");
  let value = $("#input").val();
  if (value) {
    li.append(value);
    $("#list").append(li);
  } else {
    alert("Please give a valid list item.");
  }

  let deleteButton = $("<crossOutButton></crossOutButton>");
  deleteButton.append(document.createTextNode("X"));
  li.append(deleteButton);

  function deleteItem() {
    li.addClass("delete");
  }
  deleteButton.on("click", deleteItem);

  function markOffItem() {
    li.toggleClass("strike");
  }
  li.dblclick(markOffItem);

  $("#list").sortable();
}
