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
              <div class="field-row">
                <label for="text17">Password</label>
                <input id="text17" type="text" />
              </div>
            </>
          }
          header="The A&B Love Zone"
          buttonText="Submit"
          onButtonClick={close}
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
            message={
              <>
                <p>
                  In <strong>Waikanae, New Zealand,</strong> at a beautiful
                  spot nestled in some foresty goodness.
                </p>
                <img src={outside} style={{ maxWidth: '100%', marginBottom: '0.5rem' }}/>
                <p>
                  There are lots of nice spots to stay nearby if you're coming
                  a long distance to see us. There's even some decent
                  campgrounds if you're feeling like you can handle a wet
                  Wellington winter <strong>(please don't do this)</strong>.
                </p>
                <p>
                  We'll have the fire blazing and lots of space to relax and enjoy the time with each other.
                </p>
                <div className="buttonBox">
                  <button>Remote Viewing</button>
                  <button>Recommended accomodations</button>
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
            message={
              <>
                <h1>Soon!</h1>
                <p>
                  We'll be getting married on <strong>July 23, 2021</strong> in
                  Waikanae, New Zealand (about 60km North of Wellington).
                  It's going to be a small ceremony, with grub and booze aplenty.
                </p>
                <p>
                  For our global friends and family, we'll be livestreaming the
                  wedding and brainstorming ways to keep it exciting and fun for
                  those that we can't have physically present. We love you, and
                  some day soon when the world's more opened up, we'll celebrate
                  with you.
                </p>
                <div class="buttonBox">
                  <button>Remote Viewing</button>
                  <button>The Venue</button>
                </div>
              </>
            }
          />
        </article>

        <article
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
            message="Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin
                  aliquam facilisis ante interdum congue. Integer mollis, nisl amet
                  convallis, porttitor magna ullamcorper, amet egestas mauris. Ut
                  magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas."
            buttonText="noice"
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
            title="RSVP"
            header="RSVP"
            buttonText="Submit"
            message={
              <div>
                <div className="field-row-stacked" style={{'width': '300px'}}>
                  <label for="textName">Name:</label>
                  <input id="textName" type="text" />
                </div>
                <fieldset>
                  <div className="field-row">I will be attending</div>
                  <div className="field-row">
                    <input id="radio10" type="radio" name="fieldset-example" />
                    <label for="radio10">Online</label>
                  </div>
                  <div className="field-row">
                    <input id="radio11" type="radio" name="fieldset-example" />
                    <label for="radio11">In person</label>
                  </div>
                  <div className="field-row">
                    <input id="radio12" type="radio" name="fieldset-example" />
                    <label for="radio12">I won't! Just saying hey!</label>
                  </div>
                </fieldset>
                <div className="field-row-stacked" style={{'width': '300px'}}>
                  <label for="textMessage">Message:</label>
                  <textarea id="textMessage" rows="8"></textarea>
                </div>
              </div>
            }
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
