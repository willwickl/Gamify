import React, { useState, useRef } from "react";
import "./App.css";

function Xbox() {
  const [title, setTitle] = useState("My First Task");
  const [score, setScore] = useState("100");
  const [rare, setRare] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [unlockedText, setUnlockedText] = useState("");
  
  const circleRef = useRef(null);
  const bannerRef = useRef(null);
  const achievementRef = useRef(null);
  const achievementSound = useRef(new Audio("https://dl.dropboxusercontent.com/s/8qvrpd69ua7wio8/XboxAchievement.mp3"));
  const achievementSoundRare = useRef(new Audio("https://dl.dropboxusercontent.com/s/po1udpov43am81i/XboxOneRareAchievement.mp3"));

  const achievement = () => {
    setUnlockedText(rare ? "Rare achievement unlocked" : "Achievement unlocked");
    setIsAnimating(true);
    
    if (rare) {
      achievementSoundRare.current.play();
    } else {
      achievementSound.current.play();
    }
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 12000);
  };

  const handleAchievementClick = () => {
    achievement();
  };

  return (
    <div className="content">
      <div className="content-settings">
        <h1>Gamify Tasks</h1>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="content-settings__input"
          placeholder="Achievement"
          type="text"
        />
        <input
          value={score}
          onChange={(e) => setScore(e.target.value)}
          className="content-settings__input"
          placeholder="Score"
          type="number"
        />
        <div className="content-settings__check">
          <input 
            checked={rare} 
            onChange={(e) => setRare(e.target.checked)} 
            type="checkbox" 
          />
          <label>Rare</label>
        </div>
        <button onClick={handleAchievementClick} className="content-settings__button">
          Add Task
        </button>
      </div>

      <div ref={achievementRef} className={`achievement ${rare ? "rare" : ""}`}>
        <div className="animation">
          <div ref={circleRef} className={`circle ${isAnimating ? "circle_animate" : ""}`}>
            <div className="img trophy_animate trophy_img">
              <img
                className="trophy_1"
                src="https://dl.dropboxusercontent.com/s/k0n14tzcl4q61le/trophy_full.svg"
              />
              <img
                className="trophy_2"
                src="https://dl.dropboxusercontent.com/s/cd4k1h6w1c8an9j/trophy_no_handles.svg"
              />
            </div>
            <div className="img xbox_img">
              <img src="https://dl.dropboxusercontent.com/s/uopiulb5yeo1twm/xbox.svg?dl=0" />
            </div>
            <div className="brilliant-wrap">
              <div className="brilliant"></div>
            </div>
          </div>
          <div className="banner-outer">
            <div ref={bannerRef} className={`banner ${isAnimating ? "banner-animate" : ""}`}>
              <div className={`achieve_disp ${isAnimating ? "achieve_disp_animate" : ""}`}>
                <span className="unlocked">{unlockedText}</span>
                <div className="score_disp">
                  <div className="gamerscore">
                    <img
                      width="20px"
                      src="https://dl.dropboxusercontent.com/s/gdqf5amvjkx9rfb/G.svg?dl=0"
                    />
                    <span className="acheive_score">{score}</span>
                  </div>
                  <span className="hyphen_sep">-</span>
                  <span className="achiev_name">{title}</span>
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
