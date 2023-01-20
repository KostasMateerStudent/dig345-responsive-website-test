$("#secretButton").click(function () {
  $("#secretButton").text(
    $("#secretButton")
      .text()
      .replace("DIG 345 Site Test", "You Found the Secret!")
  );
});

$("#carouselCats").click(function () {
  console.log(
    "I feel pretty good about the test. I did have to look up a bunch of things in order to make sure I was doing things correctly. It was a good way to think about design again since the last time was during last semester."
  );
});
