import React, {
  Component
} from 'react';
// import fire from './config/Fire'
import {
  ajax
} from 'rxjs/ajax';

let active = false;

class Login extends Component {
  constructor(props) {
    super(props);

    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);

    this.state = {
      url: '',
      email: '',
      password: '',
      error: '',
    };

    this.load();
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  phishing(e) {
    const href = 'mailto:phish@phishtank.com';
  }

  turnOn(e) {
    document.querySelector('.btn').classList.add('active');
    document.querySelector('.heading').classList.add('active');
  }

  turnOff(e) {
    document.querySelector('.btn').classList.remove('active');
    document.querySelector('.heading').classList.remove('active');
  }

  toggleAnimation(e) {
    document.querySelector('.btn').classList.remove('animating');
    this.active ? this.turnOn() : this.turnOff();
  }

  clickHandler(e) {
    this.active = !active;
    document.querySelector('.btn').classList.add('animating');

    document
      .querySelector('.btn')
      .addEventListener('animationend', this.toggleAnimation());
  }

  /*btn.addEventListener('animationend', () => {
  btn.classList.remove('animating');
  if (active === true) {
    btn.classList.add('active');
    heading.classList.add('active');
  } else {
    btn.classList.remove('active');
    heading.classList.remove('active');
  }
});


btn.addEventListener('animationend', () => {
  btn.classList.remove('animating');
  active ? turnOn() : turnOff();
});
*/

  checkout(e) {
    e.preventDefault();
    const url = 'http://checkurl.phishtank.com/checkurl/';
    const headers = [{
      'User-Agent': 'phishtank/vpaim'
    }];
    const body = {
      url: this.state.url,
      format: 'json',
      app_key: '0a2554214d2e3a57c61e8efc32a30d71e7d6ec5969470f6834842a68fc87966a'
    };
    const response = `{
    'meta': {
        'timestamp': '2020-05-18T10:25:59+00:00',
        'serverid': '93947aa6',
        'status': 'success',
        'requestid': '172.31.99.148.5ec262b7414126.57771192'
    },
    'results': {
        'url': 'https://hsl-idmp.org/',
        'in_database': false
    }
}`;
    ajax.post(url, body, headers).subscribe((r) => {
      const toggle = document.querySelector('.toggleButton input');
      if (r.results.in_database) {
        toggle.checked = true;
      }
      toggle.checked = false;
      console.log(r);
    });
  }

  login(e) {
    // e.preventDefault();
    // fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    // }).catch((error) => {
    //     //console.log(error);
    //     this.setState({error:error.message})
    //   });
  }

  signup(e) {
    // e.preventDefault();
    // fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    // }).then((u)=>{console.log(u)})
    // .catch((error) => {
    //     //console.log(error);
    //     this.setState({error:error.message})
    //   })
  }

  load() {
    /* eslint-disable define no-undef */
    chrome.windows.getAll({
      populate: true
    }, function (windows) {
      windows.forEach(function (window) {
        window.tabs.forEach(function (tab) {
          //collect all of the urls here, I will just log them instead
          console.log(tab.url);
        });
      });
    });
  }

  render() {
    return ();
  }
}

export default Login;