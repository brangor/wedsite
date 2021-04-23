import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
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

          title="Intro"
          message="Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin
                aliquam facilisis ante interdum congue. Integer mollis, nisl amet
                convallis, porttitor magna ullamcorper, amet egestas mauris. Ut
                magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas."
          buttonText="noice"
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

            title="Intro"
            message="Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin
                  aliquam facilisis ante interdum congue. Integer mollis, nisl amet
                  convallis, porttitor magna ullamcorper, amet egestas mauris. Ut
                  magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas."
            buttonText="noice"
            onButtonClick={close}
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

            title="Intro"
            message="Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin
                  aliquam facilisis ante interdum congue. Integer mollis, nisl amet
                  convallis, porttitor magna ullamcorper, amet egestas mauris. Ut
                  magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas."
            buttonText="noice"
            onButtonClick={close}
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
            title="Intro"
            message="Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin
                  aliquam facilisis ante interdum congue. Integer mollis, nisl amet
                  convallis, porttitor magna ullamcorper, amet egestas mauris. Ut
                  magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas."
            buttonText="noice"
            onButtonClick={close}
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
