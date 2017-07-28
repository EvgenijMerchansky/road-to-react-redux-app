import  React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withGoogleMap,GoogleMap, Marker } from "react-google-maps";
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import Helmet from "react-helmet";

const googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.27&libraries=places,geometry&key=AIzaSyArLLl2h85AkDZfkMcgPQwjDM3tfLBz7S4";

const GettingStartedGoogleMap = withGoogleMap(props => {

    return(

        <GoogleMap
                defaultZoom={3}
            defaultCenter={{lat: 49.988358, lng: 36.232845}}
            googleMapURL={googleMapURL}
        >

            {props.markers.map((marker, index) => <Marker position={marker} key={index} {...marker} onRightClick={() => props.onMarkerRightClick(index)}/>)}

        </GoogleMap>

    )
});

class Map extends Component {

    constructor(props){

        super(props);

        this.handleFormSubmit = this.handleFormSubmit.bind(this);

        this.state = {
            valueChanged: false,
            changeValue: '',
            markers: [],
        };

        this.onChange = (address) => {

            this.setState({

                changeValue: address

            });

            this.setState({ address });
        };

    }

    deleteItem = (key) => {

        const changedList = this.state.markers.filter(elem => {

            return elem.key !== key;

        });

        this.setState({

           markers: changedList

        });

    };

    handleFormSubmit = (event) => {
        event.preventDefault();

        let locationName = event.target.childNodes[0].childNodes[0].value;

        geocodeByAddress(this.state.address)
            .then(results => getLatLng(results[0]))
            .then(latLng => {

                const id = () => { return Math.random().toString(36).substr(2, 9) };

                const nextMarkers = [
                    ...this.state.markers,
                    {

                        position: latLng,
                        defaultAnimation: 2,
                        locationName: locationName,
                        key: id(),
                        confirmation: false,

                    },
                ];

                this.setState({

                    markers: nextMarkers,

                });



            })
            .then(() => {

                const bounds = new google.maps.LatLngBounds();

                for (let i = 0; i < this.state.markers.length; i++) {
                    let latitude = this.state.markers[i].position.lat,
                        longitude = this.state.markers[i].position.lng;
                    bounds.extend(new google.maps.LatLng(latitude, longitude));
                }

                this.refs.googleMap.state.map.fitBounds(bounds);

            }).then(() => {

                this.setState({

                    address: ''

                })

            })
            .catch(error => console.error('Error', error));

    };

    confirmation = (key) => { this.state.markers.filter(elem => { elem.key === key ? elem.confirmation = true : null });
        this.forceUpdate();
    };

    stayItem = (key) => { this.state.markers.filter(elem => { elem.key === key ? elem.confirmation = false : null });
        this.forceUpdate();
    };

    render() {

        const confirmationDefault = { display: 'none' },
              confirmationActive = { display: 'block' };

        const { authorized } = this.props.stateMap.authorizationReducer.admin,
                inputProps = { value: this.state.address, onChange: this.onChange, placeholder: 'Search Places...'},
                inputStyles = { input: { height: '55px', fontSize: `20px`, outline: `none`, color: `#5f5f5f` }, };

        const list = this.state.markers.map(elem => {
             return (
                  <div
                       key={elem.key}
                       className="authorization__module-paths-user-item-list-address-item">
                      {elem.locationName}
                            <br/>

                      <button className="open-confirmation"
                              onClick={this.confirmation.bind(this, elem.key)}
                              style={ elem.confirmation === true ? confirmationDefault : confirmationActive }
                      >
                          Delete
                      </button>

                      <div className="authorization__module-paths-user-item-list-address-item-toggle"
                           style={elem.confirmation === false ? confirmationDefault : confirmationActive}
                      >

                           <label>Are you sure ?</label><br/>



                           <button
                              onClick={this.deleteItem.bind(this, elem.key)}
                           >
                               yes
                           </button>

                           <button
                              onClick={this.stayItem.bind(this, elem.key)}
                           >
                               no
                           </button>

                      </div>

                  </div>
             )
        });

        return (
            <div className="authorization__module-paths-user-item-list">
                <form onSubmit={this.handleFormSubmit}>
                    <PlacesAutocomplete
                        className="authorization__module-paths-user-item-list-input"
                        inputProps={inputProps}
                        onChange={e => this.state.changeValue = e.target.value}
                        styles={inputStyles}
                    />
                    <button className="authorization__module-paths-user-item-list-btn" type="submit">Add +</button>

                </form>
                <Helmet title="Getting Started"/>
                <GettingStartedGoogleMap
                    ref="googleMap"
                    containerElement = {
                        <div style={{ height: `300px`, width: `100%`, margin: `-16px 0 0 0`, zIndex: `-10` }} />
                    }
                    mapElement = {
                        <div style={{ height: `100%`, zIndex: `0` }} />
                    }
                    markers={this.state.markers}
                />
                <div className="authorization__module-paths-user-item-list-address">{list}</div>

                <Link
                    className={authorized === true ? 'authorization__module-links-active individual-admin-link' : 'authorization__module-links-default'}
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
