import React from 'react';
//import Logo from './Components/Logo';
import SearchBox from './Components/Searchbox';
import Header from './Components/Header';
import Nav from './Components/Nav';
import ResultsList from './Components/ResultsList';
import AddSong from './Components/AddSong';
import SignInForm from './Components/SignInForm';
import SignUpForm from './Components/SignUpForm';
import teevo from './Components/teevo';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      searchQuery: '',
      results: [],
      signInDisplay: 'none',
      addSongDisplay: 'none',
      dashboardDisplay: 'none',
      resultsListDisplay: 'block',
      searchBoxDisplay: 'block',
      signUpDisplay: 'none'
    };
  }

  toggleDisplay = (e) => {
    //console.log(e.target.id);
    switch (e.target.id) {
      case 'addSong':
          this.setState({
            searchQuery: '',
            results: [],
            signInDisplay: 'none',
            addSongDisplay: 'inline-block',
            dashboardDisplay: 'none',
            resultsListDisplay: 'none',
            searchBoxDisplay: 'none',
            route: 'home',
            signUpDisplay: 'none'
          });
        break;
      case 'signIn':
          this.setState({
            searchQuery: '',
            results: [],
            signInDisplay: 'inline-block',
            addSongDisplay: 'none',
            dashboardDisplay: 'none',
            resultsListDisplay: 'none',
            searchBoxDisplay: 'none',
            signUpDisplay: 'none'
          });
          break;
          case 'linkToSignInForm':
              this.setState({
                searchQuery: '',
                results: [],
                signInDisplay: 'inline-block',
                addSongDisplay: 'none',
                dashboardDisplay: 'none',
                resultsListDisplay: 'none',
                searchBoxDisplay: 'none',
                signUpDisplay: 'none'
              });
              break;
              case 'linkToSignUpForm':
                  this.setState({
                    searchQuery: '',
                    results: [],
                    signInDisplay: 'none',
                    addSongDisplay: 'none',
                    dashboardDisplay: 'none',
                    resultsListDisplay: 'none',
                    searchBoxDisplay: 'none',
                    signUpDisplay: 'inline-block'
                  });
                  break;
      case 'dashBoard':
          this.setState({
            signInDisplay: 'none',
            addSongDisplay: 'none',
            dashboardDisplay: 'inline-block',
            resultsListDisplay: 'none',
            searchBoxDisplay: 'none',
            route: 'dashboard',
            signUpDisplay: 'none'
          });
          break;
      case 'psalms':
          //console.log('working');
          this.setState({
            searchQuery: '',
            results: [],
            signInDisplay: 'none',
            addSongDisplay: 'none',
            dashboardDisplay: 'none',
            resultsListDisplay: 'block',
            searchBoxDisplay: 'block',
            route: 'home',
            signUpDisplay: 'none'
          });
        break;
      default: 
        this.setState({
        signInDisplay: 'none',
        addSongDisplay: 'none',
        dashboardDisplay: 'none',
        resultsListDisplay: 'block',
        searchBoxDisplay: 'block'
      });
    }
    
  }

  searchLyrics = (event) => {
    if(event.target.value !== '') {
      let resultsArray = teevo.filter((psalmObject) => {
        return Object.keys(psalmObject).map(key => psalmObject[key].toLowerCase().includes(event.target.value.toLowerCase())).includes(true)
        })
        this.setState({searchQuery: event.target.value.toLowerCase(), results: resultsArray});
    } else {
      this.setState({searchQuery: event.target.value.toLowerCase(), results: []});
    }
  }

  render() {
    //console.log('App', this.state.results, this.state.searchQuery);

    let style = {
      maxHeight: "100vh",
      overflow: "hidden",
      height: "100vh"
    };
    // let hidden = {
    //   display: "none"
    // };
    
    return (
      <div className='ba w-100 flex flex-column justify-between' style={style}>
        <div className='ba flex justify-end'>
          <div className=' w5'>
            <Nav toggleDisplay={this.toggleDisplay} />
          </div>
        </div>
        <div className='ba w-100 flex justify-center'>
          <div className='ba'>
            <Header toggleDisplay={this.toggleDisplay}/>
          </div>
        </div>
        <div className='ba w-100 flex justify-center'>
          <div>
            <SearchBox searchLyrics={this.searchLyrics} display={this.state.searchBoxDisplay} searchfield={this.state.searchfield}/>
          </div>
        </div>
        <div className='ba w-100 flex justify-center b--red' style={{height:"55%"}} >
          <div>
            <ResultsList list={this.state.results} display={this.state.resultsListDisplay}/>
            <AddSong display={this.state.addSongDisplay}/>
            <SignInForm display={this.state.signInDisplay} toggleDisplay={this.toggleDisplay}/>
            <SignUpForm display={this.state.signUpDisplay} toggleDisplay={this.toggleDisplay}/>
          </div>
        </div>
        <div className=' w-100 flex justify-center'>
          <div className=''>
            <h3>All lyrics are a property of their owners.</h3>
          </div>
        </div>
        
      </div>
    );
  }
}
export default App;
