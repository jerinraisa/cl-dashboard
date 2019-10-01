import React, { Component } from 'react'
import styled from 'styled-components'
import Header from './Title'
import List from '../list.js'

const HomePageWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const TitleMain = styled.h1`
`;

class DailyTasks extends Component{
    render(){
        return(

            <HomePageWrapper>
            
                <Header>Daily Tasks</Header>
                <List></List>

            </HomePageWrapper>
        )
    }
}
export default DailyTasks;