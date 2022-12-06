import { Component } from "react";

class Editable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: props.text,
            isEditable: false
        }
        this.toggleEditable = this.toggleEditable.bind(this);
        this.mutateInputValue = this.mutateInputValue.bind(this);
    }

    toggleEditable() {
        let inverse = !(this.state.isEditable)
        this.setState({
            isEditable: inverse
        });

    }

    mutateInputValue(e) {
        let inputField = document.querySelector('input');
        this.setState({
            text: inputField.value
        });
    }

    render() {
        let { id } = this.props;
        let { text, isEditable } = this.state;
        return (
            (isEditable) ?
            (<input id={id} autoFocus={true} onBlur={this.toggleEditable} key={id} type="text" onChange={this.mutateInputValue}/>) :
            (<span onClick={this.toggleEditable}>{text} </span>)
        )
    }
}

export default Editable;