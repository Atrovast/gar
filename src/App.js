import logo from './logo.svg';
import './App.css';
import './websites.json'

function App() {
    // const name = 'Josh Perez';
    const products = [
        { title: 'Cabbage', id: 1 },
        { title: 'Apple', id: 3 },
        { title: 'Garlic', id: 2 },
    ];
    const listItems = products.map(product =>
        <li key={product.id}>
            {product.title}
        </li>
    );
    // load json
    const websites = require('./websites.json');
    const webItems = websites['OJ'].map(website =>
        <Card title={website.title} url={website.site} imgsrc={"/" + website.icon} />
    );

    return (
    <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
            Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
            Learn React
            </a>
        </header>

        <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
        }}>{webItems}</div>
        <ul>{listItems}</ul>
        {/*<Card title="首页 - 洛谷 | 计算机科学教育新生态" url="https://www.luogu.com.cn/" imgsrc="/favicons/OJ/05bb0cdc3074bb92b4f8002a5c65e95d.ico"/>*/}
    </div>
  );
}

function Card({imgsrc, title, url}) {
    return (
        <div onClick={
            function click() {
                window.open(url);
            }
        } style={{
            border: '5px solid #70C0FF',
            width: '200px',
            height: '80px',
        }}>
            <img src={process.env.PUBLIC_URL + imgsrc} alt="123" style={{
                float: 'left',
                height: '80%',
            }}/>
            <p>{title}</p>
        </div>
    );
}

export default App;
