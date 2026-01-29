function updateDateTime() {
  const now = new Date();
  const time = now.toLocaleTimeString("he-IL", {
    hour: "2-digit",
    minute: "2-digit"
  });
  const date = now.toLocaleDateString("he-IL");
  document.getElementById("datetime").innerText = time + " | " + date;
}

setInterval(updateDateTime, 1000);
updateDateTime();

// טעינת config
fetch("config.json")
  .then(r => r.json())
  .then(cfg => {
    document.getElementById("main-image").src = cfg.mainImage;

    const board = document.getElementById("board-messages");
    cfg.boardMessages.forEach(msg => {
      const div = document.createElement("div");
      div.style.marginBottom = "20px";
      div.innerHTML =
        "<strong>" + msg.title + "</strong><br>" +
        msg.body;
      board.appendChild(div);
    });

  });

// פרשת השבוע רק ביום שישי
if (new Date().getDay() === 5) {
  document.getElementById("parasha").innerText = "פרשת השבוע תופיע כאן";
} else {
  document.getElementById("parasha").innerText = "";
}

