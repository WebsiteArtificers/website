"use client"
import './website.css'
import { useState, useEffect } from 'react'

export default function Website() {
    const mainColor = ["#001234", "#ffb200", '#cce76a', '#99c8db', '#e23232', '#ae7bbc', '#8a8a8a'];
    const subColor = ["#6A8ABE","#ffd400", '#f6caed', '#e7c8bb', '#8d0028', '#3e174b', '#ff9d9d']; 
    const accentColor = ['#43669c', '#b29700', '#22acd3', '#38819f', '#8d0028', '#884d99', '#262626'];
    const accent2Color = ['#08538c', '#f8f2af', '#83e3ff', '#ff9166', '#d61f1f', '#884d99', '#262626'];
    const heroBackground = ['#e6ecf4', '#fef8d7', '#fbe5f6', '#fbf6f4', '#ffeded', '#060307', '#eaeaea'];
    const navbarBackground = ['#c6d2e6', '#feefa5', '#f1ffbf', '#bfecff', '#f7c9c9', '#060307', '#eaeaea'];

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
    const currentSubColor = subColor[currentColorIndex];
    const currentAccentColor = accentColor[currentColorIndex];
    const currentAccent2Color = accent2Color[currentColorIndex];
    const heroBackgroundColor = heroBackground[currentColorIndex];
    const navbarBackgroundColor = navbarBackground[currentColorIndex];

    return (
      <svg viewBox="0 0 202.052 142.155" xmlns="http://www.w3.org/2000/svg" className='website__svg'>
        <g transform="translate(-3.974 -77.423)" className='website__svg--g'>
          <rect
            height="99.668"
            width="144.207"
            fill="#eaeaea"
            ry="0"
            strokeLinecap="round"
            strokeWidth="12.054"
            transform="matrix(.9449 -.32733 .5695 .822 0 0)"
            x="-70.3"
            y="123.62"
            className='search__section background'
          />
          <rect
            height="2.057"
            width="123.714"
            fill="#b6b6b6"
            ry="1.028"
            strokeLinecap="round"
            strokeWidth=".472"
            transform="matrix(.94423 -.3293 .60736 .79443 0 0)"
            x="-57.191"
            y="128.147"
            className='search__section search__bar'
          />
          <rect
            height="99.668"
            width="144.207"
            fill={navbarBackgroundColor}
            ry="0"
            strokeLinecap="round"
            strokeWidth="12.054"
            transform="matrix(.9449 -.32733 .5695 .822 0 0)"
            x="-70.3"
            y="130.886"
            className='navbar__menu background'
          />
          <rect
            height="99.668"
            width="144.207"
            fill={heroBackgroundColor}
            ry="0"
            strokeLinecap="round"
            strokeWidth="12.054"
            transform="matrix(.9449 -.32733 .5695 .822 0 0)"
            x="-70.296"
            y="139.467"
            className='hero__section background'
          />
          <rect
            height="15.692"
            width="1.852"
            fill={currentMainColor}
            ry="0"
            strokeLinecap="round"
            strokeWidth="3.814"
            transform="matrix(.9449 -.32733 .5695 .822 0 0)"
            x="-16.735"
            y="223.061"
            className='hero__section divider'
          />
          <rect
            height="4.645"
            width="6.72"
            fill={currentMainColor}
            ry=".81"
            strokeLinecap="round"
            strokeWidth=".562"
            transform="matrix(.9449 -.32733 .5695 .822 0 0)"
            x="-66.371"
            y="132.86"
            className='navbar__menu logo'
          />
          <rect
            height="12.111"
            width="22.118"
            fill={currentSubColor}
            ry="1.883"
            strokeLinecap="round"
            strokeWidth="1.306"
            transform="matrix(.9449 -.32733 .5695 .822 0 0)"
            x="-26.798"
            y="153.767"
            className='hero__section top__menu left__block'
          />
          <rect
            height="12.111"
            width="22.118"
            fill={currentSubColor}
            ry="1.883"
            strokeLinecap="round"
            strokeWidth="1.306"
            transform="matrix(.9449 -.32733 .5695 .822 0 0)"
            x="30.582"
            y="153.435"
            className='hero__section top__menu right__block'
          />
          <rect
            height="12.847"
            width="30.667"
            fill={currentSubColor}
            ry="1.883"
            strokeLinecap="round"
            strokeWidth="1.306"
            transform="matrix(.9449 -.32733 .5695 .822 0 0)"
            x="-2.669"
            y="153.367"
            className='hero__section top__menu middle__block'
          />
          <rect
            height="6.628"
            width="37.54"
            fill={currentSubColor}
            ry="1.03"
            strokeLinecap="round"
            strokeWidth=".715"
            transform="matrix(.9449 -.32733 .5695 .822 0 0)"
            x="-10.211"
            y="191.107"
            className='hero__section bottom__menu'
          />
          <rect
            height="5.061"
            width="28.663"
            fill={currentMainColor}
            ry=".787"
            strokeLinecap="round"
            strokeWidth=".546"
            transform="matrix(.9449 -.32733 .5695 .822 0 0)"
            x="-5.763"
            y="199.313"
            className='hero__section bottom__submenu'
          />
          <rect
            height="5.061"
            width="28.663"
            fill={currentSubColor}
            ry=".787"
            strokeLinecap="round"
            strokeWidth=".546"
            transform="matrix(.9449 -.32733 .5695 .822 0 0)"
            x="-58.764"
            y="225.368"
            className='hero__section description__header left'
          />
          <rect
            height="5.061"
            width="28.663"
            fill={currentSubColor}
            ry=".787"
            strokeLinecap="round"
            strokeWidth=".546"
            transform="matrix(.9449 -.32733 .5695 .822 0 0)"
            x="-8.884"
            y="224.809"
            className='hero__section description__header right'
          />
          <rect
            height="2.127"
            width="12.048"
            fill={currentAccentColor}
            ry=".331"
            strokeLinecap="round"
            strokeWidth=".229"
            transform="matrix(.9449 -.32733 .5695 .822 0 0)"
            x="-57.597"
            y="232.175"
            className='hero__section description dark__blue'
          />
          <rect
            height="2.127"
            width="12.048"
            fill={currentAccent2Color}
            ry=".331"
            strokeLinecap="round"
            strokeWidth=".229"
            transform="matrix(.9449 -.32733 .5695 .822 0 0)"
            x="-8.915"
            y="231.755"
            className='hero__section description dark__blue'
          />
          <rect
            height="1.758"
            width="5.7"
            fill={currentAccentColor}
            ry=".331"
            strokeLinecap="round"
            strokeWidth=".229"
            transform="matrix(.9449 -.32733 .5695 .822 0 0)"
            x="4.559"
            y="231.757"
            className='hero__section description light__blue'
          />
          <rect
            height="1.758"
            width="5.7"
            fill={currentAccentColor}
            ry=".331"
            strokeLinecap="round"
            strokeWidth=".229"
            transform="matrix(.9449 -.32733 .5695 .822 0 0)"
            x="26.109"
            y="231.436"
            className='hero__section description light__blue'
          />
          <rect
            height="1.758"
            width="5.7"
            fill={currentAccent2Color}
            ry=".331"
            strokeLinecap="round"
            strokeWidth=".229"
            transform="matrix(.9449 -.32733 .5695 .822 0 0)"
            x="47.874"
            y="231.02"
            className='hero__section description dark__blue'
          />
          <rect
            height="1.758"
            width="5.7"
            fill={currentAccentColor}
            ry=".331"
            strokeLinecap="round"
            strokeWidth=".229"
            transform="matrix(.9449 -.32733 .5695 .822 0 0)"
            x="-8.834"
            y="235.417"
            className='hero__section description light__blue'
          />
          <rect
            height="1.758"
            width="5.7"
            fill={currentAccent2Color}
            ry=".331"
            strokeLinecap="round"
            strokeWidth=".229"
            transform="matrix(.9449 -.32733 .5695 .822 0 0)"
            x="-57.869"
            y="235.942"
            className='hero__section description light__blue'
          />
          <rect
            height="1.758"
            width="5.7"
            fill={currentAccentColor}
            ry=".331"
            strokeLinecap="round"
            strokeWidth=".229"
            transform="matrix(.9449 -.32733 .5695 .822 0 0)"
            x="17.774"
            y="235.401"
            className='hero__section description dark__blue'
          />
          <rect
            height="1.758"
            width="5.7"
            fill={currentAccent2Color}
            ry=".331"
            strokeLinecap="round"
            strokeWidth=".229"
            transform="matrix(.9449 -.32733 .5695 .822 0 0)"
            x="39.941"
            y="234.965"
            className='hero__section description dark__blue'
          />
          <rect
            height="2.127"
            width="12.048"
            fill={currentAccentColor}
            ry=".331"
            strokeLinecap="round"
            strokeWidth=".229"
            transform="matrix(.9449 -.32733 .5695 .822 0 0)"
            x="12.004"
            y="231.215"
            className='hero__section description dark__blue'
          />
          <rect
            height="2.127"
            width="12.048"
            fill={currentAccent2Color}
            ry=".331"
            strokeLinecap="round"
            strokeWidth=".229"
            transform="matrix(.9449 -.32733 .5695 .822 0 0)"
            x="34.662"
            y="230.615"
            className='hero__section description dark__blue'
          />
          <rect
            height="2.127"
            width="12.048"
            fill={currentAccentColor}
            ry=".331"
            strokeLinecap="round"
            strokeWidth=".229"
            transform="matrix(.9449 -.32733 .5695 .822 0 0)"
            x="26.089"
            y="234.845"
            className='hero__section description light__blue'
          />
          <rect
            height="2.127"
            width="12.048"
            fill={currentAccent2Color}
            ry=".331"
            strokeLinecap="round"
            strokeWidth=".229"
            transform="matrix(.9449 -.32733 .5695 .822 0 0)"
            x="3.436"
            y="235.177"
            className='hero__section description dark__blue'
          />
          <rect
            height="2.127"
            width="12.048"
            fill={currentAccentColor}
            ry=".331"
            strokeLinecap="round"
            strokeWidth=".229"
            transform="matrix(.9449 -.32733 .5695 .822 0 0)"
            x="46.878"
            y="234.49"
            className='hero__section description light__blue'
          />
          <rect
            height="3.928"
            width="11.204"
            fill={currentMainColor}
            ry=".569"
            strokeLinecap="round"
            strokeWidth=".395"
            transform="matrix(.9449 -.32733 .5695 .822 0 0)"
            x="-2.708"
            y="206.452"
            className='hero__section left__button'
          />
          <rect
            height="3.928"
            width="11.204"
            fill={currentAccent2Color}
            ry=".569"
            strokeLinecap="round"
            strokeWidth=".395"
            transform="matrix(.9449 -.32733 .5695 .822 0 0)"
            x="9.785"
            y="206.481"
            className='hero__section right__button '
          />
          <rect
            height="16.992"
            width="41.151"
            fill={currentMainColor}
            ry="2.592"
            strokeLinecap="round"
            strokeWidth="1.798"
            transform="matrix(.9449 -.32733 .5695 .822 0 0)"
            x="-47.021"
            y="169.729"
            className='hero__section middle__menu left__block'
          />
          <rect
            height="16.992"
            width="41.151"
            fill={currentMainColor}
            ry="2.592"
            strokeLinecap="round"
            strokeWidth="1.798"
            transform="matrix(.9449 -.32733 .5695 .822 0 0)"
            x="23.47"
            y="169.615"
            className='hero__section middle__menu right__block'
          />
          <rect
            height="17.258"
            width="25.525"
            fill={currentMainColor}
            ry="2.592"
            strokeLinecap="round"
            strokeWidth="1.798"
            transform="matrix(.9449 -.32733 .5695 .822 0 0)"
            x="-3.705"
            y="169.564"
            className='hero__section middle__menu center__block'
          />
          <rect
            height="2.263"
            width="9.879"
            fill={currentMainColor}
            ry=".395"
            strokeLinecap="round"
            strokeWidth=".274"
            transform="matrix(.9449 -.32733 .5695 .822 0 0)"
            x="-50.547"
            y="134.141"
            className='navbar__menu link one'
          />
          <rect
            height="2.263"
            width="9.879"
            fill={currentMainColor}
            ry=".395"
            strokeLinecap="round"
            strokeWidth=".274"
            transform="matrix(.9449 -.32733 .5695 .822 0 0)"
            x="-33.832"
            y="133.976"
            className='navbar__menu link two'
          />
          <rect
            height="2.263"
            width="9.879"
            fill={currentMainColor}
            ry=".395"
            strokeLinecap="round"
            strokeWidth=".274"
            transform="matrix(.9449 -.32733 .5695 .822 0 0)"
            x="-18.275"
            y="133.932"
            className='navbar__menu link three'
          />
          <rect
            height="2.263"
            width="9.879"
            fill={currentMainColor}
            ry=".395"
            strokeLinecap="round"
            strokeWidth=".274"
            transform="matrix(.9449 -.32733 .5695 .822 0 0)"
            x="-3.083"
            y="133.742"
            className='navbar__menu link four'
          />
          <rect
            height=".72"
            width="3.145"
            fill={currentMainColor}
            ry=".126"
            strokeLinecap="round"
            strokeWidth=".087"
            transform="matrix(.9449 -.32733 .5695 .822 0 0)"
            x="67.946"
            y="133.792"
            className='navbar__menu hamburger__menu top'
          />
          <rect
            height=".72"
            width="3.145"
            fill={currentMainColor}
            ry=".126"
            strokeLinecap="round"
            strokeWidth=".087"
            transform="matrix(.9449 -.32733 .5695 .822 0 0)"
            x="67.937"
            y="134.87"
            className='navbar__menu hamburger__menu middle'
          />
          <rect
            height=".72"
            width="3.145"
            fill={currentMainColor}
            ry=".126"
            strokeLinecap="round"
            strokeWidth=".087"
            transform="matrix(.9449 -.32733 .5695 .822 0 0)"
            x="67.935"
            y="135.936"
            className='navbar__menu hamburger__menu bottom'
          />
          <path
            d="M14.888 124.865l1.98-.605"
            fill="none"
            stroke="#000"
            strokeLinecap="square"
            strokeWidth="1.305"
            className='navbar__menu forward__arrow--rectangle'
          />
          <path
            d="M17.086 122.782l.81 2.63"
            stroke="#000"
            strokeLinecap="round"
            strokeWidth=".131"
            className='nothing'
          />
          <path
            d="M17.09 122.774l2.125.763M17.896 125.413l1.322-1.871"
            stroke="#000"
            strokeLinecap="round"
            strokeWidth=".131"
            className='nothing'
          />
          <path
            d="M17.17 122.535a.345.345 0 00-.306.47c.242.789.486 1.578.73 2.367a.346.346 0 00.614.081l1.193-1.687a.346.346 0 00-.196-.53l-1.911-.684a.402.402 0 00-.123-.017z"
            strokeLinecap="round"
            strokeWidth=".001"
            className='nothing'
          />
          <path
            d="M12.645 125.618l-1.98.605"
            fill="none"
            stroke="#000"
            strokeLinecap="square"
            strokeWidth="1.305"
            className='navbar__menu back__arrow--rectangle'
          />
          <path
            d="M10.447 127.701l-.81-2.63"
            stroke="#000"
            strokeLinecap="round"
            strokeWidth=".131"
            className='nothing'
          />
          <path
            d="M10.444 127.709l-2.126-.763M9.638 125.07l-1.322 1.87"
            stroke="#000"
            strokeLinecap="round"
            strokeWidth=".131"
            className='nothing'
          />
          <path
            d="M10.363 127.947a.345.345 0 00.307-.469l-.73-2.367a.346.346 0 00-.615-.082c-.398.563-.796 1.125-1.192 1.688a.346.346 0 00.195.529c.637.228 1.274.458 1.912.684.04.013.081.017.123.017z"
            strokeLinecap="round"
            strokeWidth=".001"
            className='navbar__menu back__arrow--triangle'
          />
          <path
            d="M141.528 166.327l-2.632-.412"
            fill="#fff"
            stroke="#fff"
            strokeLinecap="square"
            strokeWidth="1.679"
            className='hero__section mouse__bottom--rectangle__white'
          />
          <path
            d="M138.328 167.7a.418.418 0 00.579-.347l.454-2.948a.417.417 0 00-.624-.412l-2.178 1.201a.417.417 0 00-.066.676c.57.582 1.139 1.166 1.71 1.746a.441.441 0 00.125.083z"
            fill="#fff"
            stroke="#fff"
            strokeLinecap="round"
            strokeWidth=".001"
            className='mouse__top--triangle__white'
          />
          <path
            d="M138.271 167.397a.347.347 0 00.482-.288l.377-2.448a.347.347 0 00-.162-.337.347.347 0 00-.356-.004l-1.81.997a.346.346 0 00-.054.561c.473.484.946.969 1.42 1.451.03.029.066.052.104.069z"
            strokeLinecap="round"
            strokeWidth=".001"
            className='mouse__top--triangle__black'
          />
          <path
            d="M141.564 166.334l-2.046-.32"
            fill="none"
            stroke="#000"
            strokeLinecap="square"
            strokeWidth="1.305"
            className='mouse__bottom--rectangle__black'
          />
        </g>
      </svg>
    );
  }