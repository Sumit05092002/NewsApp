import React, { Component } from 'react'
import Newsitem from './Newsitem'
export default class News extends Component {
    render() {
        return (
            <div className="parentcontainer">
                <h1>Today's top headlines!</h1>
                <br />
                <br />
                <div className='newscontent'>
                    <Newsitem imageUrl="https://www.reuters.com/resizer/1K8rV1wNsUEi1TIJJSQgwO601-s=/1194x625/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/VKF5IJ2WWZBG5LHUGEHRMHLEGY.png"></Newsitem>
                    <Newsitem></Newsitem>
                    <Newsitem></Newsitem>
                    <Newsitem></Newsitem>
                    <Newsitem></Newsitem>
                    <Newsitem></Newsitem>
                    <Newsitem></Newsitem>
                    <Newsitem></Newsitem>
                    <Newsitem></Newsitem>
                    <Newsitem></Newsitem>
                    <Newsitem></Newsitem>
                    <Newsitem></Newsitem>
                    <Newsitem></Newsitem>
                    <Newsitem></Newsitem>
                </div>
            </div>
        )
    }
}
