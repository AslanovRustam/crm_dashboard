import type { FC } from 'react';

interface TextTitleProps {text:string}

const TextTitle: FC<TextTitleProps> = ({text}) => {
    return (<p>{text}</p>);
}

export default TextTitle;
