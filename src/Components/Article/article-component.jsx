import React from 'react'
import './article-style.scss';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

function Article() {
    return (
        <div className="articles">
            <div className="article-first">ARTICLE</div>
            <div className="article-main">
                <div className="article-main-title">
                    <h1>ARTICLE TITLE</h1>
                    <p>autor: Nombre Autor</p>
                    <p>published time and date</p>
                </div>
                <div className="article-main-main">
                    <div className="article-link">
                        <div className="article-link-picture">
                            <div className="zoom-out">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path d="M15 3l2.3 2.3-2.89 2.87 1.42 1.42L18.7 6.7 21 9V3zM3 9l2.3-2.3 2.87 2.89 1.42-1.42L6.7 5.3 9 3H3zm6 12l-2.3-2.3 2.89-2.87-1.42-1.42L5.3 17.3 3 15v6zm12-6l-2.3 2.3-2.87-2.89-1.42 1.42 2.89 2.87L15 21h6z" /></svg>
                            </div>
                        </div>
                        <div className="article-link-content">
                            <p>
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit.
                                Suspendisse nibh nulla, dapibus
                                sit amet felis et, posuere
                                tincidunt nisl. In hac habitasse
                                platea dictumst. Pellentesque
                                habitant morbi tristique senectus
                                et netus et malesuada fames ac
                                turpis egestas. Nullam eget
                                ultrices purus, id porttitor
                                odio. Proin sed ligula sed tortor
                                ornare auctor. Fusce ut ipsum
                                quis sapien faucibus sodales eget
                                et dolor. Nam facilisis risus et
                                sem vestibulum hendrerit. Nullam
                                facilisis at dolor in faucibus.
                                Sed condimentum gravida ligula,
                                id accumsan nulla iaculis vitae.
                                Ut non dictum erat. Praesent
                                dignissim varius turpis id
                                venenatis. Aenean vestibulum
                                auctor purus auctor tempor.
                                Praesent cursus nunc non diam
                                varius, vel suscipit dui ornare.
                                Donec commodo nisl nec eleifend
                                bibendum. Vivamus a tellus ac est
                                egestas facilisis nec eget nunc.
                                Morbi eget imperdiet metus.
                            </p>
                        </div>
                    </div>
                    <div className="article-link">
                        <div className="article-link-picture">
                            <div className="zoom-out">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path d="M15 3l2.3 2.3-2.89 2.87 1.42 1.42L18.7 6.7 21 9V3zM3 9l2.3-2.3 2.87 2.89 1.42-1.42L6.7 5.3 9 3H3zm6 12l-2.3-2.3 2.89-2.87-1.42-1.42L5.3 17.3 3 15v6zm12-6l-2.3 2.3-2.87-2.89-1.42 1.42 2.89 2.87L15 21h6z" /></svg>
                            </div>
                        </div>
                        <div className="article-link-content">
                            <p>
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit.
                                Suspendisse nibh nulla, dapibus
                                sit amet felis et, posuere
                                tincidunt nisl. In hac habitasse
                                platea dictumst. Pellentesque
                                habitant morbi tristique senectus
                                et netus et malesuada fames ac
                                turpis egestas. Nullam eget
                                ultrices purus, id porttitor
                                odio. Proin sed ligula sed tortor
                                ornare auctor. Fusce ut ipsum
                                quis sapien faucibus sodales eget
                                et dolor. Nam facilisis risus et
                                sem vestibulum hendrerit. Nullam
                                facilisis at dolor in faucibus.
                                Sed condimentum gravida ligula,
                                id accumsan nulla iaculis vitae.
                                Ut non dictum erat. Praesent
                                dignissim varius turpis id
                                venenatis. Aenean vestibulum
                                auctor purus auctor tempor.
                                Praesent cursus nunc non diam
                                varius, vel suscipit dui ornare.
                                Donec commodo nisl nec eleifend
                                bibendum. Vivamus a tellus ac est
                                egestas facilisis nec eget nunc.
                                Morbi eget imperdiet metus.
                            </p>
                        </div>
                    </div>
                    <div className="article-link">
                        <div className="article-link-picture">
                            <div className="zoom-out">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path d="M15 3l2.3 2.3-2.89 2.87 1.42 1.42L18.7 6.7 21 9V3zM3 9l2.3-2.3 2.87 2.89 1.42-1.42L6.7 5.3 9 3H3zm6 12l-2.3-2.3 2.89-2.87-1.42-1.42L5.3 17.3 3 15v6zm12-6l-2.3 2.3-2.87-2.89-1.42 1.42 2.89 2.87L15 21h6z" /></svg>
                            </div>
                        </div>
                        <div className="article-link-content">
                            <p>
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit.
                                Suspendisse nibh nulla, dapibus
                                sit amet felis et, posuere
                                tincidunt nisl. In hac habitasse
                                platea dictumst. Pellentesque
                                habitant morbi tristique senectus
                                et netus et malesuada fames ac
                                turpis egestas. Nullam eget
                                ultrices purus, id porttitor
                                odio. Proin sed ligula sed tortor
                                ornare auctor. Fusce ut ipsum
                                quis sapien faucibus sodales eget
                                et dolor. Nam facilisis risus et
                                sem vestibulum hendrerit. Nullam
                                facilisis at dolor in faucibus.
                                Sed condimentum gravida ligula,
                                id accumsan nulla iaculis vitae.
                                Ut non dictum erat. Praesent
                                dignissim varius turpis id
                                venenatis. Aenean vestibulum
                                auctor purus auctor tempor.
                                Praesent cursus nunc non diam
                                varius, vel suscipit dui ornare.
                                Donec commodo nisl nec eleifend
                                bibendum. Vivamus a tellus ac est
                                egestas facilisis nec eget nunc.
                                Morbi eget imperdiet metus.
                            </p>
                        </div>
                    </div>
                    
                    <div className="article-like">
                        <p><span><FavoriteIcon /></span> Like </p>
                    </div>
                </div>
            </div>
            <div className="discussion">
                <p>DISCUSSION <span><ChevronRightIcon style={{ fontSize: 32 }}/></span></p>
            </div>
            <div className="playlist">
                PLAYLIST
            </div>
        </div>
    )
}

export default Article

