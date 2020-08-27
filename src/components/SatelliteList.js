import React, {Component} from 'react';
import { Button, Spin, List, Avatar, Checkbox } from 'antd';
import satellite from '../assets/images/satellite.svg'

class SatelliteList extends Component {
    state = {
        selected: []
    }
    render() {
        //console.log(this.state.selected)
        const {satInfo, isLoad} = this.props
        const satList = satInfo ? satInfo.above : [];
        const {selected} = this.state

        return (
            <div className="sat-list-box">
                <Button className="sat-list-btn"
                        size="large"
                        disabled={selected.length === 0}
                        onClick={this.showMap}
                >Track on the map</Button>
                <hr/>

                {
                    isLoad ?
                        <div className="spin-box">
                            <Spin tip="Loading..." size="large" />
                        </div>
                        :
                        <List  className="sat-list"
                               itemLayout="horizontal"
                               size="small"
                               dataSource={satList}
                               renderItem={ item =>  (
                                   <List.Item actions={[<Checkbox dataInfo={item}
                                                                  onChange={this.onChange}/>]}
                                   >
                                       <List.Item.Meta
                                           avatar={<Avatar src={satellite} size={50} alt='satellite'/>}
                                           title={<p>{item.satname}</p>}
                                           description={`Launch Date: ${item.launchDate}`}
                                       />
                                   </List.Item>
                               )}
                        />
                }
            </div>
        );
    }
    onChange = e => {
        //console.log(e.target)
        const {dataInfo, checked} = e.target
        const {selected} = this.state
        const list = this.addOrRemove(dataInfo, checked, selected)
        console.log(list)
        this.setState({
            selected: list
        })
    }

    addOrRemove = (item, status, list) => {
        // check is true -> item not in the list -> add it
        //               -> item in the list -> do nothing
        // check is false -> item in the list -> remove it
        //                -> item not in the list -> do nothing
        const found = list.some(entry => entry.satid === item.satid)
        if (status && !found) {
            list.push(item)
        }
        if (!status && found) {
            list = list.filter(entry => entry.satid !== item.satid)
        }
        return list
    }

    showMap = () => {
        this.props.onShowMap(this.state.selected)
    }
}

export default SatelliteList;