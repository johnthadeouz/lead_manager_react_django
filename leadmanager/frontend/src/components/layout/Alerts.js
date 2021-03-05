import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Alerts extends Component {
    static propTypes = {
        error: PropTypes.object.isRequired,
        message: PropTypes.object.isRequired
    }
    componentDidUpdate(prevProps) {
        const { error, alert, message } = this.props;
        if (error !== prevProps.error) {
            if (error.msg.name) alert.error(`Error on Name: ${error.msg.name.join()}`);
            if (error.msg.email) alert.error(`Error on Email: ${error.msg.email.join()}`);
            if (error.msg.message) alert.error(`Error on Message: ${error.msg.message.join()}`);
        }
        if (message !== prevProps.message) {
            if (message.deleteLead) alert.success(message.deleteLead);
            if (message.retrieveLeads) alert.success(message.retrieveLeads);
            if (message.addLead) alert.success(message.addLead);
        }

    }
    render() {
        return <Fragment />
    }
}
const mapStateToProps = state => ({
    error: state.errors,
    message: state.messages
});

export default connect(mapStateToProps)(withAlert()(Alerts)); 
