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
                <button className="button" onClick = {this.props.handleModalToggle}>Back this project</button>
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

class ProjectProgress extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            progress: props.fundRaised/props.fundGoal*100
        }
    }


    render(){
        console.log(this.state.progress)
        document.documentElement.style.setProperty('--progress', `${this.state.progress}%` )
        return <div className="ProjectProgress">
            <div className="ProjectProgress_grid">
                <div className="ProjectProgress_grid_col">
                    <strong>${numberWithCommas(this.props.fundRaised)}</strong>
                    <p>of ${numberWithCommas(this.props.fundGoal)} backed</p>
                </div>
                <div className="ProjectProgress_grid_col">
                    <strong>{numberWithCommas(this.props.backers)}</strong>
                    <p>total backers</p>
                </div>
                <div className="ProjectProgress_grid_col">
                    <strong>{numberWithCommas(this.props.dayLeft)}</strong>
                    <p>days left</p>
                </div>
            </div>
            <div className="ProjectProgress_progressBar">
                <div className="ProjectProgress_progressBar_progress">

                </div>
            </div>
        </div>
    }
}

class ProjectDetailsPledge extends React.Component{
    render(){
        return <div className="ProjectDetailsPledge">
            <h2>About this project</h2>
            <p>The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen
                to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve
                your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
            </p>
            <p className="ProjectDetailsPledge_LastParagraph">
                Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer
                to allow notepads, pens, and USB sticks to be stored under the stand.
            </p>
            <PledgeDetail
                rewardNameList={this.props.rewardNameList}
                rewardMinPrice={this.props.rewardMinPrice}
                rewardStock={this.props.rewardStock}
                handleModalToggle={this.props.handleModalToggle}
                index={1}>
                    You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and
                you’ll be added to a special Backer member list.
            </PledgeDetail>
            <PledgeDetail
                rewardNameList={this.props.rewardNameList}
                rewardMinPrice={this.props.rewardMinPrice}
                rewardStock={this.props.rewardStock}
                handleModalToggle={this.props.handleModalToggle}
                index={2}>
                    You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer
                member list. Shipping is included.
            </PledgeDetail>
            <PledgeDetail
                rewardNameList={this.props.rewardNameList}
                rewardMinPrice={this.props.rewardMinPrice}
                rewardStock={this.props.rewardStock}
                handleModalToggle={this.props.handleModalToggle}
                index={3}>
                    You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added
                to our Backer member list. Shipping is included.
            </PledgeDetail>
        </div>
    }
}

class PledgeDetail extends React.Component{
    render(){
        return <div className={this.props.rewardStock[this.props.index]>0 ? "PledgeDetail" : "PledgeDetail OutOfStock"}>
            <div className="PledgeDetail_Title">
                <h2>{this.props.rewardNameList[this.props.index]}</h2>
            </div>
            <div className="PledgeDetail_Price">
                <p>Pledge ${this.props.rewardMinPrice[this.props.index]} or more</p>
            </div>
            <div className="PledgeDetail_Text">
                <p>{this.props.children}</p>
            </div>
            <div className="PledgeDetail_Left">

                <p><strong>{this.props.rewardStock[this.props.index]}</strong> left</p>
            </div>
            <div className="PledgeDetail_Button">
                <button className="button" onClick={this.props.rewardStock[this.props.index]>0 ? this.props.handleModalToggle : null}>Select reward</button>
            </div>
        </div>
    }
}

class Modal extends React.Component{
    render() {
        return <div className={this.props.modalOpen ? "ModalOverlay Open" : "ModalOverlay"}>
            <div className="ModalStep1">
                <h2>Back this project</h2>
                <p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
                <div className="cross" onClick={this.props.handleModalToggle}>

                </div>
                <ModalPledge
                    rewardNameList={this.props.rewardNameList}
                    rewardMinPrice={this.props.rewardMinPrice}
                    rewardStock={this.props.rewardStock}
                    activeIndex={this.props.activeIndex}
                    index={0}>
                    Choose to support us without a reward if you simply believe in our project. As a backer,
                    you will be signed up to receive product updates via email.
                </ModalPledge>
            </div>

        </div>
    }
}

class ModalPledge extends React.Component{
    render(){
        return <div className="ModalPledge">

        </div>
    }
}

class Page extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            hamburgerOpen: false,
            modalOpen: false,
            modalStep: 1,
            fundGoal: 100000,
            fundRaised: 89000,
            dayLeft: 56,
            backers: 5007,
            rewardNameList: ["Pledge with no reward", "Bamboo Stand", "Black Edition Stand", "Mahogany Special Edition", "out of stock"],
            rewardMinPrice: [0, 25, 75, 200],
            rewardStock: [Infinity, 101, 64, 0],
            activeIndex: 0
        }

        this.handleHamburger = this.handleHamburger.bind(this)
        this.handleModalToggle = this.handleModalToggle.bind(this)
    }

    handleHamburger(){
        const hamburgerOpenPast = this.state.hamburgerOpen
        console.log(hamburgerOpenPast)

        this.setState({ 
            hamburgerOpen: !hamburgerOpenPast
        })
    }

    handleModalToggle(){
        const modalOpenPast = this.state.modalOpen
        this.setState({ 
            modalOpen: !modalOpenPast
        })
    }



    render(){
        return <div className="app">
            <Header hamburgerOpen = {this.state.hamburgerOpen} handleHamburger={this.handleHamburger}></Header>
            <ProjectBrief handleModalToggle={this.handleModalToggle}></ProjectBrief>
            <ProjectProgress 
                fundGoal={this.state.fundGoal} 
                fundRaised={this.state.fundRaised} 
                dayLeft={this.state.dayLeft} 
                backers={this.state.backers}>
            </ProjectProgress>
            <ProjectDetailsPledge
                rewardNameList={this.state.rewardNameList}
                rewardMinPrice={this.state.rewardMinPrice}
                rewardStock={this.state.rewardStock}
                handleModalToggle={this.handleModalToggle}>
            </ProjectDetailsPledge>
            <Modal
                rewardNameList={this.state.rewardNameList}
                rewardMinPrice={this.state.rewardMinPrice}
                rewardStock={this.state.rewardStock}
                activeIndex={this.state.activeIndex}
                modalOpen={this.state.modalOpen}
                modelStep={this.state.modalStep}
                handleModalToggle={this.handleModalToggle}>
            </Modal>
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