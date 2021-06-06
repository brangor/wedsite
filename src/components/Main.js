import PropTypes from 'prop-types'
import React from 'react'
import MessageBox from '../components/MessageBox'
import outside from '../images/riverbank/outside.jpeg';

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
                  There are lots of nice spots to stay in Wellington if you're coming
                  a long distance to see us. There's even some decent
                  campgrounds if you're feeling like you can handle a wet
                  Wellington winter <strong>(please don't do this)</strong>.
                </p>
                <p>
                  We'll have the fire blazing and lots of space to relax and enjoy the time with each other.
                </p>
                <h4>What to wear</h4>
                <p>
                  Feel free to wear something warm and cozy. A little dressed up is recommended, but no need to bring out the crystal slippers.
                </p>
                <div className="window">
                <h4 className="title-bar">Schedule</h4>
                  <p>
                    We're still preparing our schedule. As long as you've RSVPed, we'll email you when it's available.
                  </p>
                </div>
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
                  It's going to be a small ceremony and a lunch, starting around 11:30AM (NZT) and going until about 3PM.
                </p>
                <p>
                  For our global friends and family, we'll be livestreaming the
                  wedding and brainstorming ways to keep it exciting and fun for
                  those that we can't have physically present. We love you, and
                  some day soon when the world's more opened up, we'll celebrate
                  with you.
                </p>
              </>
            }
          />
        </article>

        {/* <article
          id="gallery"
          className={`${this.props.article === 'gallery' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={articleStyle}
        >
          <MessageBox
            closeIt={() => this.props.onCloseArticle()}
            title="gallery"
            header="Love Gallery"
            message=
            {<div className="loveGallery" style={galleryStyle}>
              <image src={require('../images/loveGallery/5.png')}></image>
            </div>}
            buttonText="noice"
          />
        </article> */}
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
                  As Amy and I have built a life together we already have everything we need. The best gift we could ask for is your company at our wedding.
                </p>
                <p>
                  However, should you wish to help us celebrate with a gift, you can use the bank/paypal details below. There will also be a Wishing Well available on the day.
                </p>

                <div class="buttonBox">
                  <div class="window">
                    <div class="title-bar">
                      <div class="title-bar-text">NZ Friends</div>
                    </div>
                    <div class="window-body">
                      <span className="bankAccountDetails" style={bankAccountDetailsStyle}>
                        <p>Brandon Mikel and Amy O'Connell<br/>38-9018-0298598-00</p>
                      </span>
                    </div>
                  </div>
                  <div class="window">
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
