import React, { Component } from 'react'
import Newsitem from './Newsitem'
export default class News extends Component {
    articles = []
    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading: false,
            page:1,
            
        }
    }

    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=7e3bb50259e746d38a91b6f8ca79b33f&pageSize=20";
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles , totalResults:parsedData.totalResults})
    }

    nextFunc=async()=>{
        console.log("next clicked");
        if(this.state.page+1>Math.ceil(this.state.totalResults/20)){

        }else{
            let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=7e3bb50259e746d38a91b6f8ca79b33f&page=${this.state.page+1}&pageSize=20`;
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({ articles: parsedData.articles })
            this.setState({
                page:this.state.page+1
            })
        }
    }

    prevFunc=async()=>{
        console.log("prev clicked");
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=7e3bb50259e746d38a91b6f8ca79b33f&page=${this.state.page-1}&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles })
        this.setState({
            page:this.state.page-1
        })
    }
    render() {
        return (
            <div className="grandparent">
                <div className="heading">
                    <h1>Today's top news headlines</h1>
                </div>
                <div className="parentcontainer">
                    {this.state.articles.map((element) => {
                        console.log(element)
                        return <div className='newscontent' key={element.url}>
                            <Newsitem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.newsUrl} ReadMore={element.url}></Newsitem>
                        </div>
                    })}
                </div>
                <br />
                <div className="nextbutton">
                    <button disabled={this.state.page<=1} onClick={this.prevFunc}>Previous page</button>
                    <button  onClick={this.nextFunc}>Next page</button>
                </div>
            </div>

        )
    }
}
