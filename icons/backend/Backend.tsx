"use client"
import'./backend.css'
import { useState, useEffect } from 'react'

export default function Backend() {
  const mainColor = ["#00ff2d", "red"];

  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const changeColor = () => {
    setCurrentColorIndex((prevIndex) => {
    let newIndex = prevIndex + direction;

    if (newIndex >= mainColor.length) {
        newIndex = 0;
        setDirection(-1);
    } else if (newIndex < 0) {
        newIndex = 1;
        setDirection(1);
    }

    return newIndex;
    });
  };

  useEffect(() => {
    const intervalId = setInterval(changeColor, randomTime());

    return () => clearInterval(intervalId);
  });

  function randomTime() {
    const time = Math.floor(Math.random() * 6000) + 2000;

    return time;
  }

  const currentMainColor = mainColor[currentColorIndex];

  return (
    <svg viewBox="0 0 202.072 142.163" xmlns="http://www.w3.org/2000/svg">
      <g strokeLinecap="round" transform="translate(-3.973 -77.415)">
        <rect
          height="115.513"
          width="144.233"
          fill="#2e2e2e"
          ry="0"
          strokeWidth="12.054"
          transform="matrix(.9449 -.32733 .5695 .822 0 0)"
          x="-70.302"
          y="123.62"
          className='backend__background'
        />
        <rect
          height="111.422"
          width="44.445"
          fill="#646464"
          ry="0"
          strokeWidth="12.054"
          transform="matrix(.9449 -.32733 .5695 .822 0 0)"
          x="-68.159"
          y="125.493"
          className='backend__left--column'
        />
        <rect
          height="12.456"
          width="63.26"
          fill="#646464"
          ry="0"
          strokeWidth="12.054"
          transform="matrix(.9449 -.32733 .5695 .822 0 0)"
          x="-21.595"
          y="125.477"
          className='backend__top--center__column'
        />
        <rect
          height="111.998"
          width="28.226"
          fill="#646464"
          ry="0"
          strokeWidth="12.054"
          transform="matrix(.9449 -.32733 .5695 .822 0 0)"
          x="43.512"
          y="125.121"
          className='backend__right--column'
        />
        <rect
          height="97.289"
          width="62.958"
          fill="#646464"
          ry="0"
          strokeWidth="12.054"
          transform="matrix(.9449 -.32733 .5695 .822 0 0)"
          x="-21.545"
          y="139.784"
          className='backend__bottom--center__column'
        />
        <rect
          height="5.281"
          width="34.61"
          fill="#8a8a8a"
          ry="0"
          strokeWidth="12.054"
          transform="matrix(.9449 -.32733 .5695 .822 0 0)"
          x="-62.625"
          y="130.556"
          className='text__box'
        />
        <rect
          height="5.281"
          width="34.61"
          fill="#8a8a8a"
          ry="0"
          strokeWidth="12.054"
          transform="matrix(.9449 -.32733 .5695 .822 0 0)"
          x="-62.538"
          y="139.341"
          className='text__box'
        />
        <rect
          height="5.281"
          width="34.61"
          fill="#8a8a8a"
          ry="0"
          strokeWidth="12.054"
          transform="matrix(.9449 -.32733 .5695 .822 0 0)"
          x="-62.451"
          y="148.125"
          className='text__box'
        />
        <rect
          height="5.281"
          width="34.61"
          fill="#8a8a8a"
          ry="0"
          strokeWidth="12.054"
          transform="matrix(.9449 -.32733 .5695 .822 0 0)"
          x="-62.363"
          y="156.909"
          className='text__box'
        />
        <rect
          height="5.281"
          width="34.61"
          fill="#8a8a8a"
          ry="0"
          strokeWidth="12.054"
          transform="matrix(.9449 -.32733 .5695 .822 0 0)"
          x="-62.276"
          y="165.694"
          className='text__box'
        />
        <rect
          height="5.281"
          width="34.61"
          fill="#8a8a8a"
          ry="0"
          strokeWidth="12.054"
          transform="matrix(.9449 -.32733 .5695 .822 0 0)"
          x="-18.679"
          y="149.911"
          className='text__box'
        />
        <rect
          height="9.649"
          width="60.674"
          fill="#8a8a8a"
          ry="0"
          strokeWidth="12.054"
          transform="matrix(.9449 -.32733 .5695 .822 0 0)"
          x="-20.246"
          y="126.874"
          className='text__box'
        />
        <rect
          height=".865"
          width="46.242"
          fill="#8a8a8a"
          ry="0"
          strokeWidth="15.284"
          transform="matrix(.9449 -.32733 .5695 .822 0 0)"
          x="-19.053"
          y="233.827"
          className='text__box'
        />
        <rect
          height="6.164"
          width="22.033"
          fill="#00ff2d"
          ry="0"
          strokeWidth="12.054"
          transform="matrix(.9449 -.32733 .5695 .822 0 0)"
          x="17.621"
          y="149.636"
        />
        <rect
          height="4.529"
          width="6.262"
          fill="#00ff2d"
          ry="0"
          strokeWidth="5.658"
          transform="matrix(.9449 -.32733 .5695 .822 0 0)"
          x="64.405"
          y="131.107"
        />
        <rect
          height="5.281"
          width="34.61"
          fill="#8a8a8a"
          ry="0"
          strokeWidth="12.054"
          transform="matrix(.9449 -.32733 .5695 .822 0 0)"
          x="-62.188"
          y="174.478"
          className='text__box'
        />
        <rect
          height="42.203"
          width=".825"
          fill="#8a8a8a"
          ry="0"
          strokeWidth="15.284"
          transform="matrix(.9449 -.32733 .5695 .822 0 0)"
          x="-19.125"
          y="192.489"
          className='text__box'
        />
        <rect
          height=".857"
          width="21.36"
          fill="#8a8a8a"
          ry="0"
          strokeWidth="10.19"
          transform="matrix(.9449 -.32733 .5695 .822 0 0)"
          x="46.551"
          y="165.875"
          className='text__box'
        />
        <rect
          height="19.46"
          width=".962"
          fill="#8a8a8a"
          ry="0"
          strokeWidth="10.19"
          transform="matrix(.9449 -.32733 .5695 .822 0 0)"
          x="46.546"
          y="147.013"
          className='text__box'
        />
        <rect
          height="5.47"
          width="23.989"
          fill="#8a8a8a"
          ry="0"
          strokeWidth="12.054"
          transform="matrix(.9449 -.32733 .5695 .822 0 0)"
          x="-62.258"
          y="183.522"
          className='text__box'
        />
        <rect
          height="5.47"
          width="23.989"
          fill="#8a8a8a"
          ry="0"
          strokeWidth="12.054"
          transform="matrix(.9449 -.32733 .5695 .822 0 0)"
          x="-19.471"
          y="142.083"
          className='text__box'
        />
        <rect
          height="5.47"
          width="23.989"
          fill="#8a8a8a"
          ry="0"
          strokeWidth="12.054"
          transform="matrix(.9449 -.32733 .5695 .822 0 0)"
          x="-19.678"
          y="185.642"
          className='text__box'
        />
        <rect
          height="5.47"
          width="23.989"
          fill="#8a8a8a"
          ry="0"
          strokeWidth="12.054"
          transform="matrix(.9449 -.32733 .5695 .822 0 0)"
          x="45.241"
          y="176.047"
          className='text__box'
        />
        <rect
          height="5.47"
          width="23.989"
          fill="#8a8a8a"
          ry="0"
          strokeWidth="12.054"
          transform="matrix(.9449 -.32733 .5695 .822 0 0)"
          x="45.356"
          y="184.992"
          className='text__box'
        />
        <rect
          height="5.47"
          width="23.989"
          fill="#8a8a8a"
          ry="0"
          strokeWidth="12.054"
          transform="matrix(.9449 -.32733 .5695 .822 0 0)"
          x="45.471"
          y="193.937"
          className='text__box'
        />
        <rect
          height="5.47"
          width="23.989"
          fill="#8a8a8a"
          ry="0"
          strokeWidth="12.054"
          transform="matrix(.9449 -.32733 .5695 .822 0 0)"
          x="45.817"
          y="220.771"
          className='text__box'
        />
        <rect
          height="5.47"
          width="23.989"
          fill="#8a8a8a"
          ry="0"
          strokeWidth="12.054"
          transform="matrix(.9449 -.32733 .5695 .822 0 0)"
          x="45.932"
          y="229.716"
          className='text__box'
        />
        <rect
          height="5.47"
          width="23.989"
          fill="#8a8a8a"
          ry="0"
          strokeWidth="12.054"
          transform="matrix(.9449 -.32733 .5695 .822 0 0)"
          x="45.586"
          y="202.882"
          className='text__box'
        />
        <rect
          height="5.47"
          width="23.989"
          fill="#8a8a8a"
          ry="0"
          strokeWidth="12.054"
          transform="matrix(.9449 -.32733 .5695 .822 0 0)"
          x="45.701"
          y="211.827"
          className='text__box'
        />
        <rect
          height="2.727"
          width="11.958"
          fill="#8a8a8a"
          ry="0"
          strokeWidth="6.009"
          transform="matrix(.9449 -.32733 .5695 .822 0 0)"
          x="-19.264"
          y="178.825"
          className='text__box'
        />
        <rect
          height="2.727"
          width="11.958"
          fill="#8a8a8a"
          ry="0"
          strokeWidth="6.009"
          transform="matrix(.9449 -.32733 .5695 .822 0 0)"
          x="45.565"
          y="126.677"
          className='text__box'
        />
        <rect
          height="6.488"
          width="17.683"
          fill="#8a8a8a"
          ry="0"
          strokeWidth="6.009"
          transform="matrix(.9449 -.32733 .5695 .822 0 0)"
          x="45.34"
          y="131.328"
          className='text__box'
        />
        <rect
          height="2.727"
          width="11.958"
          fill="#8a8a8a"
          ry="0"
          strokeWidth="6.009"
          transform="matrix(.9449 -.32733 .5695 .822 0 0)"
          x="-3.472"
          y="178.607"
          className='text__box'
        />
        <rect
          height="2.727"
          width="11.958"
          fill="#8a8a8a"
          ry="0"
          strokeWidth="6.009"
          transform="matrix(.9449 -.32733 .5695 .822 0 0)"
          x="26.356"
          y="160.139"
          className='text__box'
        />
        <rect
          height="2.727"
          width="11.958"
          fill="#8a8a8a"
          ry="0"
          strokeWidth="6.009"
          transform="matrix(.9449 -.32733 .5695 .822 0 0)"
          x="26.24"
          y="164.491"
          className='text__box'
        />
        <rect
          height="2.727"
          width="11.958"
          fill="#8a8a8a"
          ry="0"
          strokeWidth="6.009"
          transform="matrix(.9449 -.32733 .5695 .822 0 0)"
          x="26.156"
          y="169.007"
          className='text__box'
        />
        <rect
          height="2.727"
          width="11.958"
          fill="#8a8a8a"
          ry="0"
          strokeWidth="6.009"
          transform="matrix(.9449 -.32733 .5695 .822 0 0)"
          x="11.921"
          y="178.572"
          className='text__box'
        />
        <path
          d="M112.691 192.401a3.667 3.667 0 002.827 1.307 3.667 3.667 0 002.793-1.379c.175-.222.323-.465.49-.693.166-.23.354-.448.59-.604.32-.21.704-.294 1.081-.36.497-.087 1.006-.154 1.467-.361.23-.104.446-.243.621-.425a1.38 1.38 0 00.362-.655c.059-.272.02-.556-.031-.83-.052-.274-.118-.548-.113-.827.007-.466.212-.91.488-1.286.275-.375.62-.693.952-1.02.938-.92 1.812-1.975 2.162-3.242.15-.54.198-1.103.288-1.657.129-.793.341-1.57.47-2.363.129-.793.172-1.616-.038-2.392-.13-.48-.355-.944-.36-1.44-.003-.336.097-.67.276-.953.179-.284.434-.517.727-.68.586-.325 1.308-.358 1.951-.169.758.223 1.404.732 1.93 1.322.524.59.943 1.265 1.384 1.92.242.36.496.718.829.996.332.278.756.471 1.189.445.373-.022.717-.203 1.035-.4.318-.197.627-.418.982-.536.255-.086.525-.116.792-.145.27-.029.54-.058.801-.13.261-.072.515-.189.712-.374.19-.178.322-.414.394-.665.072-.25.087-.516.065-.776-.044-.52-.232-1.014-.387-1.513a10.824 10.824 0 01-.504-3.386c.015-.863.15-1.735.504-2.522.436-.966 1.176-1.755 1.905-2.524.73-.769 1.472-1.556 1.914-2.519.2-.436.333-.9.432-1.369a9.964 9.964 0 00-.144-4.683"
          fill="none"
          stroke={currentMainColor}
          strokeWidth=".5"
          className='green__graph'
        />
        <path
          d="M116.142 196.912c-.08-.604.162-1.241.623-1.639a1.876 1.876 0 011.712-.375c.263.076.504.209.751.327.247.118.506.223.78.237.3.016.596-.08.862-.222.265-.14.504-.326.748-.503.668-.486 1.377-.92 2.013-1.449a8.056 8.056 0 001.53-1.691c.23-.344.435-.709.713-1.016.139-.154.296-.293.474-.399a1.38 1.38 0 01.584-.195c.197-.017.395.016.584.074.189.059.37.141.548.225.357.168.728.347 1.123.345.317-.002.623-.122.898-.28.275-.157.526-.353.793-.525 1.059-.685 2.324-.975 3.575-1.138 1.25-.163 2.518-.212 3.752-.473 2.15-.454 4.108-1.53 6.04-2.577 1.396-.756 2.83-1.532 3.865-2.737.808-.943 1.327-2.098 2.071-3.091.373-.497.806-.956 1.327-1.293.52-.338 1.135-.55 1.755-.528.275.009.548.064.805.16"
          fill="none"
          stroke="#d2d2d2"
          strokeWidth=".5"
        />
        <path
          d="M97.47 139.53a8.851 7.293 0 01-8.936 7.198 8.851 7.293 0 01-8.765-7.34 8.851 7.293 0 018.88-7.245 8.851 7.293 0 018.822 7.292"
          fill="#51feff"
          stroke="#8a8a8a"
          strokeWidth=".5"
        />
        <path
          d="M97.377 139.344a8.851 7.293 0 01-2.32 4.827l-6.53-4.922z"
          fill="#0098ff"
          strokeWidth=".5"
        />
        <path
          d="M146.343 125.274a3.217 2.65 0 01-3.248 2.616 3.217 2.65 0 01-3.185-2.667 3.217 2.65 0 013.227-2.634 3.217 2.65 0 013.206 2.65"
          fill="#51feff"
          stroke="#8a8a8a"
          strokeWidth=".182"
        />
        <path
          d="M146.31 125.206a3.217 2.65 0 01-.844 1.755l-2.373-1.79z"
          fill="#0098ff"
          strokeWidth=".182"
        />
        <path
          d="M148.145 122.972a2.65 3.217 85.301 013.023-2.873 2.65 3.217 85.301 013.393 2.398 2.65 3.217 85.301 01-3.001 2.888 2.65 3.217 85.301 01-3.412-2.379"
          fill="#dfff00"
          stroke="#8a8a8a"
          strokeWidth=".182"
        />
        <path
          d="M148.4 123.708a2.65 3.217 67.198 01.097-1.943l2.88.729z"
          fill="#ffc300"
          strokeWidth=".182"
        />
        <path
          d="M156.46 119.526a2.65 3.217 89.66 013.232-2.635 2.65 3.217 89.66 013.201 2.649 2.65 3.217 89.66 01-3.211 2.652 2.65 3.217 89.66 01-3.222-2.631"
          fill="#ff5154"
          stroke="#8a8a8a"
          strokeWidth=".182"
        />
        <path
          d="M156.494 119.594a2.65 3.217 89.66 01.833-1.76l2.384 1.776z"
          fill="#ff8700"
          strokeWidth=".182"
        />
        <path
          d="M118.04 132.736a8.851 7.293 0 01-8.937 7.198 8.851 7.293 0 01-8.764-7.34 8.851 7.293 0 018.88-7.246 8.851 7.293 0 018.822 7.293"
          fill="#00ff2d"
          stroke="#8a8a8a"
          strokeWidth=".5"
        />
        <path
          d="M115.294 132.707a6.105 5.03 0 01-6.164 4.964 6.105 5.03 0 01-6.045-5.063 6.105 5.03 0 016.125-4.997 6.105 5.03 0 016.084 5.03"
          fill="#646464"
          stroke="#8a8a8a"
          strokeWidth=".545"
        />
        <path
          d="M138.32 118.53a3.81 3.81 0 013.107-.647c.384.09.756.241 1.148.275.197.017.398.004.584-.06a.922.922 0 00.468-.344.915.915 0 00.144-.399 1.382 1.382 0 00-.018-.425c-.052-.28-.167-.545-.255-.816-.18-.556-.25-1.164-.086-1.725.203-.701.74-1.252 1.294-1.726.643-.55 1.34-1.04 1.921-1.654.582-.614 1.05-1.385 1.099-2.23.022-.381-.041-.763-.095-1.142-.053-.38-.097-.766-.034-1.144.03-.182.085-.362.184-.517a.827.827 0 01.42-.346.795.795 0 01.64.076c.192.11.34.287.438.485.156.316.19.676.28 1.016.045.17.106.338.2.487a.926.926 0 00.383.353c.16.073.34.089.515.077.175-.012.347-.05.52-.077a4.622 4.622 0 012.287.215"
          fill="none"
          stroke={currentMainColor}
          strokeWidth=".5"
          className='green__graph'
        />
      </g>
    </svg>
  );
}
