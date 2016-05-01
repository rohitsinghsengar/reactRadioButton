import React from 'react'
import ReactDOM from 'react-dom'

class RadioBtn extends React.Component{

    constructor(props) {
        super(props);
    }
	
	handleClick(){
		this.props.handler(this.props.index);
	}

    render() {
        return (
            <div className="radio-btn-group" onClick={this.handleClick.bind(this)}>
                <div className={this.props.isChecked ? "radiobtn checked" : "radiobtn unchecked"} data-value={this.props.value}></div>
                <label>{this.props.text}</label>
            </div>
        );
    }
}

class RadioGrp extends React.Component{

    constructor() {
        super();
        this.state = {
          selectedIndex: null,
		  selectedValue: null,
		  options: ["Option 0","Option 1","Option 2","Option 3"]
        };
    }
	
	toggleRadioBtn(index){
		this.setState({
          selectedIndex: index,
		  selectedValue: this.state.options[index],
		  options: this.state.options
        });
    }

    render() {
		
		const { options } = this.state;
		
		const allOptions = options.map((option, i) => {
			return <RadioBtn key={i} isChecked={(this.state.selectedIndex == i)} text={option} value={option} index={i} handler={this.toggleRadioBtn.bind(this)} />
		});
		
        return (
			<div data-value={this.state.selectedValue}>{allOptions}</div>
        );
    }
}

var app = document.getElementById('app');

ReactDOM.render(<RadioGrp />, app);
