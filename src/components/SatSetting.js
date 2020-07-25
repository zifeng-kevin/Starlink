import React, {Component} from 'react';
import { InputNumber } from 'antd';

class SatSetting extends Component {
    render() {
        return (
            <div className="sat-setting">
                <div className="loc-setting">
                    <p className="setting-label">From Location</p>
                    <div className="setting-list two-item-col">
                        <div className="list-item">
                            <label>Longitude: </label>
                            <InputNumber min={-180}
                                         max={180}
                                         defaultValue={0}
                                         style={{margin: "0 2px"}}
                                         onChange={this.onChangeLon} />
                        </div>

                        <div className="list-item right-item">
                            <label>Latitude: </label>
                            <InputNumber min={-90}
                                         max={90}
                                         defaultValue={0}
                                         style={{margin: "0 2px"}}
                                         onChange={this.onChangeLat} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    onChangeLon = value => {
        console.log(value)
    }

    onChangeLat = value => {
        console.log(value)
    }
}

export default SatSetting;