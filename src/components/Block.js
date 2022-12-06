import { Component } from 'react';
import Editable from './Editable';
import uniqid from 'uniqid';
import './Block.css';

class Block extends Component {
    constructor(props) {
        super(props);
        this.addMore = this.addMore.bind(this);
        this.state = {
            info: this.props.info
        }
    }

    addMore() {
        this.setState({
            info: this.state.info.concat(this.props.info)
        });
        console.log(this.props.info);
    }

    render() {
        let { title } = this.props;
        let { info } = this.state;
        return (
            <div className='block'>
                <h1>{title}</h1>
                <ul>
                    {info.map(datum => {
                        return <li>{datum[0]}: {datum[1].map(detail => {
                            return <Editable text={detail} id={uniqid()}/> 
                        })}</li>
                    })}
                </ul>
                
                <button onClick={this.addMore}>Add More {title} +</button>


            </div>

        );
    }
}

export default Block;