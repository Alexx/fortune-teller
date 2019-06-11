$(document).ready(function(){
  $(".fortuneForm").submit(function(event) {
    event.preventDefault();
    var answeredQuestions = [];
    $("input:checkbox[name=background]:checked").each(function() {
      var backgroundQuestion = parseInt($(this).val());
      answeredQuestions.push(backgroundQuestion);
    });
    $("input:checkbox[name=recentHappenings]:checked").each(function() {
      var backgroundQuestion = parseInt($(this).val());
      answeredQuestions.push(backgroundQuestion);
    });
    $("input:checkbox[name=familyHistory]:checked").each(function() {
      var backgroundQuestion = parseInt($(this).val());
      answeredQuestions.push(backgroundQuestion);
    });

    var totalScore = 0;
    answeredQuestions.forEach(function(question) {
      return totalScore += question;
    });

    if(totalScore <= -2) {
      $(".lucky, .unreadable").hide();
      $(".unlucky").show();
    } else if (totalScore >= 2) {
      $(".unlucky, .unreadable").hide();
      $(".lucky").show();
    } else {
      $(".lucky, .unlucky").hide();
      $(".unreadable").show();

    }
  });
});
