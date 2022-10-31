import React from 'react';
import classes from "./Post.module.css";

const Post = () => {
    return (

                <div className={classes.item}>
                    <img src="https://png2.cleanpng.com/sh/8f7ab2980f5cfef5754f9db18e51be9a/L0KzQYm3VsI0N6d1ipH0aYP2gLBuTfdmbZwyhNHwbz32hLFqi71xcJD5h9l7YYDriX68gsJnOGE2UKJsYkW6Q3A6UccxOWQATaMAMkm7QIeBV8IxPWM2RuJ3Zx==/kisspng-geek-logo-stock-photography-5b2f00180cb573.3170139515298068720521.png" alt="avatar-image"/>
                    Post One
                    <div>
                        <span>like</span>
                    </div>
                </div>
    );
};

export default Post;