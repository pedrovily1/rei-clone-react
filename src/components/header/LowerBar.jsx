import './LowerBar.css';

const LowerBar = () => {
    return (
      <>
        <hr id="lowerBarhr"></hr>
        <div className="LowerBar">
          <div id="lowerBarBtns">Camp & Hike</div>
          <div id="lowerBarBtns">Climb</div>
          <div id="lowerBarBtns">Cycle</div>
          <div id="lowerBarBtns">Water</div>
          <div id="lowerBarBtns">Run</div>
          <div id="lowerBarBtns">Fitness</div>
          <div id="lowerBarBtns">Snow</div>
          <div id="lowerBarBtns">Travel</div>
          <div id="lowerBarBtns">Men</div>
          <div id="lowerBarBtns">Women</div>
          <div id="lowerBarBtns">Kids</div>
                <div id="lowerBarBtns" style={{ color: 'red', borderColor: 'red'}}>Deals</div>
          <div id="lowerBarBtns">Brands</div>
          <div id="lowerBarBtns">More</div>
        </div>
      </>
    );
}

export default LowerBar;