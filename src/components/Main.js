import PropTypes from 'prop-types'
import React from 'react'
import MessageBox from '../components/MessageBox'
import outside from '../images/riverbank/outside.jpeg'

import amyDance from '../images/gallery/amy-dance.gif'
import danceOne from '../images/gallery/dance-1.gif'
import danceTwo from '../images/gallery/dance-2.gif'
import danceThree from '../images/gallery/dance-3.gif'
import ltrSktrs from '../images/gallery/ltrsktrs.gif'
import amyMtn from '../images/gallery/amy-mtn.gif'
import ab1 from '../images/gallery/1.png'
import ab2 from '../images/gallery/2.png'
import ab3 from '../images/gallery/3.png'
import ab4 from '../images/gallery/4.png'
import ab5 from '../images/gallery/5.png'
import ab6 from '../images/gallery/6.png'
import ab7 from '../images/gallery/7.png'
import ab8 from '../images/gallery/8.png'
import ab9 from '../images/gallery/9.png'
import ab10 from '../images/gallery/10.png'
import ab11 from '../images/gallery/11.png'
import ab12 from '../images/gallery/12.png'
import ab13 from '../images/gallery/13.png'
import ab14 from '../images/gallery/14.png'
import ab15 from '../images/gallery/15.png'
import ab16 from '../images/gallery/16.png'
import ab17 from '../images/gallery/17.png'
import ab18 from '../images/gallery/18.png'
import ab19 from '../images/gallery/19.png'
import ab20 from '../images/gallery/20.png'
import ab21 from '../images/gallery/21.png'
import ab22 from '../images/gallery/22.png'
import ab23 from '../images/gallery/23.png'
import ab24 from '../images/gallery/24.png'
import ab25 from '../images/gallery/25.png'
import ab26 from '../images/gallery/26.png'
import ab27 from '../images/gallery/27.png'
import ab28 from '../images/gallery/28.png'
import ab29 from '../images/gallery/29.png'
import ab30 from '../images/gallery/30.png'
import ab31 from '../images/gallery/31.png'
import ab32 from '../images/gallery/32.png'
import ab33 from '../images/gallery/33.png'
import ab34 from '../images/gallery/34.png'
import ab35 from '../images/gallery/35.png'
import ab36 from '../images/gallery/36.png'
import ab37 from '../images/gallery/37.png'

var listOfImages = shuffle([
  ab1, ab2, ab3, ab4, ab5, ab6, ab7, ab8, ab9, ab10,
  ab11, ab12, ab13, ab14, ab15, ab16, ab17, ab18, ab19, ab20,
  ab21, ab22, ab23, ab24, ab25, ab26, ab27, ab28, ab29, ab30,
  ab31, ab32, ab33, ab34, ab35, ab36, ab37,
  amyDance, danceOne, danceTwo, danceThree,
  ltrSktrs, amyMtn
]);

function shuffle(array) {
  var currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

const articleStyle = {
  display: 'none',
  transition: 'max-height .75s ease,padding .75s ease,opacity .325s ease-in-out',
  transitionDelay: '.25s',
  padding: '.5rem',
  background: '#42C0C0',
  borderRadius: '0',
  minWidth: '90%',
}

const bankAccountDetailsStyle = {
  marginRight: 'auto',
}

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="memberZone"
          className={`${this.props.article === 'memberZone' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={articleStyle}
        >
        <MessageBox
          title="MEMBER ZONE"
          closeIt={() => this.props.onCloseArticle()}
          message={
            <>
              <div className="field-row">
                <label for="text17">Password</label>
                <input id="text17" type="text" />
              </div>
            </>
          }
          header="The A&B Love Zone"
          buttonText="Submit"
          onButtonClick={close}
          hasBackButton={true}
        >
          {close}
        </MessageBox>
        </article>

        <article
          id="where"
          className={`${this.props.article === 'where' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={articleStyle}
        >
          <MessageBox
            closeIt={() => this.props.onCloseArticle()}
            title="where"
            header="Where will it be?"
            hasBackButton={true}
            message={
              <>
                <p>
                  In <strong>Waikanae, New Zealand,</strong> at a beautiful
                  spot nestled in some foresty goodness.
                </p>
                <img src={outside} style={{ maxWidth: '85%', paddingBottom: '1rem' }}/>
                <p>
                  We'll have the fire blazing and lots of space to relax and enjoy the time with each other.
                </p>
                <h4>What to wear</h4>
                <p>
                  Feel free to wear something warm and cozy. A little dressed up is recommended, but no need to bring out the crystal slippers.
                </p>
                <p>
                  There's a no shoe policy in the house, so please avoid wearing pointy heels and scuffy shoes. We'll have Sally checking gumboots at the entrance.
                </p>
              </>
            }
          />
        </article>

        <article
          id="when"
          className={`${this.props.article === 'when' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={articleStyle}
        >
          <MessageBox
            closeIt={() => this.props.onCloseArticle()}
            title="when"
            header="How soon is it?"
            hasBackButton={true}
            message={
              <>
                <h1>Soon!</h1>
                <p>
                  We'll be getting married on <strong>July 23, 2021</strong> in
                  Waikanae, New Zealand (about 60km North of Wellington).
                  It's going to be a small ceremony and a lunch, starting at 12PM (NZT).
                </p>
                <p>
                  For our global friends and family, we'll send out photos and
                  vids of wedding if you pop your details on our
                  <strong>RSVP page</strong>. We love you, and some day soon
                  when the world's more opened up, we'll celebrate with you.
                </p>
                <div className="window">
                <h4 className="title-bar">What time is that for me?</h4>
                  <a href="https://savvytime.com/converter/new-zealand-wellington-to-tx-dallas-nc-greenville-ca-los-angeles-australia-brisbane/jul-23-2021/12pm">
                    <button>Find out here!</button>
                  </a>
                </div>
              </>
            }
          />
        </article>

        <article
          id="gallery"
          className={`bigboy wideboy ${this.props.article === 'gallery' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={articleStyle}
        >
          <MessageBox
            closeIt={() => this.props.onCloseArticle()}
            title="gallery"
            header="Love Gallery"
            hasBackButton={true}
            message=
            {
              <div className="love-gallery">
                {
                  listOfImages.map((image, index) =>
                    <img key={index} src={image} alt="info"></img>
                  )
                }
              </div>
            }
          />
        </article>

        <article
          id="schedule"
          className={`${this.props.article === 'schedule' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={articleStyle}
        >
          <MessageBox
            closeIt={() => this.props.onCloseArticle()}
            title="schedule"
            header="Schedule"
            hasBackButton={true}
            message={
              <>
                <p>
                  The ceremony will begin at <br/><strong>12PM, on July 23rd, New Zealand Time</strong>,<br/> feel free to start arriving from <strong>11:30AM</strong>.
                </p>
                <p>
                  We're still preparing our full schedule. As long as you've RSVPed, we'll email you when it's available.
                </p>
              </>
            }
            buttonText="noice"
          />
        </article>

        <article
          id="contribute"
          className={`${this.props.article === 'contribute' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={articleStyle}
        >
          <MessageBox
            closeIt={() => this.props.onCloseArticle()}
            hasBackButton={true}
            message={
              <>
                <p>
                  As Amy and I have built a life together we already have everything we need. The best gift we could ask for is your loving thoughts and your company at our wedding.
                </p>
                <p>
                  However, should you wish to help us celebrate with a gift, you can use the bank/paypal details below.
                </p>
                <p>
                  All contributions will help offset costs of putting this fun celebration together, and help us hop into our new lives together with some more financial stability.
                </p>

                <div class="info-panes">
                  <div class="window maxi-info-pane">
                    <div class="title-bar">
                      <div class="title-bar-text">NZ Friends</div>
                    </div>
                    <div class="window-body">
                      <span className="bankAccountDetails" style={bankAccountDetailsStyle}>
                        <strong>Bank transfer info:</strong>
                        <p>KiwiBank<br/>Brandon Mikel and Amy O'Connell<br/>38-9018-0298598-00</p>
                      </span>
                    </div>
                  </div>
                  <div class="window mini-info-pane">
                    <div class="title-bar">
                      <div class="title-bar-text">USA Pals</div>
                    </div>
                    <div class="window-body">
                      <div class="buttonBox">
                        <a href="https://paypal.me/BrandonMikel">
                          <button>
                            Paypal
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="window mini-info-pane">
                    <div class="title-bar">
                      <div class="title-bar-text">send us some love</div>
                    </div>
                    <div class="window-body">
                      <div class="buttonBox">
                        <a href="mailto:brandonmikel+amyoconnell@gmail.com">
                          <button>
                            get in touch
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            }
            title="Contribute"
            header="Thanks for supporting us!"
            buttonText="Submit"
          />
        </article>

        <article
          id="bankAccount"
          className={`${this.props.article === 'bankAccount' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={articleStyle}
        >
          <MessageBox
            closeIt={() => this.props.onCloseArticle()}
            hasBackButton={true}
            message={
              <>

              </>
            }
            title="bank"
            header="NZ Bank Account"
          />
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={articleStyle}
        >
          <MessageBox
            closeIt={() => this.props.onCloseArticle()}
            hasBackButton={true}
            message={
              <>
                <iframe className="message-box__form" src="https://docs.google.com/forms/d/e/1FAIpQLSe9RviXz_MLY9d18jcx71rqybIIK3G7QBgXi8h46L3JUxHGLQ/viewform?embedded=true" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
              </>
            }
            title="RSVP"
            header="RSVP"
            buttonText="Submit"
          />
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
