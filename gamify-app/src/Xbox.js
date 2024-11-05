import "./App.css";

function Xbox() {
  let achievementSound = new Audio(
    "https://dl.dropboxusercontent.com/s/8qvrpd69ua7wio8/XboxAchievement.mp3"
  );
  let achievementSoundRare = new Audio(
    "https://dl.dropboxusercontent.com/s/po1udpov43am81i/XboxOneRareAchievement.mp3"
  );
  const achievement = () => {
    let title = document.getElementById("a_title").value;
    let score = document.getElementById("a_score").value;
    let rare = document.getElementById("a_rare").checked;
    document.querySelector(".achiev_name").innerText = title;
    document.querySelector(".acheive_score").innerText = score;
    document.getElementById("a_trigger").disabled = true;
    document.querySelector(".unlocked").innerText = rare
      ? "Rare achievement unlocked"
      : "Achievement unlocked";
    if (rare) {
      achievementSoundRare.play();
      document.querySelector(".achievement").classList.add("rare");
    } else {
      achievementSound.play();
    }
    document.querySelector(".circle").classList.add("circle_animate");
    document.querySelector(".banner").classList.add("banner-animate");
    document
      .querySelector(".achieve_disp")
      .classList.add("achieve_disp_animate");
    setTimeout(() => {
      document.querySelector(".circle").classList.remove("circle_animate");
      document.querySelector(".banner").classList.remove("banner-animate");
      document
        .querySelector(".achieve_disp")
        .classList.remove("achieve_disp_animate");
      document.getElementById("a_trigger").disabled = false;
      if (rare) {
        document.querySelector(".achievement").classList.remove("rare");
      }
    }, 12000);
  };

  const trigger = () => {
    document.getElementById("a_trigger").addEventListener("click", () => {
      achievement();
    });
  };
  return (
    <div class="content">
      <div class="content-settings">
        <h1>Gamify Tasks</h1>
        <input
          value="My First Task"
          class="content-settings__input"
          id="a_title"
          placeholder="Achievement"
          type="text"
        />
        <input
          value="100"
          class="content-settings__input"
          id="a_score"
          placeholder="Score"
          type="number"
        />
        <div class="content-settings__check">
          <input checked type="checkbox" id="a_rare" />
          <label for="a_rare">Rare</label>
        </div>
        <button id="a_trigger" class="content-settings__button">
          Add Task
        </button>
      </div>

      <div class="achievement">
        <div class="animation">
          <div class="circle">
            <div class="img trophy_animate trophy_img">
              <img
                class="trophy_1"
                src="https://dl.dropboxusercontent.com/s/k0n14tzcl4q61le/trophy_full.svg"
              />
              <img
                class="trophy_2"
                src="https://dl.dropboxusercontent.com/s/cd4k1h6w1c8an9j/trophy_no_handles.svg"
              />
            </div>
            <div class="img xbox_img">
              <img src="https://dl.dropboxusercontent.com/s/uopiulb5yeo1twm/xbox.svg?dl=0" />
            </div>
            <div class="brilliant-wrap">
              <div class="brilliant"></div>
            </div>
          </div>
          <div class="banner-outer">
            <div class="banner">
              <div class="achieve_disp">
                <span class="unlocked"></span>
                <div class="score_disp">
                  <div class="gamerscore">
                    <img
                      width="20px"
                      src="https://dl.dropboxusercontent.com/s/gdqf5amvjkx9rfb/G.svg?dl=0"
                    />
                    <span class="acheive_score"></span>
                  </div>
                  <span class="hyphen_sep">-</span>
                  <span class="achiev_name"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Xbox;
