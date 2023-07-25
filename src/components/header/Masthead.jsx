import './Masthead.css';

const Masthead = () => {
    return (
        <div id="Masthead">

            <div id="masthead-left">
                <a href='https://www.rei.com/'>
                    <img>{/*The OEI logo*/}</img>
                    <p>The OEI Logo</p>
                </a>
                <a href='https://www.rei.com/'>
                    <h3>Shop</h3>
                </a>
            </div>

            <div id="masthead-center">
                <form>
                    <input type='text' placeholder='Search for great gear & clothing'></input>
                    <button>🔍</button>
                </form>
            </div>

            <div id="masthead-right">

            </div>
        </div>
    );
}

export default Masthead;