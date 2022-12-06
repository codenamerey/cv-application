import { Component } from 'react';
import Editable from './Editable';
import uniqid from 'uniqid';

class Block extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { title, info } = this.props;
        return (
            <div>
                <h1>{title}</h1>
                <ul>
                    {info.map(datum => {
                        return <li>{datum[0]}: {datum[1].map(detail => {
                            return <Editable text={detail} id={uniqid()}/> 
                        })}</li>
                    })}
                </ul>


            </div>

        );
    }
}

export default Block;