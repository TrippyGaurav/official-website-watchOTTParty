"use client";

import React from "react";
import styles from "@/app/styles/blog.module.scss";
import Navbar from "@/app/components/Navbar";

const data = [
  {
    id: 1,
    heading: "",
    desc: "Planning to watch a movie with your family and friends, but somehow you can not make it due to some reasons. Worry not! You can still stream your favorite shows with them. As there are multiple Ott platforms that provide unlimited movies and shows. Scener and Teleparty extension are great options where you can plan your movie date with your special one. They both have great features and offer a vast variety of the latest TV shows, series, and movies. ",
  },
  {
    id: 2,
    heading: "",
    desc: "It has a partnership with HBO, and it has HBO Now and HBO Max, which is the latest version with all the exclusive stuff. Another one is the Teleparty Watch Party, which is easy to set up and has a lot of new shows, series, and movies. So, which one would you prefer? Don’t worry, as we will help you decide. Let’s start the streaming game.",
  },
  {
    id: 3,
    heading: "How to start a watch party?",
    desc: "To use these two extensions, you need to download and install Google Chrome on your desktop. Both the Teleparty Watch Party and Scener Chrome extension work on browsers. They both have lots of TV shows, movies, and series. After adding it, you can watch movies together online.",
  },
  {
    id: 4,
    heading: "",
    desc: "But remember that while streaming your favorite shows, you need to have a valid account. As it is not possible to watch HBO Max without having an HBO Max account.",
  },
  {
    id: 5,
    heading: "How do Scener and Teleparty watch party work?",
    desc: "The processes of both extensions are quite different, but they are not difficult to understand. Before playing, you must ensure that everyone else has Google Chrome installed and a plan to watch Teleparty Watch Party and Scener Party. You and your friends also need to log in at the same time. ",
  },
  {
    id: 6,
    heading: "",
    desc: "Before starting a watch party, you have to share the URL link with your family and friends with whom you want to watch the party. After accepting the invitation, they can join you. You can also create your own watching room and chat with them while streaming your favorite show. The video will sync automatically, and everyone can pause and play the video. But there is a twist: in Scener, the person who will host the party has all the control, but in the Teleparty watch party, not only does the person have all the control, but everyone can.",
  },
  {
    id: 7,
    heading: "",
    desc: "Now let’s break down the comparison between the Teleparty Watch Party and Scener in more detail.",
  },
  {
    id: 8,
    heading: "",
    desc: "Teleparty Watch Party is a relatively straightforward tool for hosting movie sessions with your loved ones. To get started, everyone can participate, it’s just that they need to install a Chrome extension. Once the extension is installed, you can initiate a watch party in just a few minutes. When the movie or show begins, you can chat, audio, and video with them. You can join as many as you can, there is no limit to joining a party. You can even share your reactions in emoji form while watching a movie",
  },
  {
    id: 9,
    heading: "",
    desc: "On the other hand, there is Scener, which has a partnership with HBO and offers a slightly more intricate setup. If you are wondering how to use Scener extension, Then, similar to the Teleparty Watch Party, everyone needs to install the Scener Chrome extension. The key difference is that only 50 people can join a watching room, whereas in a Teleparty Watch Party, unlimited people can join. You can invite your family and friends to join a party by sending them a URL link that is generated by Scener. After that, you can stream your movie night and watch Netflix together. ",
  },
  {
    id: 10,
    heading: "",
    desc: "Once everyone has joined the room with the extension installed, they can choose to use their microphones and cameras for voice and video communication or simple text in the chat. In Scener, there is a feature where only one user can be in control at a time, indicated by a small remote icon in the chat window. The person who is hosting has all the control, and only he/she can browse services like Netflix, HBO, or Disney Plus. When playback begins, it automatically syncs up for everyone, but there is a twist: each participant needs to manually press play after the host initiates playback. ",
  },
  {
    id: 11,
    heading: "",
    desc: "If you are thinking, about is Scener safe? The scener is user-friendly and not overly complicated to figure out. But one notable usability difference is that the Teleparty Watch Party allows you to go full screen without any issues. However, in Scener, to achieve full-screen mode, you must use the control+up shortcut (on Mac) or alt+tab (on Windows) to manually move the chat windows into the fullscreen playback window. Without doing this, you will find yourself watching the video with no chat to read. You can also install the Scener app on your mobile phone and have your small Scener TV in your comfort zone.  ",
  },
  {
    id: 12,
    heading: "",
    desc: "Teleparty Watch Party is more comfortable to use as there are no complications with using the extension. The video quality is so good that it will feel like you are watching a movie in a theater, not on your desktop. It also has a customization feature where anyone can host the party and everyone has control to pause and play the video. If you want to have a conversation face-to-face while watching a show, both extensions are good to go.",
  },
  {
    id: 13,
    heading: "",
    desc: "In terms of video quality, both Teleparty Watch Party and Sener do a pretty good job. Unlike some other extensions, where you can only watch a movie of someone else’s choice, with these two, everyone can watch their own stream. The cool thing is that it also works in the background to make sure that everyone stays in sync. The only thing is that because of the chat bar on the side of the screen, the video can’t use the whole screen, and that’s not a big problem at all.",
  },
  {
    id: 14,
    heading: "",
    desc: "At last, Teleparty Watch Party works with Netflix, Amazon Prime, HBO Max, Disney Plus, Peacock, Hulu, and Youtube. Whereas it has Netflix, HBO Now, Vimeo, and Disney Plus. But remember, HBO Now means just HBO Now, not the newer HBO Max with exclusive stuff. If you don’t know how to watch Netflix with friends, both extensions are like a special club where you can have your virtual movie date with your special ones.",
  },
];

const page = () => {
  return (
    <>
      <head>
        <title> Teleparty extension Vs Scener Chrome extension</title>
        <meta
          name="description"
          content="STeleparty extension vs Scener Chrome
          extension is a browser extension where you can enjoy a vast variety of movies on one screen.."
        ></meta>
      </head>
      <Navbar />
      <div className={styles.blog}>
        <div className={styles.container}>
          <div className={styles.title}>
            <h1>Teleparty extension Vs Scener Chrome extension</h1>
          </div>
          {data.map((article) => (
            <div className={styles.para} key={article.id}>
              {article.heading.length > 0 && <h4>{article.heading}</h4>}
              <p>{article.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
