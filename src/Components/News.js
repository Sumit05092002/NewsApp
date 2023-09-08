import React, { Component } from 'react'
import Newsitem from './Newsitem'
export default class News extends Component {
    articles = []
    constructor(props) {
        super(props);
        this.state = {
            articles: this.articles,
            loading: false,
            page: 2,

        }
        document.title=this.props.category;
    }

    async updateNews() {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7e3bb50259e746d38a91b6f8ca79b33f&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false })
    }
    
    async componentDidMount() {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7e3bb50259e746d38a91b6f8ca79b33f&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false })
    }

    nextFunc = async () => {
        // console.log("next clicked");
        // let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=7e3bb50259e746d38a91b6f8ca79b33f&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        // this.setState({ loading: true })
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // this.setState({ articles: parsedData.articles })
        // this.setState({
        //     page: this.state.page + 1,
        //     loading: false
        // })
        this.setState({page:this.state.page+1})
        this.updateNews();
    }

    prevFunc = async () => {
        // console.log("prev clicked");
        // let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=7e3bb50259e746d38a91b6f8ca79b33f&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        // this.setState({ loading: true })
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // this.setState({ articles: parsedData.articles })
        // this.setState({
        //     page: this.state.page - 1,
        //     loading: false
        // })
        this.setState({page:this.state.page-1})
        this.updateNews();
    }
    render() {
        return (
            <div className="grandparent">
                <div className="heading">
                    <h1>Today's top  {this.props.category} headlines</h1>
                </div>
                {this.state.loading && <div className="spinner">
                    <div className="loader"></div>
                </div>}
                <div className="parentcontainer">
                    <br />
                    {!this.state.loading && this.state.articles.map((element) => {
                        console.log(element)
                        return <div className='newscontent' key={element.url}>
                            <Newsitem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.newsUrl} ReadMore={element.url} author={element.author} published={element.publishedAt}></Newsitem>
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
