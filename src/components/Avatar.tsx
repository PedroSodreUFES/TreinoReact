import { ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css'

interface Avatar extends ImgHTMLAttributes<HTMLImageElement>{
    hasBorder?:boolean;
    //src: string; já existe em img com HTMLImageElement
    //alt?:string; já existe em img "                  "
}

export function Avatar({hasBorder, ...rest}:Avatar){
    return (
    <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} {...rest} />
    );
};