import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  constructor() { }

  getBlogs(){
    return this.blogsArray.slice();
  }

  getselectedBlog = new Subject<any>();

  // Tips for Instagram videos Promotion
  
  blogsArray:any[]= [
    {
      id: 'blog1',
      category: [],
      dateOfCreatingBlog:`26 May 2022`,
      header:`Instagram video marketing`,
      categoryId: 'The Golden Tips For Driving Your Instagram Audience Crazy With Videos - The perfect video-marketing guide',
      title: `The Golden Tips For Driving Your Instagram Audience Crazy With Videos`,
      subTitles:['Tips for Instagram videos Promotion'],
      imgSrc: "assets/images/blogImages/first-blog.jpg",
      instaSimpleLink:'https://www.instagram.com/p/Cd48Qm6PmuY/',
      twitterSimpleLink:'',
      facebookSimpleLink:'',
      linkedinSimpleLink:'',
      otherFacts: [
        {
          fact: `With the new feature of video that helps people to express themselves in a better manner leaving a lasting impression on the viewers, Instagram is gaining a lot of popularity. Through Instagram video marketing, the platform has become a great space for a brand to get discovered.`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: ''
        },
        {
          fact: `It is no longer restricted to being a general social media platform, it now has become a platform for brand promotion. By the magic of videos, audience engagement gets increased because people enjoy video content more.`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: ''
        },
        {
          fact: `The power of videos is unmatched, and being added as a feature on Instagram has taken marketing to a whole new level!`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: ''
        },
        {
          fact: `This blog will give you a glimpse of the golden tips for driving your Instagram audience crazy with videos.`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: ''
        },
        {
          fact: `According to Instagram statistics, the engagement on Instagram videos is 2x times more than on any other type of post. So, promoting your brand with an element of creativity along with fun will help your business to reach its true potential.`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: ''
        },
      ],
      subTitleFacts: [
        {
          fact: `Instagram video promotion is user-friendly as it saves the time of both the brand owners and the target audience. It gives a clear idea of the brand to the target audience in only a few seconds. For the brands, it provides an opportunity to showcase their services or products through storytelling because these days marketing is not just about the stuff that you make but about the stories you tell.`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: ''
        },
        {
          fact: `Following are the Golden tips for driving your Instagram audience crazy with videos:`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: ''
        },
      ],
      subTitleFactPoints: [
        {
          title:`<strong>Invest your time in 	Instagram Reels</strong>`,
          point: `Instagram reels are trending these days because this feature has changed the mindset of users from scroll and shift to stop and see. These 60 seconds videos are catchy. Hopping on the trend, and using trending audios, will help get your brand noticed by grabbing the attention of your target audience.`,
          imgSrc: 'assets/images/blogImages/image.png',
          imgCaption: '',
          videoSrc: '',
          instaLink: ''
        },
        {
          title:`<strong>Video series is a good idea</strong>`,
          point: `You can introduce Instagram video series based on your brand. For example, if you are a food blogger who keeps trying new cafes, and you went to a cafe that you loved, and want to share your experience about it, you can just make a video series like one can be on the ambiance, another on the food it offers and many more. `,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: ''
        },
        {
          title:`<strong>Video teasers are important</strong>`,
          point: `Just making the use of videos isn't enough. Suppose you are a fashion blogger, and recently you collaborated with a big brand like Manyavar. When you collaborate and are shooting with a great brand, keep your Instagram audience updated with it by making a small video teaser which helps in keeping your followers excited about your upcoming projects and maintaining their interest in your brand.`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: ''
        },
        {
          title:`<strong>Use dimensions appropriately</strong>`,
          point: `Imagine you made a video using all the tools, sprinkling the magic of creativity in it but completely ignoring the dimensions. Well, that would be a complete blunder. Your<a href="https://www.younedia.com/post/reasons-why-instagram-marketing-is-beneficial-for-your-brand" target="_blank"> Instagram video marketing strategy</a> is likely to fail if you do not consider dimensions before posting. Try posting your videos in square or vertical format because Instagram is a mobile platform. If you do not post accordingly, your videos are likely to be cropped, so try checking the dimensions before uploading them to avoid any damage.`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: ''
        },
        {
          title:`<strong>Post BTS(Behind The Scenes) videos</strong>`,
          point: `Even though social media portrays the lives of big brand owners and bloggers as perfect, still we know that it isn’t roses and unicorns all the time. We all are prone to make mistakes, even the perfect brand owners have bad days, your perfect blogger also gets the perfect shot after hundreds of retakes and it is alright. You need to make your audience feel connected with you. For that, post BTS videos on your Instagram account to show the originality of your brand which people can easily relate to. BTS videos are a sneak peek of the hard work behind your successful brand and viewers love to see rawness and relatable content on Instagram.`,
          imgSrc: '',
          imgCaption: '',
          videoSrc: '',
          instaLink: ''
        },
      ],
      finalNotes:[
          {
            finalNote:`Instagram has turned out to be one of the best platforms for brand promotion and enjoys a better engagement rate than other platforms.`
          },
          {
            finalNote:`If you are willing to grow your online presence through Instagram, it's time to start creating good ideas for Instagram videos.`
          },
          {
            finalNote:`Instagram has turned out to be one of the best platforms for brand promotion and enjoys a better engagement rate than other platforms.`
          },
          {
            finalNote:`The key is that your videos need not be expensive, they just need to be authentic with informative content. We at Dope Digital help to present your brand in a perfect manner by planning the perfect Instagram video marketing strategy that is aligned with your business goals by offering services like <a href="https://www.dopedigital.in/social-media-management" target="_blank">social media management</a>, website designing, SEO, SEM, and others.`
          },
          {
            finalNote:`For more information get in touch with us today`
          },
      ],
      description: ``
    },
  ]
}