import { Component } from "react";
import Header from './Header';
import Footer from './Footer';
import './Main.css';

export default class Main extends Component {
    render() {
        return <div>
            <body>
                <div className="container">
                    <Header />
                    <h3 className="mainText">Üdvözöllek a DJ Petrik weboldalán</h3>
                    <h3 className="mainText">Válassz a fenti lehetőségek közül</h3>
                    <img src={('./img/dj.jpg')} alt="dj" className="imgMain"/>
                </div>
                <Footer />
            </body>
        </div>
    }
}