import { Component } from "react";
import Header from "./Header";

interface State {
    regName: string;
    regDate: Date;
    regLeiras: string;
}

interface Details {
    name: string;
    date: Date;
    leiras: string;
}

export default class Idopontfoglalas extends Component<{}, State> {

    constructor(props: {}) {
        super(props)

        this.state = {
            regName:  '',
            regDate:  new Date(),
            regLeiras: '',

        }
    }

    render() {
        return <div>
            <body>
                <div className="container">
                    <Header />
                    <form>
                        <label htmlFor="name">Név</label><br />
                        <input type="text" name="name" id="nev" required value={this.state.regName} onChange={e=> this.setState({regName: e.currentTarget.value})}/><br />
                        <label htmlFor="date">Dátum</label><br />
                        <input type="date" name="date" id="datum" onChange={e => new Date(e.currentTarget.value)} required/><br />
                        <label htmlFor="leiras">Leírás</label><br />
                        <textarea name="leiras" id="leiras" required value={this.state.regLeiras} onChange={e=> this.setState({regLeiras: e.currentTarget.value})}></textarea><br />
                        <button className="btn btn-primary" >Küldés</button>
                    </form>
                </div>
            </body>
        </div>
    }
}