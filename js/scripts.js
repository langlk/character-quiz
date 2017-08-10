$(document).ready(function() {
  $("#quiz").submit(function(event) {
    var scores = [0, 0, 0, 0];
    var questions = ["question1", "question2", "question3", "question4"];

    questions.forEach(function(q) {
      var answer = parseInt($("select#" + q).val());
      scores[answer] += 1;
    });

    var indexOfMax = scores.indexOf(Math.max.apply(null, scores));
    $(".form-container").hide();
    if (indexOfMax === 0) {
      $(".mr-poopybutthole").show();
    } else if (indexOfMax === 1) {
      $(".birdperson").show();
    } else if (indexOfMax === 2) {
      $(".summer").show();
    } else {
      $(".mr-meeseeks").show();
    }

    event.preventDefault();
  });
});
