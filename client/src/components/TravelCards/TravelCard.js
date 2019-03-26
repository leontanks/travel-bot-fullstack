import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTravels } from '../../store/actions/travel'

import {
    Card, CardImg, CardText, CardBlock,
    CardTitle, CardSubtitle, Button, Col
} from 'reactstrap';

class TravelCard extends Component {

    constructor(props) {
        super(props);
    }

    static propTypes = {
        getTravels: PropTypes.func.isRequired,
        travels: PropTypes.array.isRequired
    }

    static defaultProps = {
        travels: []
    }

    componentWillMount() {
        this.props.getTravels();
    }

    render() {
        return (
            <div>
                {this.props.travels.map(travel =>
                    <Col sm={{ size: 'auto', offset: 1}}>
                        <Card>
                            <CardImg top width="100%" src={travel.country.image} alt="Card image cap" />
                            <CardBlock>
                                <CardTitle>{travel.country.name}</CardTitle>
                                <CardSubtitle>{travel.country.place}</CardSubtitle>
                                <CardText>{travel.id}</CardText>
                                {/* <Button color="danger" onClick={() => this.props.removePerson(id)}>Delete</Button> */}
                            </CardBlock>
                        </Card>

                    </Col>
                )}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    travels: state.travels
})

const dispatchToProps = (dispatch) => ({
    getTravels: () => dispatch(getTravels())
})

export default connect(mapStateToProps, dispatchToProps)(TravelCard);