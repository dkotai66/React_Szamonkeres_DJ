import { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";
import './Tapasztalat.css'

export default class Tapasztalat extends Component {
    render() {
        return <div>
            <body>
                <div className="container">
                <Header />
                <img src={('./img/petrik.jpg')} alt="dj" className="img-fluid" id="imgTapasztalat"/>
                <div className="text">
                    <h3>Pro-bono bulik</h3>
                    <ul>
                        <li>Csibeavató, 2021. 08. 31</li>
                        <li>Karácsonyi bál, 2021. 12. 22</li>
                        <li>Farsangi mulatság, 2021. 02. 20</li>
                    </ul>
                    <br />
                    <h3>Professzionális bulik</h3>
                    <ul>
                        <li>Tanárkarácsony, 2021. 12. 20.</li>
                        <li>Ballagás, 2022. 04. 30.</li>
                    </ul>
                </div>
                
                </div>
               
            </body>
            <Footer />
        </div>
    }
}