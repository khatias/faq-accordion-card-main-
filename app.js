




// let questionMaximum = document.getElementById("question-maximum");
// let  maximumDiv = document.getElementById("maximum-div")
// let newDd = document.createElement('dd');
// newDd.textContent = 'No more than 2GB. All files in your account must fit your allotted storage space';

// questionMaximum.addEventListener("click", function() {
//   let questionList = document.getElementById("question-list");
//  maximumDiv.appendChild(newDd);
// //   questionList.appendChild(newDd);
// });




// let teamMemberQuestion = document.getElementById("team-member-question");
// let teamMemberAnswer =document.getElementById("team-member-answer")
// let maximumFileQuestion = document.getElementById("maximum-file-question");
// let resetPasswordQuestion = document.getElementById("reset-password-question");
// let cancelSubscriptionQuestion = document.getElementById("cancel-subscription-question");
// let supportQuestion = document.getElementById("support-question")
// let teamMemberBox = document.getElementById("team-member-box");
// let maximumFileBox = document.getElementById("maximum-file-box");
// let resetPasswordBox = document.getElementById("reset-password-box");
// let cancelSubscriptionbox = document.getElementById("cancel-subscription-box");
// let supportBox = document.getElementById("support-box")

//  teamMemberAnswer.textContent ="You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.";
//  maximumFileAnswer.textContent = "No more than 2GB. All files in your account must fit your allotted storage space.";
//  resetPasswordAnswer.textContent = "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you."
//  cancelSubscriptionAnswer.textContent = "Yes! Send us a message and we’ll process your request no questions asked."


// teamMemberQuestion.addEventListener("click", function(){
//     teamMemberAnswer.style.display = "block"
    
// })


// let teamMemberQuestion = document.getElementById("team-member-question");
// let maximumFileQuestion = document.getElementById("maximum-file-question");
// let teamMemberAnswer = document.getElementById("team-member-box");
// let maximumFileAnswer = document.getElementById("maximum-file-box");

// // Add click event listeners to questions
// teamMemberQuestion.addEventListener("click", function () {
//   teamMemberAnswer.style.display = 'block'; // Show the answer
//   maximumFileAnswer.style.display = 'none'; // Hide other answers
// });

// maximumFileQuestion.addEventListener("click", function () {
//   maximumFileAnswer.style.display = 'block'; // Show the answer
//   teamMemberAnswer.style.display = 'none'; // Hide other answers
// });

let dtElements = document.querySelectorAll("dt");

for (let i = 0; i < dtElements.length; i++) {
    dtElements[i].addEventListener("click", function () {
        let ddElement = this.nextElementSibling;

        if (ddElement.style.display === "none" || ddElement.style.display === "") {
            ddElement.style.display = "block";
            this.classList.add("expanded");
            dtElements[i].style.fontWeight = "700"
        } else {
            ddElement.style.display = "none";
            this.classList.remove("expanded");
            dtElements[i].style.fontWeight = "400"
        }
    });
}