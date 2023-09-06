import React, { Component } from 'react'
import Newsitem from './Newsitem'
export default class News extends Component {
    articles = []
    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1,

        }
    }
    
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=7e3bb50259e746d38a91b6f8ca79b33f&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false })
    }

    nextFunc = async () => {
        console.log("next clicked");
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=7e3bb50259e746d38a91b6f8ca79b33f&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles })
        this.setState({
            page: this.state.page + 1,
            loading: false
        })
    }

    prevFunc = async () => {
        console.log("prev clicked");
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=7e3bb50259e746d38a91b6f8ca79b33f&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles })
        this.setState({
            page: this.state.page - 1,
            loading: false
        })
    }
    render() {
        return (
            <div className="grandparent">
                <div className="heading">
                    <h1>Today's top news headlines</h1>
                </div>
                {this.state.loading && <div className="spinner">
                    <div className="loader"></div>
                </div>}
                <div className="parentcontainer">
                    <br />
                    {!this.state.loading && this.state.articles.map((element) => {
                        console.log(element)
                        return <div className='newscontent' key={element.url}>
                            <Newsitem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.newsUrl} ReadMore={element.url}></Newsitem>
                        </div>
                    })}
                <div className="nextbutton">
                    <button disabled={this.state.page <= 1} onClick={this.prevFunc}>Previous page</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults /this.props.pageSize)} onClick={this.nextFunc}>Next page</button>
                </div>
                </div>
            </div>

        )
    }
}
