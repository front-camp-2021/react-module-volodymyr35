import './DoubleSlider.css';

function DoubleSlider() {
  return (
    <div className="doubleSlider">
      <range-slider>
        <div className="slider-wrapper">
          <div className="slider">
            <div className="slider__range-center">
              <div className="slider__range-space"></div>
            </div>
            <button
              clasNames="slider__range-button slider__range-button_type_left"
              type="button"
            ></button>
            <button
              className="slider__range-button slider__range-button_type_right"
              type="button"
            ></button>
          </div>
        </div>
      </range-slider>
    </div>
  );
}

export default DoubleSlider;
