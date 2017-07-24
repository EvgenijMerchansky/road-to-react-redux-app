import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

class Map extends Component {

    constructor(props){

        super(props);

        this.border = {
            border:0,
            width: '100%',
            padding: '0 0 80px 0',
            pointerEvents: 'none'
        }



    }

    render(){

        const { authorized } = this.props.stateMap.authorizationReducer.admin;
        //
        const GettingStartedGoogleMap = withGoogleMap(props => (
            <GoogleMap
                ref={props.onMapLoad}
                defaultZoom={3}
                defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
                onClick={props.onMapClick}
            >

            </GoogleMap>
        ));

        console.log(this);

        return (

            <div className="authorization__module-paths-map">

                basic map

                    <GettingStartedGoogleMap
                        containerElement={
                            <div style={{ height: `100%` }} />
                        }
                        mapElement={
                            <div style={{ height: `100%` }} />
                        }
                    />

                <Link to="/admin-panel" className={ !authorized ? 'authorization__module-links-default' : 'authorization__module-links-active'}  >Back</Link>

            </div>

        )

    }

}

const mapStateToProps = (state) => {

    return {

        stateMap: state

    }

}

const mapDispatchToProps = (dispatch) => {

    return bindActionCreators({

        // functions ...

    },dispatch);

}

export default connect (mapStateToProps, mapDispatchToProps) (Map);
