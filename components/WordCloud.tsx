
"use client"
import React from 'react'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/router'
import D3WordCloud from "react-d3-cloud"
import { text } from 'stream/consumers'
type Props = {
  // formattedTopics:{text:string; value:number}[];
};
const data = [
{
  text: "Hey",
  value: 3
}
];
const fontSizeMapper = (word: { value: number }) =>{
  return Math.log2(word.value)*5+10;
}

const WordCloud = (props: Props) => {
  const theme = useTheme();
  const router  = useRouter();

  return (
    <>
      <D3WordCloud
        data={data}
        height={550}
        font="Times"
        fontSize={fontSizeMapper}
        rotate={0}
        padding={10}
        fill={theme.theme === "dark" ? "white" : "black"}
        // onWordClick={(e, d) => {
        //   router.push("/quiz?topic=" + d.text);
        // }}
      />
    </>
  );
}

export default WordCloud