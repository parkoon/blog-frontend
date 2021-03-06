import React from 'react'
import styles from './PostList.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

const PostList = props => {

    return (
        <div className={cx('post-list')}>
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
        </div>
    )
}

const PostItem = props => {

    return (
        <div className={cx('post-item')}>

            <h2><a>타이틀</a></h2>
            <div className={cx('date')}>2019-09-17</div>
            <p>내용</p>
            <div className={cx('tags')}>
                <a>#태그</a>
                <a>#태그</a>
                <a>#태그</a>
                <a>#태그</a>
            </div>
        </div>
    )
}

export default PostList