import React from "react";
import Image from "next/image";

import Checkin_Image from 'assets/img/pubs/checkin.png';
import Kahoot_Image from 'assets/img/pubs/kahoot.png';

const SocialDistanceBlog = () => {
  return (
    <>
      <div className="modal-header">
        <h4 className="modal-title" id="modal-title-default">
          Social Distancing Without the Socially Distant
        </h4>
      </div>

      <div className="modal-body">
        <section id="publications" className="publications-section pb-md-4">
          <div className="container pb-md-4">
            <h4 className="display-5 text-left">
              Frequent Check-ins
            </h4>
            <p className="text-left"><mark>
              “Hey, what have you been up to? Have you been doing ok?”
            </mark></p>
            <div className="row">
              <div className="col-sm-12">
                <p>
                  In such a socially distant time, maintaining communication with work teams, friends and other relationships is vital. As the world pivoted to working from home, Marketing scholar Michelle is exceptionally grateful to be at a company equipped with the necessary technology resources to make this transition quickly and effectively. Some strategies she has personally undertaken to ensure open and clear communication at work include “Making a conscious effort to discuss work projects through video call instead of email, which makes a BIG difference to work productivity and also provides social connection!”
                </p>
              </div>
            </div>
            <br></br>
            <div className="row">
              <div className="col-sm-6">
                <p>
                  Checking up on your team regularly by scheduling meetings on Google Chat, Whatsapp or other online platforms “daily instead of weekly”, as Data Science and Decisions scholar Laurel suggests, reduces the distance we feel navigating life at home. End of quarter trivia nights on Kahoot, virtual morning coffee catch-ups or online cards for birthdays are another great way to strengthen a sense of community.
                </p>
              </div>
              <div className="col-sm-6">
                <Image alt="Check in" src={Checkin_Image} className="img-fluid float-right" />
              </div>
            </div>
          </div>
        </section>

        <section id="publications" className="publications-section pb-md-4">
          <div className="container pb-md-4">
            <h4 className="display-5 text-left">
              Staying Informed But Not Too Informed
            </h4>
            <p>
              It can be difficult to find the balance between keeping up to date with life, and feeling overwhelmed by the barrage of information conveyed through various media outlets. I’m one to immediately click on the most recent news stream, but I’ve been trying to reduce my intake of all the bleakness, economic and political upheaval happening globally as it can take a toll on my mental health. Whilst it is important to maintain an awareness of the current global climate, taking the time out of my day to “switch off” (badum tss) is much needed too.
            </p>
          </div>
        </section>

        <section id="publications" className="publications-section pb-md-4">
          <div className="container pb-md-4">
            <h4 className="display-5 text-left">
              New Possibilities
            </h4>
            <p>
              Here at Co-op Soc, our team has risen to the challenge of being exceptionally creative in hosting online events. As a student society, some activities we’ve looked at are online podcasts, movie nights, Spotify music countdowns, game streamings and challenge events, just to name a few.
            </p>
            <br></br>
            <div className="row">
              <div className="col-sm-4">
                <Image alt="Kahoot" src={Kahoot_Image} className="img-fluid" />
              </div>
              <div className="col-sm-8">
                <p>
                  The ways in which we traditionally delivered our society goals have been completely upturned, but with our engagement levels as high as ever, we’re incredibly excited about the endless horizon of new possibilities that have been able to be facilitated via Zoom and social media (TikTok in particular, of which I have been unashamedly obsessed with lately).
                </p>
              </div>
            </div>

          </div>
        </section>

        <section id="publications" className="publications-section pb-md-4">
          <div className="container pb-md-4">
            <h4 className="display-5 text-left">
              Contingency Planning
            </h4>
            <p>
              Being flexible to change is something the Executive team have been motivated to do. We have continued working on the key messages, events and actions we want to achieve when this period is over; although, we have been met with numerous challenges, particularly regarding the supply and production of our new merchandise. Thus in a time of such change, contingency plans have been helpful in allowing us to adapt quickly when obstacles arise.
            </p>
          </div>
        </section>
      </div>

      <p className="text-center">
        Written by 2020 Publications Director Susan Sun
      </p>
    </>
  );
};

export default SocialDistanceBlog;
