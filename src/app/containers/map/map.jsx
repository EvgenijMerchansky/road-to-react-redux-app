import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withGoogleMap,GoogleMap, Marker } from "react-google-maps";
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import Helmet from "react-helmet";
import ListLocation from './list-location';

const googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.27&libraries=places,geometry&key=AIzaSyArLLl2h85AkDZfkMcgPQwjDM3tfLBz7S4";

const GettingStartedGoogleMap = withGoogleMap(props => (

    <GoogleMap
        ref={props.onMapLoad}
        defaultZoom={3}
        defaultCenter={{lat: 49.988358, lng: 36.232845}}

        googleMapURL={googleMapURL}
        onClick={props.onMapClick}
    >

        {props.markers.map((marker, index) => <Marker position={marker} key={index} {...marker} onRightClick={() => props.onMarkerRightClick(index)}/>)}
        {console.log(props,'myprops')}

    </GoogleMap>

));

class Map extends Component {

    constructor(props){
        super(props);

        this.state = {
            markers: []
        };
        // - - -
        this.onChange = (address) => this.setState({ address });

        this.handleFormSubmit = this.handleFormSubmit.bind(this);

        this.changeValue = '';
        // - - -
    }

    handleFormSubmit = (event) => {
        event.preventDefault();

        let locationName = event.target.childNodes[0].childNodes[0].value;

        geocodeByAddress(this.state.address)
            .then(results => getLatLng(results[0]))
            .then(latLng => {

                const nextMarkers = [
                    ...this.state.markers,
                    {
                        position: latLng,
                        defaultAnimation: 2,
                        locationName: locationName,

                    },
                ];


                this.setState({

                    markers: nextMarkers,

                })

            })
            .catch(error => console.error('Error', error));

    };

    render() { // при боунсах работать с this.props.markers

        const inputProps = {
            value: this.state.address,
            onChange: this.onChange,
        };

        const { authorized } = this.props.stateMap.authorizationReducer.admin;

        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <PlacesAutocomplete
                        inputProps={inputProps}
                        onChange={e => this.changeValue = e.target.value}
                    />
                    <button type="submit">Submit</button>

                </form>
                <Helmet title="Getting Started"/>
                    {/*<SimpleForm {...this.state} handleButtonClick={this.handleButtonClick.bind(this)} onSubmit={this.handleFormSubmit}/>*/}
                <GettingStartedGoogleMap
                    containerElement = {
                        <div style={{ height: `300px`, width: `100%`, margin: `250px 0 0 0` }} />
                    }
                    mapElement = {
                        <div style={{ height: `100%` }} />
                    }
                    markers={this.state.markers}
                />
                <ListLocation locationList={this.state} />


                <Link
                    className={authorized === true ? 'authorization__module-links-active' : 'authorization__module-links-default'}
                    to="/admin-panel">
                    Back
                </Link>
            </div>
        )

    }
}

const mapStateToProps = (state) => {

    return {

        stateMap: state

    }

};

export default connect (mapStateToProps) (Map);
