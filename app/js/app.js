function numberWithCommas(x) {
    
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    
}

function isANumber(x){
    return /^\d+$/.test(x);
}

class HamburgerBTN extends React.Component{

    render(){
        return <div className={this.props.class} onClick={this.props.onClick}>
        <span></span>
        <span></span>
        <span></span>
    </div>
    }
}

class HamburgerMenu extends React.Component{

    render(){
        return <div className={this.props.class}>
            <a href="#">About</a>
            <a href="#">Discover</a>
            <a href="#">Get Started</a> 
        </div>
    }
}


class Header extends React.Component{
    
    constructor(props) {
        super(props)
        this.toggleClass = this.toggleClass.bind(this)

        
        this.state = {
            active: 0,
            classBtn: 'HamburgerBtn HideForDesktop',
            classMenu: 'HamburgerMenu HideForDesktop',
            classOverlay: 'overlay'
        }
    }

    toggleClass() {
        const currentState = this.state.active;
        if(this.state.active == 0 || this.state.active==2){
            this.setState({ 
                active: 1,
                classBtn: 'HamburgerBtn HideForDesktop Open',
                classMenu: 'HamburgerMenu HideForDesktop Open slidein',
                classOverlay: 'overlay open fadeIn'
            })
        }
        else if (this.state.active == 1){
            this.setState({ 
                active: 2,
                classBtn: 'HamburgerBtn HideForDesktop',
                classMenu: 'HamburgerMenu HideForDesktop Open slideout',
                classOverlay: 'overlay fadeOut'
            })
        }
        
    }

    render(){
        return <div className="Header">
            <div className="Logo">
            </div>
            <div className="Links HideForTablet">
                <a href="#">About</a>
                <a href="#">Discover</a>
                <a href="#">Get Started</a> 
            </div>
            <HamburgerBTN class={this.state.classBtn} onClick={this.toggleClass}></HamburgerBTN>
            <HamburgerMenu class={this.state.classMenu}></HamburgerMenu>
            <div className={this.state.classOverlay}></div>
        </div>
    }
}

class BackingSection extends React.Component{

    constructor(props){
        super(props)
        this.state = {active: false}
        this.toggleClass = this.toggleClass.bind(this)
    }

    toggleClass() {
        const currentState = this.state.active;
        this.setState({ 
            active: !currentState,
        })
    }

    render(){
        return <div className="Backing_Section">
            <div className="logo">

            </div>
            <h1>
            Mastercraft Bamboo Monitor Riser
            </h1>
            <p>
            A beautiful & handcrafted monitor stand to reduce neck and eye strain.
            </p>
            <div className="action_bar">
                <button className="button" onClick={this.props.handleClickBack.bind(this)}>
                Back this project
                </button>
                <div className={this.state.active ? "bookmark active" : "bookmark"} onClick={this.toggleClass}>
                    <div className="icon_bookmark">
                    
                    </div>
                    Bookmark
                </div>
            </div>
        </div>
    }
}

class BackingDetails extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            backed: props.backed,
            backers: props.backers,
            days: props.days,
            progress: props.backed/1000
        }
    }


    render() {
        
        document.documentElement.style.setProperty('--progress', `${this.state.progress}%` )
        return <div className="Backing_Details">
            <div className="infos">
                <div className="column">
                    <strong>${numberWithCommas(this.state.backed)}</strong>
                    <p>of $100,000 backed</p>
                 
                </div>
                <div className="column">
                    <strong>
                        {numberWithCommas(this.state.backers)}
                    </strong>
                    <p>
                        total backers
                    </p>
                </div>
                <div className="column">
                    <strong>
                        {numberWithCommas(this.state.days)}
                    </strong>
                    <p>
                        days left
                    </p>
                </div>
            </div>

            <div className="loading_bar_container">
                <div className="loading_bar_progress">

                </div>
            </div> 
        </div>
    }
}

class BackingItem extends React.Component{
    
    render(){
        return <div className={this.props.available ? "Backing_Item" : "Backing_Item Unavailable"}>
            <div className="top">
                <h3>
                    {this.props.title}
                </h3>
                <p>
                    Pledge ${this.props.price} or more
                </p>
            </div>
            <p>
            {this.props.children}
            </p>
            <div className="bottom">
                <p><strong>{this.props.left}</strong> left</p>
                <button className={this.props.available ? "button button_active" : "button button_inactive"} onClick={this.props.available ? this.props.handleClickItem.bind(this): null }>{this.props.available ? "Select Reward" : "Out of stock"}</button>
            </div>
        </div>
    }
}

class BackingSelection extends React.Component {
    render() {
        return <div className={this.props.active ? "Overlay_Selection Active" : "Overlay_Selection"}>
            <div className="Backing_Selection">
                <div className="top">
                    <h2>Back this project</h2>
                    <div className="cross" onClick={this.props.handleClickCross.bind(this)}>
                    </div>
                </div>
                <p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
                <div className="Backing_Selection_Items">
                    <BackingSelectionItem title={"Pledge with no reward"} 
                    price={0} 
                    left={this.props.products.left[1]}
                    available = {true} 
                    selected={this.props.products.selectedPledge[3]}
                    handleClickRadio={this.props.handleClickRadio.bind(this)}
                    handleClickContinue={this.props.handleClickContinue.bind(this)}
                    handleInputChange = {this.props.handleInputChange.bind(this)}
                    enteredAmount = {this.props.enteredAmount}
                    number={3}>
                        Choose to support us without a reward if you simply believe in our project. As a backer,
                        you will be signed up to receive product updates via email.
                    </BackingSelectionItem>

                    <BackingSelectionItem title={this.props.products.titles[0]} 
                    price={this.props.products.prices[0]} 
                    left={this.props.products.left[0]}
                    available = {this.props.products.available[0]}  
                    selected={this.props.products.selectedPledge[0]}
                    handleClickRadio={this.props.handleClickRadio.bind(this)}
                    handleClickContinue={this.props.handleClickContinue.bind(this)}
                    handleInputChange = {this.props.handleInputChange.bind(this)}
                    enteredAmount = {this.props.enteredAmount}
                    number={0}>
                        You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and
                        you’ll be added to a special Backer member list.
                    </BackingSelectionItem>

                    <BackingSelectionItem title={this.props.products.titles[1]} 
                    price={this.props.products.prices[1]} 
                    left={this.props.products.left[1]}
                    available = {this.props.products.available[1]}  
                    selected={this.props.products.selectedPledge[1]}
                    handleClickRadio={this.props.handleClickRadio.bind(this)}
                    handleClickContinue={this.props.handleClickContinue.bind(this)}
                    handleInputChange = {this.props.handleInputChange.bind(this)}
                    enteredAmount = {this.props.enteredAmount}
                    number={1}>
                        You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer
                        member list. Shipping is included.
                    </BackingSelectionItem>

                    <BackingSelectionItem title={this.props.products.titles[2]} 
                    price={this.props.products.prices[2]} 
                    left={this.props.products.left[2]}
                    available = {this.props.products.available[2]}  
                    selected={this.props.products.selectedPledge[2]}
                    handleClickRadio={this.props.handleClickRadio.bind(this)}
                    handleClickContinue={this.props.handleClickContinue.bind(this)}
                    handleInputChange = {this.props.handleInputChange.bind(this)}
                    enteredAmount = {this.props.enteredAmount}
                    number={2}>
                        You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added
                        to our Backer member list. Shipping is included.
                    </BackingSelectionItem>
                </div>
            </div>
        </div>
    }
}

class BackingSelectionItem extends React.Component {
    render() {
        let classList = ""
        if (this.props.available){
            classList = "Backing_Selection_Item"
            if (this.props.selected){
                classList = "Backing_Selection_Item Selected"
            }
        }
        else{
            classList = "Backing_Selection_Item Unavailable"
        }
        return <div className={classList}>
            <div className="top">
                <div className="top_left">
                    <div className="CustomRadioGroup" onClick={this.props.available ? this.props.handleClickRadio.bind(this, this.props.number) : null}>
                        <div className="CustomRadioBtn">
                            <div className={this.props.selected ? "CustomRadioCheck Checked" : "CustomRadioCheck"}>

                            </div>
                        </div>
                        <h3>{this.props.title}</h3>
                    </div>
                    <p>{this.props.price > 0 ? `Pledge $${this.props.price} or more` : ""} </p>
                </div>
                <div className="top_right">
                    <p className="HideForTablet"><strong>{this.props.price > 0 ? `${this.props.left}` : ""}</strong> {this.props.price > 0 ? "left" : ""}</p>
                </div>

            </div>
            <p>
                {this.props.children}
            </p>

            <p className="HideForDesktop left_mobile"><strong>{this.props.price > 0 ? `${this.props.left}` : ""}</strong> {this.props.price > 0 ? "left" : ""}</p>
            <div className="pledge_section">
                <p>Enter your pledge</p>
                <div className="right">
                    <p className="dollar">$</p>
                    <input type="text" onChange={this.props.available ? this.props.handleInputChange.bind(this) : null} />
                    <button className="button" onClick={this.props.available ? this.props.handleClickContinue.bind(this, this.props.number) : null}>Continue</button>
                </div>

            </div>
        </div>
    }
}

class BackingMenu extends React.Component{

    render() {
        return <div className="Backing_Menu">
            <h2>About this project</h2>
            <p>The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen
                to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve
                your posture and make you more comfortable while at work, helping you stay focused on the task at hand.</p>
            <p>
                <br />Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer
                to allow notepads, pens, and USB sticks to be stored under the stand.</p>
            <BackingItem title={this.props.products.titles[0]}
                price={this.props.products.prices[0]}
                left={this.props.products.left[0]}
                available={this.props.products.available[0]}
                handleClickItem={this.props.handleClickItem}>
                You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and
                you’ll be added to a special Backer member list.</BackingItem>
            <BackingItem title={this.props.products.titles[1]}
                price={this.props.products.prices[1]}
                left={this.props.products.left[1]}
                available={this.props.products.available[1]}
                handleClickItem={this.props.handleClickItem}>
                You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer
                member list. Shipping is included.</BackingItem>
            <BackingItem title={this.props.products.titles[2]}
                price={this.props.products.prices[2]}
                left={this.props.products.left[2]}
                available={this.props.products.available[2]}
                handleClickItem={this.props.handleClickItem}>
                You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added
                to our Backer member list. Shipping is included.</BackingItem>
        </div>
    }
}

class Backing extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            backed: props.backed,
            goal: props.goal,
            backers: props.backers,
            days: props.days,
            products: {
                titles: ["Bamboo Stand", "Black Edition Stand", "Mahogany Special Edition", "Pledge with no reward"],
                prices: ["25", "75", "200", "0"],
                left: ["101", "75", "0", ""],
                available: [true, true, false, true],
                selectedPledge: [false, false, false, false],
                enteredAmount: ""
            },
            selectionModeActive: false
                
        }
        this.handleClickBack = this.handleClickBack.bind(this)
        this.handleClickCross = this.handleClickCross.bind(this)
        this.handleClickRadio = this.handleClickRadio.bind(this)
        this.handleClickContinue = this.handleClickContinue.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleClickBack(){

        this.setState({
            selectionModeActive: true
        })
        window.scrollTo(0, 0)
    }

    handleClickCross(){

        this.setState({
            selectionModeActive: false
        })
    }

    handleClickRadio(i){

        if (i==0){

            this.setState(
                this.state.products.selectedPledge = [true, false, false, false]
            )
        }
        if (i==1){

            this.setState(
                this.state.products.selectedPledge = [false, true, false, false]
            )
        }
        if (i==2){

            this.setState(
                this.state.products.selectedPledge = [false, false, true, false]
            )
        }
        if (i==3){

            this.setState(
                this.state.products.selectedPledge = [false, true, false, true]
            )
        }
        
    }

    handleClickContinue(i){
        console.log('continue')
        console.log(this.state.enteredAmount)
        if (isANumber(this.state.enteredAmount)){
            // pledge item
        }
        else{
            //error handleing
        }
    }

    handleInputChange(e){
        this.setState(
            {enteredAmount : e.target.value}
        )
    

    }

    render(){
        return <div className = "Block Backing">
            <BackingSection handleClickBack={this.handleClickBack} ></BackingSection>
            <BackingDetails backed={this.state.backed} backers={this.state.backers} goal={this.state.goal} days={this.state.days} ></BackingDetails>
            <BackingMenu 
                backed={this.state.backed} 
                backers={this.state.backers} 
                goal={this.state.goal} 
                days={this.state.days} 
                products={this.state.products}
                handleClickItem={this.handleClickBack}>

            </BackingMenu>
            <BackingSelection 
                backed={this.state.backed} 
                backers={this.state.backers} 
                goal={this.state.goal} 
                days={this.state.days} 
                products={this.state.products} 
                active={this.state.selectionModeActive}
                handleClickCross={this.handleClickCross}
                handleClickRadio={this.handleClickRadio}
                handleClickContinue={this.handleClickContinue}
                handleInputChange={this.handleInputChange}
                enteredAmount={this.state.enteredAmount}>
            </BackingSelection>
        </div>
    }
}

class Page extends React.Component{
    render(){
        return <div>
            <Header></Header>
            <Backing backed={89000} goal={100000} backers={5007} days={56}></Backing>
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