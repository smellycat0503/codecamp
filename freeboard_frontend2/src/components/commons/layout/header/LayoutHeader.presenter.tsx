import React from 'react'
import Slider from 'react-slick'
import {Component} from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {Wrapper, BackImg} from './LayoutHeader.styles'
import styled from '@emotion/styled'
const LayoutHeaderUI = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplaySpeed: 5000,
  }
  function SampleNextArrow(props) {
    const {className, style, onClick} = props
    return (
      <div
        className={className}
        style={{...style, display: 'block', background: 'red'}}
        onClick={onClick}
      />
    )
  }

  function SamplePrevArrow(props) {
    const {className, style, onClick} = props
    return (
      <div
        className={className}
        style={{...style, display: 'block', background: 'green'}}
        onClick={onClick}
      />
    )
  }

  const StyledSlider = styled(Slider)`
    /* Arrows */
    .slick-prev,
    .slick-next {
      font-size: 0;
      line-height: 0;

      position: absolute;
      top: 50%;

      display: block;

      width: 20px;
      height: 20px;
      padding: 0;
      -webkit-transform: translate(0, -50%);
      -ms-transform: translate(0, -50%);
      transform: translate(0, -50%);

      cursor: pointer;

      color: transparent;
      border: solid;
      outline: none;
      background: transparent;
    }
    .slick-prev:hover,
    .slick-prev:focus,
    .slick-next:hover,
    .slick-next:focus {
      color: transparent;
      outline: none;
      background: transparent;
      /* z-index: 99; */
    }
    .slick-prev:hover:before,
    .slick-prev:focus:before,
    .slick-next:hover:before,
    .slick-next:focus:before {
      opacity: 1;
    }
    .slick-prev.slick-disabled:before,
    .slick-next.slick-disabled:before {
      opacity: 0.25;
    }

    .slick-prev:before,
    .slick-next:before {
      font-family: 'slick';
      font-size: 20px;
      line-height: 1;

      opacity: 0.75;
      color: white;

      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    .slick-prev {
      /* left: -25px; */
      left: 3% !important;
      z-index: 1;
    }
    [dir='rtl'] .slick-prev {
      right: -25px;
      left: auto;
    }
    .slick-prev:before {
      content: '←';
    }
    [dir='rtl'] .slick-prev:before {
      content: '→';
    }

    .slick-next {
      /* right: -25px; */
      right: 3% !important;
      z-index: 1;
    }
    [dir='rtl'] .slick-next {
      right: auto;
      left: -25px;
    }
    .slick-next:before {
      content: '→';
    }
    [dir='rtl'] .slick-next:before {
      content: '←';
    }

    /* Dots */
    .slick-dotted.slick-slider {
      margin-bottom: 30px;
    }

    .slick-dots {
      position: absolute;
      bottom: 30px;
      /* color: white; */
      display: block;

      width: 100%;
      padding: 0;
      margin: 0;

      list-style: none;

      text-align: center;
    }
    .slick-dots li {
      position: relative;

      display: inline-block;

      width: 20px;
      height: 20px;
      margin: 0 5px;
      padding: 0;

      cursor: pointer;
    }
    .slick-dots li button {
      font-size: 0;
      line-height: 0;

      display: block;

      width: 20px;
      height: 20px;
      padding: 5px;

      cursor: pointer;

      color: transparent;
      border: 0;
      outline: none;
      background: transparent;
    }
    .slick-dots li button:hover,
    .slick-dots li button:focus {
      outline: none;
    }
    .slick-dots li button:hover:before,
    .slick-dots li button:focus:before {
      opacity: 1;
    }
    .slick-dots li button:before {
      font-family: 'slick';
      font-size: 6px;
      line-height: 20px;

      position: absolute;
      top: 0;
      left: 0;

      width: 20px;
      height: 20px;

      content: '•';
      text-align: center;

      opacity: 0.25;
      color: white;

      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    .slick-dots li.slick-active button:before {
      opacity: 1;
      color: white;
    }
  `

  return (
    <>
      <Wrapper>
        {/* <h2> Single Item</h2> */}
        <StyledSlider {...settings}>
          <div>
            <BackImg src="/img1.png" />
          </div>
          <div>
            <BackImg src="/img2.png" />
          </div>
          <div>
            <BackImg src="/img3.png" />
          </div>
        </StyledSlider>
      </Wrapper>
    </>
  )
}

export default LayoutHeaderUI
