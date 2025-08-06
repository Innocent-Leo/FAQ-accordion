const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  // Handle Click
  question.addEventListener("click", toggleAnswer);

  // Handle Keyboard
  question.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleAnswer.call(question);
    }
  });
});

function toggleAnswer() {
  const answer = this.nextElementSibling;
  const icon = this.querySelector(".icon");
  const isOpen = answer.classList.contains("show");

  if (answer && answer.classList) {
    document.querySelectorAll(".answer").forEach((ans) => {
      ans.classList.remove("show");
    });

    document.querySelectorAll(".icon").forEach((i) => {
      i.src = "./assets/images/icon-plus.svg";
    });

    if (!isOpen) {
      answer.classList.add("show");
      icon.src = "./assets/images/icon-minus.svg";
      this.setAttribute("aria-expanded", "true");
    } else {
      this.setAttribute("aria-expanded", "false");
    }
  }
}
