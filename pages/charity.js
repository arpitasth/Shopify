import { Card, Layout, Page } from '@shopify/polaris';
import React from 'react';
import CharityList from '../components/charityList';


class Charities extends React.Component {

    state = {
        items: []
    };

    componentDidMount(){
        fetch('/getCharities').then(
            (res) => res.json()
        ).then(
            (items) =>{
                this.setState({items})
            }
        ); 
    }

    render() {
        let charities = this.state.items.charities;
        return(
            <Page>
                <Layout.AnnotatedSection
                    title="Charities"
                    description="List of charities"
                >
                    <CharityList charities={charities}></CharityList>
                </Layout.AnnotatedSection>
            </Page>
        );
    }
}

export default Charities;
