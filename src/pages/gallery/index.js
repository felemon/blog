import React, { Component } from 'react';
import Upload from '../../components/Upload';
import './index.css';

class Gallery extends Component {
    constructor(props){
        super( props );
        this.state = {
            preview: ''
        }
        this.triggerUpload = this.triggerUpload.bind(this);
        this.upload = this.upload.bind(this);
    }

	render() {
		return (
            <div className="P-gallery">   
                <div>
                    <button className="up-btn" onClick={this.triggerUpload}>上传图片</button>
                    <input className="up-file" ref="upload" type="file" accept="image/*" multiple onChange={this.upload}/>
                    <span>拖动图片到页面上，就可以上传喽~</span>
                </div>
                <ul className="gl-list">
                    <li className="gl-item">
                        <img src="" alt=""/>
                        <span>新建相册</span>
                    </li>
                    <li className="gl-item">
                        <img src="" alt=""/>
                        <span>艾伦</span>
                    </li>
                </ul>
                <img className="preview" src={this.state.preview} alt=""/>
            </div>
		);
	}

    triggerUpload() {
        return new Upload().getImages();
        this.refs.upload.click();

    }

    upload(eve) {
        var me = this;
        var files = eve.target.files;
        for( let i = 0, len = files.length; i < len; i++ ){
            var reader = new FileReader();
            reader.onload = function(rdeve){
                var res = rdeve.target.result;
                new Upload().uploadImage( {
                    name: files[i].name,
                    data: res
                } );
                me.setState({
                    preview: res
                });
            };
            reader.readAsDataURL(files[i]);
            console.log( files[i] );
        }
    }
}

export default Gallery;
