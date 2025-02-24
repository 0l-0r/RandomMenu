const foodImgs = [
  "./source/img/Food_01.png",
  "./source/img/Food_02.png",
  "./source/img/Food_03.png",
  "./source/img/Food_04.png",
  "./source/img/Food_05.png",
  "./source/img/Food_06.png",
  "./source/img/Food_07.png",
  "./source/img/Food_08.png",
  "./source/img/Food_09.png",
  "./source/img/Food_10.png",
  "./source/img/Food_100.png",
  "./source/img/Food_101.png",
  "./source/img/Food_11.png",
  "./source/img/Food_12.png",
  "./source/img/Food_13.png",
  "./source/img/Food_14.png",
  "./source/img/Food_15.png",
  "./source/img/Food_16.png",
  "./source/img/Food_17.png",
  "./source/img/Food_18.png",
  "./source/img/Food_19.png",
  "./source/img/Food_20.png",
  "./source/img/Food_21.png",
  "./source/img/Food_22.png",
  "./source/img/Food_23.png",
  "./source/img/Food_24.png",
  "./source/img/Food_25.png",
  "./source/img/Food_26.png",
  "./source/img/Food_27.png",
  "./source/img/Food_28.png",
  "./source/img/Food_29.png",
  "./source/img/Food_30.png",
  "./source/img/Food_31.png",
  "./source/img/Food_32.png",
  "./source/img/Food_33.png",
  "./source/img/Food_34.png",
  "./source/img/Food_35.png",
  "./source/img/Food_36.png",
  "./source/img/Food_37.png",
  "./source/img/Food_38.png",
  "./source/img/Food_39.png",
  "./source/img/Food_40.png",
  "./source/img/Food_41.png",
  "./source/img/Food_42.png",
  "./source/img/Food_43.png",
  "./source/img/Food_44.png",
  "./source/img/Food_45.png",
  "./source/img/Food_46.png",
  "./source/img/Food_47.png",
  "./source/img/Food_48.png",
  "./source/img/Food_49.png",
  "./source/img/Food_50.png",
  "./source/img/Food_51.png",
  "./source/img/Food_52.png",
  "./source/img/Food_53.png",
  "./source/img/Food_54.png",
  "./source/img/Food_55.png",
  "./source/img/Food_56.png",
  "./source/img/Food_57.png",
  "./source/img/Food_58.png",
  "./source/img/Food_59.png",
  "./source/img/Food_60.png",
  "./source/img/Food_61.png",
  "./source/img/Food_62.png",
  "./source/img/Food_63.png",
  "./source/img/Food_64.png",
  "./source/img/Food_65.png",
  "./source/img/Food_66.png",
  "./source/img/Food_67.png",
  "./source/img/Food_68.png",
  "./source/img/Food_69.png",
  "./source/img/Food_70.png",
  "./source/img/Food_71.png",
  "./source/img/Food_72.png",
  "./source/img/Food_73.png",
  "./source/img/Food_74.png",
  "./source/img/Food_75.png",
  "./source/img/Food_76.png",
  "./source/img/Food_77.png",
  "./source/img/Food_78.png",
  "./source/img/Food_79.png",
  "./source/img/Food_80.png",
  "./source/img/Food_81.png",
  "./source/img/Food_82.png",
  "./source/img/Food_83.png",
  "./source/img/Food_84.png",
  "./source/img/Food_85.png",
  "./source/img/Food_86.png",
  "./source/img/Food_87.png",
  "./source/img/Food_88.png",
  "./source/img/Food_89.png",
  "./source/img/Food_90.png",
  "./source/img/Food_91.png",
  "./source/img/Food_92.png",
  "./source/img/Food_93.png",
  "./source/img/Food_94.png",
  "./source/img/Food_95.png",
  "./source/img/Food_96.png",
  "./source/img/Food_97.png",
  "./source/img/Food_98.png",
  "./source/img/Food_99.png",
]; //이미지 처리 고민해보기

let intervalId;

function startRandom() {
  if (intervalId) return; // 이미 실행 중이면 중복 실행 방지

  intervalId = setInterval(() => {
    const randomIndex = Math.floor(Math.random() * foodImgs.length);
    document.getElementById("randomFoodImg").src = foodImgs[randomIndex];
  }, 30);
}

// document.addEventListener("DOMContentLoaded", startRandom); // 페이지 로드 시 자동 실행

document.querySelector(".stopBtn").addEventListener("click", function (e) {
  const stopBtn = e.target;
  const textTopSpan = document.querySelector(".textTop span");
  const resultTextSpan = document.querySelector(".textBottom .resultText");

  if (stopBtn.innerText.trim() === "골라봐리") {
    // 현재 골라봐리면 → 인터벌 멈추고 텍스트 변경
    // 버튼을 누른 후 인터벌 정지까지 갭이 생김 간격 줄이는 거 고민해보기
    clearInterval(intervalId);
    intervalId = null;
    stopBtn.innerHTML = `맘에 안 든다고?<br>골치아프데이<br>그래 함 다시 골라봐라`;
    stopBtn.style.fontSize = "3vh"; // 텍스트 크기 변경
    stopBtn.style.width = "30vh"; // 버튼 너비 변경
    stopBtn.style.height = "14vh";
    stopBtn.style.lineHeight = "0.9";

    textTopSpan.style.display = "inline"; // span 보이기
    resultTextSpan.style.display = "inline";
  } else {
    // 그 외 경우 → 인터벌 다시 시작 & 텍스트 변경
    startRandom();
    stopBtn.innerText = "골라봐리";
    stopBtn.style.fontSize = "3vh"; // 텍스트 크기 원래대로
    stopBtn.style.width = "25vh"; // 버튼 크기 원래대로
    stopBtn.style.height = "8vh";
    stopBtn.style.lineHeight = "normal";

    textTopSpan.style.display = "none"; // span 숨기기
    resultTextSpan.style.display = "none";
  }
});

// 페이지가 완전히 로드된 후 실행
window.onload = function () {
  setTimeout(startRandom, 0); // 페이지가 로드된 직후 실행
};
