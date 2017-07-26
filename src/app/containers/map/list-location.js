import React from 'react';

const ListLocation = (props) => {

    console.log(props, 'in doter component');

    const itemStyle = {

        padding : '20px',
        backgroundColor: '#eee',
        color: '#4db939'

    }

    const list = props.locationList.markers.map(elem => <div style={itemStyle} className="list-item">{elem.locationName}<br/><button   >Delete</button></div>)

    return (

        <div className="list">{list}</div>

    )

}

export default ListLocation