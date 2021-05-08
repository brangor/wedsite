import PropTypes from 'prop-types'
import React from 'react'
import MessageBox from '../components/MessageBox'
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
          style={{ display: 'none' }}
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
          style={{ display: 'none' }}
        >
          <MessageBox
            closeIt={() => this.props.onCloseArticle()}
            title="where"
            header="Where will it be?"
            message="Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin
                  aliquam facilisis ante interdum congue. Integer mollis, nisl amet
                  convallis, porttitor magna ullamcorper, amet egestas mauris. Ut
                  magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas."
          />
        </article>

        <article
          id="when"
          className={`${this.props.article === 'when' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <MessageBox
            closeIt={() => this.props.onCloseArticle()}
            title="when"
            header="When is it?"
            message={
              <h1>Soon!</h1>
            }
            buttonText="noice"
          />
        </article>

        <article
          id="gallery"
          className={`${this.props.article === 'gallery' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
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
          style={{ display: 'none' }}
        >
          <MessageBox
            closeIt={() => this.props.onCloseArticle()}
            title="contact"
            header="Get in touch"
            message={
              <>
                <div className="field-row-stacked" style={{'width': '300px'}}>
                  <label for="textName">Name:</label>
                  <input id="textName" type="text" />
                </div>
                <div className="field-row-stacked" style={{'width': '300px'}}>
                  <label for="textMessage">Message:</label>
                  <textarea id="textMessage" rows="8"></textarea>
                </div>
              </>
            }
            buttonText="submit"
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
