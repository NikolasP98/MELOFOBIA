import React from "react";
import "./article-style.scss";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import firebase from "../../firebase";

class Article extends React.Component {

  constructor(props, context) {
    super(props, context);
    this._isMounted = false;
    this.postRef = firebase.firestore().collection("post").doc("WLVn9PD56M6egRW8Sn8A")
    this.userRef = firebase.firestore().collection("user");
    this.state = {
      isLoading: true,
      postData: [],
      userData: []
    }
  }

  componentDidMount() {
    this._isMounted = true;
    this.postRef.get().then(postDoc => {
      this.userRef.doc(postDoc.data().authorId).get().then(userDoc => {
        this.setState({
          postDate: postDoc.data().timestamp.toDate().toLocaleString(),
          postData: postDoc.data(),
          userData: userDoc.data()
        })
      })
    })
    if (this._isMounted) {
      this.isLoading = false;
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
        <div className="articles">
          <div className="back-btn">
            <ArrowBackIcon style={{ fontSize: 32 }} />
            Back
          </div>
          <div className="article-first">ARTICLE</div>
          <div className="main">
            <div className="side-bar">
              <div className="side-bar-head">
                <div className="article-link-main">
                  <div className="img-number">
                    <p>2/3</p>
                  </div>
                  <div className="article-link-picture">
                    <div className="zoom-out">
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          viewBox="0 0 24 24"
                      >
                        <path d="M15 3l2.3 2.3-2.89 2.87 1.42 1.42L18.7 6.7 21 9V3zM3 9l2.3-2.3 2.87 2.89 1.42-1.42L6.7 5.3 9 3H3zm6 12l-2.3-2.3 2.89-2.87-1.42-1.42L5.3 17.3 3 15v6zm12-6l-2.3 2.3-2.87-2.89-1.42 1.42 2.89 2.87L15 21h6z" />
                      </svg>
                    </div>
                  </div>
                  {/*
                <div className="article-link-picture">
                    <div className="zoom-out">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path d="M15 3l2.3 2.3-2.89 2.87 1.42 1.42L18.7 6.7 21 9V3zM3 9l2.3-2.3 2.87 2.89 1.42-1.42L6.7 5.3 9 3H3zm6 12l-2.3-2.3 2.89-2.87-1.42-1.42L5.3 17.3 3 15v6zm12-6l-2.3 2.3-2.87-2.89-1.42 1.42 2.89 2.87L15 21h6z" /></svg>
                    </div>
                </div>
                <div className="article-link-picture">
                    <div className="zoom-out">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path d="M15 3l2.3 2.3-2.89 2.87 1.42 1.42L18.7 6.7 21 9V3zM3 9l2.3-2.3 2.87 2.89 1.42-1.42L6.7 5.3 9 3H3zm6 12l-2.3-2.3 2.89-2.87-1.42-1.42L5.3 17.3 3 15v6zm12-6l-2.3 2.3-2.87-2.89-1.42 1.42 2.89 2.87L15 21h6z" /></svg>
                    </div>
                </div>
             */}
                </div>
                <div className="side-bar-slider">
                  <div className="left-arrow">
                    <ArrowBackIosIcon style={{ fontSize: 16 }} />
                  </div>
                  <div>
                    <div className="img-sm"></div>
                    <div className="img-sm active"></div>
                    <div className="img-sm"></div>
                  </div>
                  <div className="right-arrow">
                    <ArrowForwardIosIcon style={{ fontSize: 16 }} />
                  </div>
                </div>
              </div>
            </div>
            <div className="article-right">
              <div className="article-main">
                <div className="article-main-title">
                  <h1>{this.state.postData.title}</h1>
                  <div>
                    <p>autor: {this.state.userData.username}</p>
                    <p>{this.state.postDate}</p>
                  </div>
                </div>
                <div>
                  <button className="btn btn-play-list">
                    <PlayArrowIcon />
                    Listen to Playlist
                  </button>
                </div>
                <div className="article-main-main">
                  <div className="article-link">
                    <div className="article-link-picture">
                      <div className="zoom-out">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                        >
                          <path d="M15 3l2.3 2.3-2.89 2.87 1.42 1.42L18.7 6.7 21 9V3zM3 9l2.3-2.3 2.87 2.89 1.42-1.42L6.7 5.3 9 3H3zm6 12l-2.3-2.3 2.89-2.87-1.42-1.42L5.3 17.3 3 15v6zm12-6l-2.3 2.3-2.87-2.89-1.42 1.42 2.89 2.87L15 21h6z" />
                        </svg>
                      </div>
                    </div>
                    <div className="article-link-content">
                      <p>
                        {this.state.postData.content}
                      </p>
                    </div>
                  </div>

                  <div className="article-like">
                    <p>
                  <span>
                    <FavoriteIcon />
                  </span>{" "}
                      Like{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="discussion-playlist">
                <div className="discussion">
                  <p>
                    DISCUSSION{" "}
                    <span>
                  <ChevronRightIcon style={{ fontSize: 32 }} />
                </span>
                  </p>
                  <div className="discussion-desktop"></div>
                </div>
                <div className="playlist">PLAYLIST</div>
              </div>
            </div>
          </div>
        </div>
    )
  }

}

/*function Article() {

  const [this.state.postData, setPost] = React.useState([]);
  React.useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore()
      const post = await db.collection("post").doc("WLVn9PD56M6egRW8Sn8A").get()
      console.log(post.postData())
      setPost(post.docs.map(doc => doc.postData()));
    };
    fetchData();
  });

  return (

  );
}*/

export default Article;
