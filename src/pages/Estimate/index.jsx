import React, { useState } from 'react';
import { Main } from '@pages/Estimate/styles.jsx';
import modifiedPhase from '@components/Esti/modifiedPhase';

const Estimate = () => {
  // Phase = ['제품사진','야외스냅','행사','기업영상']
  const stepSeires = ['', 'STEP ONE', 'STEP TWO', 'STEP THREE'];
  const msgSeires = ['', '촬영이 필요한 컷 수', '유광제품', '대형제품', '촬영품(제품이름)'];
  const [Phase, setPhase] = useState(0);
  const [current, setcurrent] = useState(1);
  const [cutCount, setcutCount] = useState(0);
  const [Step, setStep] = useState(stepSeires[1]);
  const [msg, setMsg] = useState(msgSeires[1]);
  const [ExImg, setExImg] = useState(
    'https://drive.google.com/uc?export=download&id=1xAB7YcgU9gLMbxPXadcQIqweerk7sa2v',
  );

  const [ExImg2, setExImg2] = useState(
    'https://drive.google.com/uc?export=download&id=1b8CSI0GrvzbaHuAqQDyzfJAChmQ7_vOt',
  );
  const onClickPhase = (e) => {
    // console.log(e.target.innerText);
    console.log(Phase);
    let CurrentPhase = e.target.innerText;
    if (CurrentPhase === '제품사진') {
      setPhase(0);
      setExImg('https://drive.google.com/uc?export=download&id=1xAB7YcgU9gLMbxPXadcQIqweerk7sa2v');
      document.getElementById('ExImg2').style.display = 'none';
    } else if (CurrentPhase === '야외스냅') {
      setPhase(1);
      setExImg('https://drive.google.com/uc?export=download&id=1EXoXVJIUV74_9wVVZ0trGIJciz0Ao5j6');
      document.getElementById('ExImg2').style.display = 'none';
    } else if (CurrentPhase === '행사') {
      setPhase(2);

      setExImg('https://drive.google.com/uc?export=download&id=1ET9-vuKf_G8VFPFMBu6xuh_zbbFqm5GJ');
      document.getElementById('ExImg2').style.display = 'inline';
      document.getElementById('ExImg2').style.paddingRight = '10px';
    } else if (CurrentPhaes === '기업영상') {
      document.getElementById('ExImg2').style.display = 'flex';

      setPhase(3);
    }
    setStep(stepSeires[1]);

    console.log(Phase);
    console.log(ExImg);
  };

  return (
    <>
      <Main>
        <main role="main" id="main" class="main">
          <div class="about_bg">
            <div class="contact">
              <p>예상 견적</p>
            </div>

            <div class="c_menu">
              <div class="c_container">
                <ul>
                  <li>
                    <a href="#" class="hvr-shutter-out-horizontal" onClick={onClickPhase}>
                      제품사진
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hvr-shutter-out-horizontal" onClick={onClickPhase}>
                      야외스냅
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hvr-shutter-out-horizontal" onClick={onClickPhase}>
                      행사
                    </a>
                  </li>
                  <li>
                    <a href="cost_d.html" class="hvr-shutter-out-horizontal" onClick={onClickPhase}>
                      기업영상
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="c_main">
              <div class="c_m_container">
                <div>{Step}</div>
                <div>
                  <span>
                    <img src={ExImg2} style={{ width: '20rem', height: '20rem' }} id="ExImg2" />
                    <img src={ExImg} style={{ width: '20rem', height: '20rem' }} />
                  </span>
                </div>
                {msg}
                <input></input>
              </div>
            </div>
          </div>
        </main>
      </Main>
    </>
  );
};

export default Estimate;
