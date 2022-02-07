import React, { Component } from 'react'
import Draggable from 'react-draggable';



export class UbuntuApp extends Component {

    constructor(props){
        super(props);
        this.state = {dragging:false};
    }

    openApp = () => {
        this.props.openApp(this.props.id);
    }

    render() {
        return (
            <Draggable
            axis="both"
            grid={[1, 1]}
            scale={1}
            onStart={()=>this.setState({dragging:true})}
            onStop={()=>this.setState({dragging:false})}
            >
                <div
                    style={this.state.dragging ? {opacity:0.7}:{opacity:1}}
                    className="p-1 m-px z-10 bg-white bg-opacity-0 hover:bg-opacity-20 focus:bg-ub-orange focus:bg-opacity-50 focus:border-yellow-700 focus:border-opacity-100 border border-transparent outline-none rounded select-none w-24 h-20 flex flex-col justify-start items-center text-center text-xs font-normal text-white "
                    id={"app-" + this.props.id}
                    onDoubleClick={this.openApp}
                    tabIndex={0}
                >
                    <img onDragStart={(e)=>e.preventDefault()} width="40px" height="40px" className="mb-1 w-10" src={this.props.icon} alt={"Ubuntu " + this.props.name} />
                    {this.props.id}

                </div>
            </Draggable>
        )
    }
}

export default UbuntuApp
