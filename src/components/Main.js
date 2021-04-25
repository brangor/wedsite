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
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
        <MessageBox
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          title="MEMBER ZONE"
          closeIt={() => this.props.onCloseArticle()}
          message={
            <>
              <div class="field-row">
                <label for="text17">Password</label>
                <input id="text17" type="text" />
              </div>
              <button>Enter</button>
            </>
          }

          onButtonClick={close}
        >
          {close}
        </MessageBox>
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <MessageBox
            closeIt={() => this.props.onCloseArticle()}
            title="work"
            message="Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin
                  aliquam facilisis ante interdum congue. Integer mollis, nisl amet
                  convallis, porttitor magna ullamcorper, amet egestas mauris. Ut
                  magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas."
          />
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <MessageBox
            closeIt={() => this.props.onCloseArticle()}
            title="about"
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
            message="Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin
                  aliquam facilisis ante interdum congue. Integer mollis, nisl amet
                  convallis, porttitor magna ullamcorper, amet egestas mauris. Ut
                  magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas."
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
