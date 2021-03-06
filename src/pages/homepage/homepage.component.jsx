import React from 'react'
import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component';
import { withRouter } from 'react-router-dom';
import MenuItem from '../../components/menu-item/menu-item.component';
import SearchYourMovie from '../../components/search-your-movie/search-your-movie.component';

class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            movies: [],
        }
    }

    componentDidMount = async () => {
        console.log('componont did mount');
        if (this.props.searchText) {
            await this.initMovieList();
        }
    }

    componentDidUpdate = async (prevProps, prevState) => {
        console.log('componont did update');
        console.log('prevState, prevProps :- ', prevState, prevProps)
        if (prevProps.searchText !== this.props.searchText) {
            await this.initMovieList();
        }
    }

    initMovieList = async () => {
        const movieTitle = this.props.searchText;
        const res = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=49f541c8&s=${movieTitle}`,
            { method: 'GET' });
        const data = await res.json();
        console.log('Movies :- ', data);
        this.setState({ movies: data.Search })
    }

    onClickHandler = (event) => {
        const movieId = event.currentTarget.dataset.id_key;
        this.props.history.push(`/movies/${movieId}`);
    }

    render() {
        const searchedMovies = this.state.movies;
        return (
            <div className="homepage" >
                {this.state.movies.length >0 ?
                    (<Directory>
                        {searchedMovies.map((movie) =>
                            (<MenuItem key={movie.imdbID} movieDetail={movie} onClickHandler={this.onClickHandler} />
                            )
                        )}
                    </Directory>)
                    : <SearchYourMovie />}
            </div>
        )
    }
}

export default withRouter(HomePage);