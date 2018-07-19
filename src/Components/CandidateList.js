import React from 'react';

import axios from 'axios';

export default class CandidateList extends React.Component {
    state = {
        candidates: []
    }

    componentDidMount() {
        axios.get(`https://backend-bzorbvezmq.now.sh/candidates`)
            .then(res => {
                const candidates = res.data;
                this.setState({ candidates });
                console.log(res);
            })
    }

    render() {
        return (
            <div>
            {this.state.candidates.map(candidate =>     
                
                <div className = "cand-details">
                    <p> {candidate.firstName} {candidate.lastName} </p>
                    <p> {candidate.currentJobTitle} </p>
                    <p> {candidate.location} </p>
                    <p> {candidate.phoneNumber} </p>
    
    
                </div>
            )}
            </div>
        )
    }
}