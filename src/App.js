import React, { Component } from 'react';
import ReactSearchBox from 'react-search-box';
import './App.css';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab);
//var QRCode = require('qrcode.react');
// class FilePicker extends React.Component {
//   constructor (props){
//     super(props);
//     this.state = {
//       file: null
//     }
//   }
//   pickFile (e) {
//     this.setState({file: e.target.files[0]})
//   }
//   render() {
//     return (
//       <div>
//         <input
//           type="file"
//           onChange={(e) => this.pickFile(e)}
//         />
//         {
//           this.state.file ?
//           <div>
//             <img
//               width="300"
//               height="300"
//               src={URL.createObjectURL(this.state.file)} />
//           </div> :
//           null
//         }
//       </div>
//     )
//   }
// }

// React.render(
//   <QRCode value="http://facebook.github.io/react/" />,
  
// );

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: 
      ["500px", "accessible-icon", "accusoft", "acquisitions-incorporated", "adn", "adobe", "adversal", 
      "affiliatetheme", "algolia", "alipay", "amazon", "amazon-pay", "amilia", "android", "angellist", 
      "angrycreative", "angular", "app-store", "app-store-ios", "apper", "apple", "apple-pay", "artstation", 
      "asymmetrik", "atlassian", "audible", "autoprefixer", "avianex", "aviato", "aws", "bandcamp", "behance", 
      "behance-square", "bimobject", "bitbucket", "bitcoin", "bity", "black-tie", "blackberry", "blogger", "blogger-b", 
      "bluetooth", "bluetooth-b", "btc", "buromobelexperte", "buysellads", "canadian-maple-leaf", "cc-amazon-pay", "cc-amex", 
      "cc-apple-pay", "cc-diners-club", "cc-discover", "cc-jcb", "cc-mastercard", "cc-paypal", "cc-stripe", "cc-visa", 
      "centercode", "centos", "chrome", "cloudscale", "cloudsmith", "cloudversify", "codepen", "codiepie", "confluence", 
      "connectdevelop", "contao", "cpanel", "creative-commons", "creative-commons-by", "creative-commons-nc", "creative-commons-nc-eu", 
      "creative-commons-nc-jp", "creative-commons-nd", "creative-commons-pd", "creative-commons-pd-alt", "creative-commons-remix", 
      "creative-commons-sa", "creative-commons-sampling", "creative-commons-sampling-plus", "creative-commons-share", "creative-commons-zero", 
      "critical-role", "css3", "css3-alt", "cuttlefish", "d-and-d", "d-and-d-beyond", "dashcube", "delicious", "deploydog", "deskpro", "dev", 
      "deviantart", "dhl", "diaspora", "digg", "digital-ocean", "discord"]
       
    };
    //this.addItem = this.addItem.bind(this);
    //this.removeItem = this.removeItem.bind(this);
  }
 

  render() {
    return (
      <div className="content">
        <div className="container">
          <section className="section">
						<List items={this.state.list}/>
          </section>
          <hr />  
        </div>
      </div>
    );
  }
}

class List extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			filtered: []
		};
		this.handleChange = this.handleChange.bind(this);
	}
	
	componentDidMount() {
    this.setState({
      filtered: this.props.items
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      filtered: nextProps.items
    });
  }
	
	handleChange(e) {
		// Variable to hold the original version of the list
    let currentList = [];
		// Variable to hold the filtered list before putting into state
    let newList = [];
		
		// If the search bar isn't empty
    if (e.target.value !== "") {
			// Assign the original list to currentList
      currentList = this.props.items;
			
			// Use .filter() to determine which items should be displayed
			// based on the search terms
      newList = currentList.filter(item => {
				// change current item to lowercase
        const lc = item.toLowerCase();
				// change search term to lowercase
        const filter = e.target.value.toLowerCase();
				// check to see if the current list item includes the search term
				// If it does, it will be added to newList. Using lowercase eliminates
				// issues with capitalization in search terms and search content
        return lc.includes(filter);
      });
    } else {
			// If the search bar is empty, set newList to original task list
      newList = this.props.items;
    }
		// Set the filtered state based on what our rules added to newList
    this.setState({
      filtered: newList
    });
  }
	
	render() {
		return (
			<div>
      <div className='mainContainer'>
				<input type="text" className="searchbox" onChange={this.handleChange} placeholder="Search..." />
					<div className='container'>
						{this.state.filtered.map(item => (
							<div key={item} className="box">
                <div className='icon'>
                  
                  <figure>
                    <div className='fonticon'>
                      <FontAwesomeIcon icon={['fab', item] } size='4x' />
                    </div>  
                     <figcaption>{item}</figcaption> 
                  </figure>
                  
								</div>
                <span
									className="delete"
									//onClick={() => this.props.delete(item)}
									/>
							</div>
						))}
					</div>
				</div>
      </div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;