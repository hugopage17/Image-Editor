import React, { Component } from 'react'
import Button from './SideButton'

class Uploader extends Component{
  constructor(props){
   super(props)
   this.state = {
     width:680,
     height:400,
     showImg:'none',
     currentFilter:'',
     greyAmt:100,
     allImgs:[],
     showImgList:'none'
   }
 }

 uploadSource = () => {
   const input = this.refs.imgSelect
   const button = document.getElementById('uploadBut')
   const mainImg = this.refs.mainImg
   button.addEventListener('click', function(){
     input.click()
     input.addEventListener('change', function(e){
       console.log(input.files)
       const reader = new FileReader()
       reader.onload = function(){
         mainImg.src = reader.result
       }
       reader.readAsDataURL(input.files[0])
     }, false)
   })
   this.setState({showImg:'block'})
 }

 setWidth = () => {
   const widthBar = document.getElementById('widthBar')
   this.setState({width:widthBar.value})
 }
 setHeight = () => {
   const heightBar = document.getElementById('heightBar')
   this.setState({height:heightBar.value})
 }

 setGray = () => {
   var grayBar = document.getElementById('grayBar')
   this.setState({greyAmt:grayBar.value})
 }

 getGrey = () => {
   this.setState({currentFilter:'grayscale('+this.state.greyAmt+')'})
   console.log(this.state.currentFilter)
 }

 showImages = () => {
   if(this.state.allImgs.length != 0){
     console.log('CODE')
   } else {
     return(
       <div>
       <label>No Images have been uploaded</label></div>
     )
   }
 }

 render(){
   var imgStyle = {
     filter: this.state.currentFilter
   }

   return(
     <div>
      <div id='header'>
        <input type='file' ref='imgSelect' id='fileUploader' hidden='hidden'/>
        <button id='uploadBut' class='but' onClick={this.uploadSource}>Upload</button>
        <button class='sideButton' onClick={()=>{this.setState({showImgList:'block'}), this.setState({showImg:'none'})}}>All Images</button>
      </div>
      <div id='toolbar' style={{display:this.state.showImg, padding:5}}>
        <label style={{marginRight: 10}}>Width</label>
        <input onChange={this.setWidth} style={{marginRight:20}} type='range' id='widthBar' min='340' max='960' value={this.state.width}/>
        <label style={{marginRight: 10}}>Height</label>
        <input onChange={this.setHeight} style={{marginRight:20}} type='range' id='heightBar' min='200' max='600' value={this.state.height}/>
        <label style={{marginRight: 10}}>Rotate</label>
        <input style={{marginRight:20}} type='range' id='rotateBar' min='0' max='360' value='0'/>
        <button class='sideButton' style={{fontSize: 16, padding:5}}>Reset</button>
      </div>
      <div id='workSpace' style={{display:this.state.showImg}}>
        <div id='sidebar'>
          <Button name='Black & White' filter={() => {this.setState({currentFilter:'grayscale('+this.state.greyAmt+')'})}}/>
          <Button name='Blur' filter={() => {this.setState({currentFilter:'blur(5px)'})}}/>
          <Button name='Brightness' filter={() => {this.setState({currentFilter:'Brightness(2)'})}}/>
        </div>
        <div id='imgSection'>
          <div id='imgCanvas'>
            <img src='' style={imgStyle} ref='mainImg' width={this.state.width} height={this.state.height}/><br/>
          </div>
          <div>
            <label style={{marginRight: 10, color:'white'}}>Amount</label>
            <input onChange={this.setGray} type='range' id='grayBar' min='0' max='100' value={this.state.greyAmt}/>
            <button onClick={this.getGrey}>Apply</button>
          </div>
        </div>
      </div>
      <div style={{display:this.state.showImgList}}>{this.showImages()}</div>
     </div>
   )
 }
}

export default Uploader
