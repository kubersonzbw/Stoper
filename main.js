import { createTaskTemplate } from "./divTools";
import "./style.scss";
const btnStart = document.querySelector(".start");
const btnPause = document.querySelector(".pause");
const btnStop = document.querySelector(".stop");
const btnReset = document.querySelector(".reset");
const btnHistory = document.querySelector(".history");
const stopWatch = document.querySelector(".stopwatch");
const time = document.querySelector(".time");
const timeList = document.querySelector(".time-list");
const btnInfo = document.querySelector(".info");
const modalShadow = document.querySelector(".modal-shadow");
const btnModalClose = document.querySelector(".close");
const btnColor = document.querySelector(".color");
const divWithColors = document.querySelector(".colors");
const btnRed = document.querySelector(".red");
const btnGreen = document.querySelector(".green");
const btnYellow = document.querySelector(".yellow");

const Stopwatch = function (stopwatch, timeList, time) {
  this.countTime;
  this.minutes = 0;
  this.seconds = 0;
  this.running = false;
  this.number = 1;
  this.handleStart = function () {
    if (this.running === true) {
      return;
    }
    this.running = true;
    this.countTime = setInterval(() => {
      if (this.seconds < 9) {
        this.seconds++;
        this.changeContent();
      } else if (this.seconds >= 9 && this.seconds < 59) {
        this.seconds++;
        this.changeContent();
      } else {
        this.minutes++;
        this.seconds = 0;
        this.changeContent();
      }
    }, 300);
  };

  this.handlePause = function () {
    clearInterval(this.countTime);
    this.running = false;
  };

  this.changeContent = function () {
    stopwatch.textContent = `${this.minutes}:${this.seconds
      .toString()
      .padStart(2, `0`)}`;
  };

  this.handleReset = function () {
    this.handlePause();
    time.textContent = `Ostatni czas: ${this.minutes}:${this.seconds
      .toString()
      .padStart(2, `0`)}`;
    if ((time.style.visibility = "visible")) {
      time.style.visibility = "hidden";
    }
    this.minutes = 0;
    this.seconds = 0;
    this.changeContent();
  };

  this.handleStop = function () {
    time.textContent = `Ostatni czas: ${this.minutes}:${this.seconds
      .toString()
      .padStart(2, `0`)}`;
    timeList.insertAdjacentHTML(
      "beforeend",
      createTaskTemplate(this.minutes, this.seconds, this.number)
    );
    this.handleReset();
    time.style.visibility = "visible";
    this.number++;
  };

  this.handleHistory = function () {
    const ul = document.querySelector("ul");
    if (ul.style.display === "block") {
      ul.style.display = "none";
    } else {
      ul.style.display = "block";
    }
  };

  this.handleResetOnlyLiAndNumber = function () {
    const listItems = document.querySelectorAll("li");
    listItems.forEach((item) => {
      item.remove();
    });
    this.number = 1;
  };

  this.openModal = function () {
    modalShadow.style.display = "block";
  };

  this.closeModal = function () {
    modalShadow.style.display = "none";
  };

  this.changeColor = function () {
    if (divWithColors.style.display === "flex") {
      divWithColors.style.display = "none";
    } else {
      divWithColors.style.display = "flex";
    }
  };

  this.ChagneColorToGreen = function (color) {
    stopWatch.style.setProperty("color", color);

    const btns = document.querySelectorAll("button:not(.close)");
    btns.forEach((e) => {
      e.style.setProperty("border", `1px solid ${color}`);
      e.addEventListener("mouseover", function () {
        e.style.setProperty("background-color", color);
      });
      e.addEventListener("mouseout", function () {
        e.style.setProperty("background-color", "transparent");
      });
      btnInfo.addEventListener("mouseover", function () {
        btnInfo.style.setProperty("color", color);
      });
      btnInfo.addEventListener("mouseout", function () {
        btnInfo.style.setProperty("color", "#d2c7be");
      });
      btnColor.addEventListener("mouseover", function () {
        btnColor.style.setProperty("color", color);
      });
      btnColor.addEventListener("mouseout", function () {
        btnColor.style.setProperty("color", "#d2c7be");
      });
    });

    divWithColors.style.display = "none";
  };

  this.changeColorToRed = function (color) {
    stopWatch.style.setProperty("color", color);
    const btns = document.querySelectorAll("button:not(.close)");
    btns.forEach((e) => {
      e.style.setProperty("border", `1px solid ${color}`);
      e.addEventListener("mouseover", function () {
        e.style.setProperty("background-color", color);
      });
      e.addEventListener("mouseout", function () {
        e.style.setProperty("background-color", "transparent");
      });
      btnInfo.addEventListener("mouseover", function () {
        btnInfo.style.setProperty("color", color);
      });
      btnInfo.addEventListener("mouseout", function () {
        btnInfo.style.setProperty("color", "#d2c7be");
      });
      btnColor.addEventListener("mouseover", function () {
        btnColor.style.setProperty("color", color);
      });
      btnColor.addEventListener("mouseout", function () {
        btnColor.style.setProperty("color", "#d2c7be");
      });
    });

    divWithColors.style.display = "none";
  };

  this.changeColorToYellow = function (color) {
    stopWatch.style.setProperty("color", color);
    const btns = document.querySelectorAll("button:not(.close)");
    btns.forEach((e) => {
      e.style.setProperty("border", `1px solid ${color}`);
      e.addEventListener("mouseover", function () {
        e.style.setProperty("background-color", color);
      });
      e.addEventListener("mouseout", function () {
        e.style.setProperty("background-color", "transparent");
      });
      btnInfo.addEventListener("mouseover", function () {
        btnInfo.style.setProperty("color", color);
      });
      btnInfo.addEventListener("mouseout", function () {
        btnInfo.style.setProperty("color", "#d2c7be");
      });
      btnColor.addEventListener("mouseover", function () {
        btnColor.style.setProperty("color", color);
      });
      btnColor.addEventListener("mouseout", function () {
        btnColor.style.setProperty("color", "#d2c7be");
      });
    });

    divWithColors.style.display = "none";
  };

  this.changeModalColor = function (color) {
    btnModalClose.style.setProperty("background-color", color);
    btnModalClose.style.setProperty("border", `1px solid ${color}`);
  };
};

const sw = new Stopwatch(stopWatch, timeList, time);

btnYellow.addEventListener("click", () => {
  sw.changeColorToYellow("#faea06");
  sw.changeModalColor("#faea06");
});

btnRed.addEventListener("click", () => {
  sw.changeColorToRed("#fa1406");
  sw.changeModalColor("#fa1406");
});

btnGreen.addEventListener("click", () => {
  sw.ChagneColorToGreen("#06fa63");
  sw.changeModalColor("#06fa63");
});

btnColor.addEventListener("click", () => {
  sw.changeColor();
});

btnModalClose.addEventListener("click", () => {
  sw.closeModal();
});

btnInfo.addEventListener("click", () => {
  sw.openModal();
});

btnHistory.addEventListener("click", () => {
  sw.handleHistory();
});

btnStop.addEventListener("click", () => {
  sw.handleStop();
});

btnReset.addEventListener("click", () => {
  sw.handleReset();
  sw.handleResetOnlyLiAndNumber();
});

btnPause.addEventListener("click", () => {
  sw.handlePause();
});
btnStart.addEventListener("click", () => {
  sw.handleStart();
});
