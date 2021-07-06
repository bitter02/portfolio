'use strict'
{
  const btn1 = document.getElementById('btn1');
  const btn2 = document.getElementById('btn2');
  const btn3 = document.getElementById('btn3');
  const btn4 = document.getElementById('btn4');
  const btn5 = document.getElementById('btn5');
  const btn6 = document.getElementById('btn6');
  const btn7 = document.getElementById('btn7');
  const btn8 = document.getElementById('btn8');
  const btn9 = document.getElementById('btn9');
  const btn10 = document.getElementById('btn10');
  const gacha = document.getElementById('gacha');

  let ssr = 0.03; //3%
  let sr = 0.13;  //10%
  let rr = 0.33;  //20%
  let r = 0.63;  //30%

  gacha.addEventListener('click', () => {
    const n = Math.random();
    const a = Math.random();
    const b = Math.random();
    const c = Math.random();
    const d = Math.random();
    const e = Math.random();
    const f = Math.random();
    const g = Math.random();
    const h = Math.random();
    const i = Math.random();

    if (n < ssr) {
      btn1.textContent = 'SSR';
      btn1.style.color = 'yellow';
      btn1.style.fontSize = '100px';
    } else if (n < sr) {
      btn1.textContent = 'SR';
      btn1.style.color = '#800080';
      btn1.style.fontSize = '80px';
    } else if (n < rr) {
      btn1.textContent = 'R+';
      btn1.style.color = '#0000ff';
      btn1.style.fontSize = '70px';
    } else if (n < r) {
      btn1.textContent = 'R';
      btn1.style.color = '#3cb371';
      btn1.style.fontSize = '50px';
    } else {
      btn1.textContent = 'N+';
      btn1.style.color = 'white';
      btn1.style.fontSize = '30px';
    }
    if (a < ssr) {
      btn2.textContent = 'SSR';
      btn2.style.color = 'yellow';
      btn2.style.fontSize = '100px';
    } else if (a < sr) {
      btn2.textContent = 'SR';
      btn2.style.color = '#800080';
      btn2.style.fontSize = '80px';
    } else if (a < rr) {
      btn2.textContent = 'R+';
      btn2.style.color = '#0000ff';
      btn2.style.fontSize = '70px';
    } else if (a < r) {
      btn2.textContent = 'R';
      btn2.style.color = '#3cb371';
      btn2.style.fontSize = '50px';
    } else {
      btn2.textContent = 'N+';
      btn2.style.color = 'white';
      btn2.style.fontSize = '30px';
    }
    if (b < ssr) {
      btn3.textContent = 'SSR';
      btn3.style.color = 'yellow';
      btn3.style.fontSize = '100px';
    } else if (b < sr) {
      btn3.textContent = 'SR';
      btn3.style.color = '#800080';
      btn3.style.fontSize = '80px';
    } else if (b < rr) {
      btn3.textContent = 'R+';
      btn3.style.color = '#0000ff';
      btn3.style.fontSize = '70px';
    } else if (b < r) {
      btn3.textContent = 'R';
      btn3.style.color = '#3cb371';
      btn3.style.fontSize = '50px';
    } else {
      btn3.textContent = 'N+';
      btn3.style.color = 'white';
      btn3.style.fontSize = '30px';
    }
    if (c < ssr) {
      btn4.textContent = 'SSR';
      btn4.style.color = 'yellow';
      btn4.style.fontSize = '100px';
    } else if (c < sr) {
      btn4.textContent = 'SR';
      btn4.style.color = '#800080';
      btn4.style.fontSize = '80px';
    } else if (c < rr) {
      btn4.textContent = 'R+';
      btn4.style.color = '#0000ff';
      btn4.style.fontSize = '70px';
    } else if (c < r) {
      btn4.textContent = 'R';
      btn4.style.color = '#3cb371';
      btn4.style.fontSize = '50px';
    } else {
      btn4.textContent = 'N+';
      btn4.style.color = 'white';
      btn4.style.fontSize = '30px';
    }
    if (d < ssr) {
      btn5.textContent = 'SSR';
      btn5.style.color = 'yellow';
      btn5.style.fontSize = '100px';
    } else if (d < sr) {
      btn5.textContent = 'SR';
      btn5.style.color = '#800080';
      btn5.style.fontSize = '80px';
    } else if (d < rr) {
      btn5.textContent = 'R+';
      btn5.style.color = '#0000ff';
      btn5.style.fontSize = '70px';
    } else if (d < r) {
      btn5.textContent = 'R';
      btn5.style.color = '#3cb371';
      btn5.style.fontSize = '50px';
    } else {
      btn5.textContent = 'N+';
      btn5.style.color = 'white';
      btn5.style.fontSize = '30px';
    }
    if (e < ssr) {
      btn6.textContent = 'SSR';
      btn6.style.color = 'yellow';
      btn6.style.fontSize = '100px';
    } else if (e < sr) {
      btn6.textContent = 'SR';
      btn6.style.color = '#800080';
      btn6.style.fontSize = '80px';
    } else if (e < rr) {
      btn6.textContent = 'R+';
      btn6.style.color = '#0000ff';
      btn6.style.fontSize = '70px';
    } else if (e < r) {
      btn6.textContent = 'R';
      btn6.style.color = '#3cb371';
      btn6.style.fontSize = '50px';
    } else {
      btn6.textContent = 'N+';
      btn6.style.color = 'white';
      btn6.style.fontSize = '30px';
    }
    if (f < ssr) {
      btn7.textContent = 'SSR';
      btn7.style.color = 'yellow';
      btn7.style.fontSize = '100px';
    } else if (f < sr) {
      btn7.textContent = 'SR';
      btn7.style.color = '#800080';
      btn7.style.fontSize = '80px';
    } else if (f < rr) {
      btn7.textContent = 'R+';
      btn7.style.color = '#0000ff';
      btn7.style.fontSize = '70px';
    } else if (f < r) {
      btn7.textContent = 'R';
      btn7.style.color = '#3cb371';
      btn7.style.fontSize = '50px';
    } else {
      btn7.textContent = 'N+';
      btn7.style.color = 'white';
      btn7.style.fontSize = '30px';
    }
    if (g < ssr) {
      btn8.textContent = 'SSR';
      btn8.style.color = 'yellow';
      btn8.style.fontSize = '100px';
    } else if (g < sr) {
      btn8.textContent = 'SR';
      btn8.style.color = '#800080';
      btn8.style.fontSize = '80px';
    } else if (g < rr) {
      btn8.textContent = 'R+';
      btn8.style.color = '#0000ff';
      btn8.style.fontSize = '70px';
    } else if (g < r) {
      btn8.textContent = 'R';
      btn8.style.color = '#3cb371';
      btn8.style.fontSize = '50px';
    } else {
      btn8.textContent = 'N+';
      btn8.style.color = 'white';
      btn8.style.fontSize = '30px';
    }
    if (h < ssr) {
      btn9.textContent = 'SSR';
      btn9.style.color = 'yellow';
      btn9.style.fontSize = '100px';
    } else if (h < sr) {
      btn9.textContent = 'SR';
      btn9.style.color = '#800080';
      btn9.style.fontSize = '80px';
    } else if (h < rr) {
      btn9.textContent = 'R+';
      btn9.style.color = '#0000ff';
      btn9.style.fontSize = '70px';
    } else if (h < r) {
      btn9.textContent = 'R';
      btn9.style.color = '#3cb371';
      btn9.style.fontSize = '50px';
    } else {
      btn9.textContent = 'N+';
      btn9.style.color = 'white';
      btn9.style.fontSize = '30px';
    }
    if (i < ssr) {
      btn10.textContent = 'SSR';
      btn10.style.color = 'yellow';
      btn10.style.fontSize = '100px';
    } else if (i < sr) {
      btn10.textContent = 'SR';
      btn10.style.color = '#800080';
      btn10.style.fontSize = '80px';
    } else if (i < rr) {
      btn10.textContent = 'R+';
      btn10.style.color = '#0000ff';
      btn10.style.fontSize = '70px';
    } else if (i < r) {
      btn10.textContent = 'R';
      btn10.style.color = '#3cb371';
      btn10.style.fontSize = '50px';
    } else {
      btn10.textContent = 'N+';
      btn10.style.color = 'white';
      btn10.style.fontSize = '30px';
    }


  });
}
