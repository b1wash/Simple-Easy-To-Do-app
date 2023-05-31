// $(document).ready(function () {
//   $("#addButton").click(function () {
//     var taskText = $("#taskInput").val();
//     $("<li>").text(taskText).appendTo("#taskList");
//   });

//   $(".deleteButton").click(function () {
//     $(this).closest("li").remove();
//   });
// });
$(document).ready(function () {
  // Your code goes here
  $("#addButton").click(function () {
    var taskValue = $("#taskInput").val();
    if (taskValue !== "") {
      var listItem = $("<li></li>").text(taskValue);
      $("#taskList").append(listItem);
      $("#taskInput").val("");
    }
  });
  $(document).on("click", "li", function () {
    $(this).toggleClass("completed");
  });

  $(document).on("dblclick", "li", function () {
    $(this).remove();
  });
});
