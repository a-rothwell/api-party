import React, { Component } from 'react'
import './WorldViewObject.css'
import Secret from './Secrets'
class WorldViewObject extends Component {
  state = {
    url: '',
    title:''
  }
  constructor(props) {
    super(props)

    this.fetchUserData()
  }

    componentWillReceiveProps(nextProps) {
    const locationChanged = nextProps.location !== this.props.location
    if (locationChanged) {
      this.fetchUserData(nextProps)
    }
  }

  fetchUserData = () => {
    fetch(`https://webcamstravel.p.mashape.com/webcams/list/country=${this.props.match.params.code}/orderby=popularity/limit=1?show=webcams:timelapse`,
        { 
   method: 'GET', 
   headers: {
     'X-Mashape-Key': Secret.apiKey
   }
        } 
    )
      .then(response => response.json())
      //.then(code => this.setState({ code }))
      .then(res => this.setState({url:res.result.webcams[0].timelapse.month.embed,
        title:res.result.webcams[0].title}
                )
      )
      .catch(err=>console.log(alert('Not Valid ISO code')))
  }

  render() {
    const { url ,title } = this.state
    return (
      <div className="worldViewObject">
        <div>{title}</div>
        <iframe src={url}></iframe>
      </div>
    )
  }
}
export default WorldViewObject