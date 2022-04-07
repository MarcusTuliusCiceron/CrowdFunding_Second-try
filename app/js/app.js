function numberWithCommas(x) {
    
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    
}

function isANumber(x){
    return /^\d+$/.test(x);
}

class Header extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return <div className="Header">
            <div className={this.props.hamburgerOpen ? "Overlay open" : "Overlay"}>
                <div className="HamburgerMenu">
                    <a href="#">About</a>
                    <a href="#">Discover</a>
                    <a href="#">Get Started</a> 
                </div>
            </div>
            <div className="Header_Bar">
                <div className="Header_Bar_Logo">

                </div>
                <div className="Header_Bar_Nav HideForTablet">
                    <a href="#">About</a>
                    <a href="#">Discover</a>
                    <a href="#">Get Started</a> 
                </div>
                <div className={this.props.hamburgerOpen ? "Header_Bar_HamburgerBtn open HideForDesktop " : "Header_Bar_HamburgerBtn HideForDesktop"} onClick={this.props.handleHamburger}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    }
}

class ProjectBrief extends React.Component{
    constructor(props){
        super(props)
        this.state={
            bookmarked: false
        }
        this.handleBookmark = this.handleBookmark.bind(this)
    }

    handleBookmark(){
        const bookmarkedPast = this.state.bookmarked
        this.setState({
            bookmarked: !bookmarkedPast
        })
    }

    render(){
        return <div className="ProjectBrief"> 
            <div className="ProjectBrief_Logo">

            </div>
            <h1>Mastercraft Bamboo Monitor Riser</h1>
            <p>A beautifully handcrafted monitor stand to reduce neck and eye strain</p>
            <div className="ProjectBrief_BottomLine">
                <button className="button">Back this project</button>
                <div className={this.state.bookmarked ? "ProjectBrief_BottomLine_Bookmark bookmarked" : "ProjectBrief_BottomLine_Bookmark"} onClick={this.handleBookmark}>
                    <div className="ProjectBrief_BottomLine_Bookmark_container">
                        <div className="ProjectBrief_BottomLine_Bookmark_circle">
                            
                        </div>
                        <p>{this.state.bookmarked ? "Bookmarked" : "Bookmark"}</p>
                    </div>
                </div>
            </div>
        </div>
    }
}

class Page extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            hamburgerOpen: false,
            modalOpen: false,
            modelStep: 1,
            fundGoal: 100000,
            fundRaised: 89000,
            dayLeft: 56,
            rewardNameList: ["Pledge with no reward", "Bamboo Stand", "Black Edition Stand", "Mahogany Special Edition", "out of stock"],
            rewardMinPrice: [0, 25, 75, 200],
            rewardStock: [Infinity, 101, 64, 0]
        }

        this.handleHamburger = this.handleHamburger.bind(this)
    }

    handleHamburger(){
        const hamburgerOpenPast = this.state.hamburgerOpen
        console.log(hamburgerOpenPast)

        this.setState({ 
            hamburgerOpen: !hamburgerOpenPast
        })
    }

    render(){
        return <div className="app">
            <Header hamburgerOpen = {this.state.hamburgerOpen} handleHamburger={this.handleHamburger}></Header>
            <ProjectBrief></ProjectBrief>
        </div>
    }
}

ReactDOM.render(<Page/>, document.querySelector('#app'))

/*


  Thanks for your support!
  Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get
  an email once our campaign is completed.
  Got it!

  <!-- Success modal end -->

*/