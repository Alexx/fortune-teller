//back-end
const luckyThreshold = 2;
const unluckyThreshold = -2;

/*
   Name: showLucky
   Parameters: none
   Description: hides unlucky and unreadable divs,
   shows lucky div
*/
function showLucky() {
  $(".unlucky, .unreadable").hide();
  $(".lucky").show();
}

/*
   Name: showUnlucky
   Parameters: none
   Description: hides lucky and unreadable divs,
   shows unlucky div
*/
function showUnlucky() {
  $(".lucky, .unreadable").hide();
  $(".unlucky").show();
}

/*
   Name: showUnreadable
   Parameters: none
   Description: hides unlucky and lucky divs,
   shows unreadable div
*/
function showUnreadable() {
  $(".lucky, .unlucky").hide();
  $(".unreadable").show();
}

//front-end
$(document).ready(function(){
  $(".fortuneForm").submit(function(event) {
    event.preventDefault();
    var answeredQuestions = [];
    $("input:checkbox[name=background]:checked").each(function() {
      var backgroundQuestion = parseInt($(this).val());
      answeredQuestions.push(backgroundQuestion);
    });
    $("input:checkbox[name=recentHappenings]:checked").each(function() {
      var recentQuestion = parseInt($(this).val());
      answeredQuestions.push(recentQuestion);
    });
    $("input:checkbox[name=familyHistory]:checked").each(function() {
      var familyQuestion = parseInt($(this).val());
      answeredQuestions.push(familyQuestion);
    });

    var totalScore = 0;
    answeredQuestions.forEach(function(questionValue) {
      return totalScore += questionValue;
    });

    if(totalScore <= unluckyThreshold) {
      showUnlucky();
    } else if (totalScore >= luckyThreshold) {
      showLucky();
    } else {
      showUnreadable();
    }

  });
});
